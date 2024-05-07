let URL = '';
let model, webcam, ctx, labelContainer, maxPredictions;

//async funkcija na gumb za pokretanje kamere
async function init() {
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';
    document.getElementById('subcontainer').style.display = "block"; 
    document.getElementById('subcontainer').scrollIntoView();
    document.getElementById('gumb').disabled=true;
    document.getElementById('canvas').style.display="block";
    document.getElementById('webcam-container').style.display="none";
    model = await tmPose.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const flip = true; // whether to flip the webcam
    webcam = new tmPose.Webcam(400, 400, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    webcam.play();
    window.requestAnimationFrame(loop);

    const canvas = document.getElementById('canvas');
    canvas.width = 400; canvas.height = 400;
    ctx = canvas.getContext('2d');
    labelContainer = document.getElementById('label-container');
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement('div'));
    }
}
async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
}

async function predict() {
    if(vrsta=="zamjenice" || vrsta=="osnovno" || vrsta=="skola"){
        const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
        const prediction = await model.predict(posenetOutput);
        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ': ' + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;
            if(prediction[i].className==document.getElementById("labela").innerHTML && prediction[i].probability.toFixed(2)>0.96)
            {
                document.getElementById('gumb2').disabled = false;
                document.getElementById('ispis').innerHTML="Točno!";
                document.getElementById('ispis').style='color: green;';
                
            }
        }
        drawPose(pose);
    }
    else{
        const prediction = await model.predict(webcam.canvas);
        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;
            if(prediction[i].className==document.getElementById("labela").innerHTML && prediction[i].probability.toFixed(2)>0.96)
            {
                document.getElementById('gumb2').disabled = false;
                document.getElementById('ispis').innerHTML="Točno!";
                document.getElementById('ispis').style='color: green;';
            }
        }
    }
}

function drawPose(pose) {
    ctx.drawImage(webcam.canvas, 0, 0);
    if (pose) {
        const minPartConfidence = 0.5;
        tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
        tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
    }
}
