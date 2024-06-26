// let URL=''
// let model, webcam, labelContainer, maxPredictions;
async function init2() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    document.getElementById('subcontainer').style.display = "block"; 
    document.getElementById('subcontainer').scrollIntoView();
    document.getElementById('gumb').disabled=true;
    document.getElementById('webcam-container').style.display="block";
    document.getElementById('canvas').style.display="none";
        
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(400, 400, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

        // append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement("div"));
    }
}
// async function loop() {
//     webcam.update(); // update the webcam frame
//     await predict();
//     window.requestAnimationFrame(loop);
// }
    // run the webcam image through the image model
// async function predict() {
//     // predict can take in an image, video or canvas html element

//     const prediction = await model.predict(webcam.canvas);
//     for (let i = 0; i < maxPredictions; i++) {
//         const classPrediction =
//             prediction[i].className + ": " + prediction[i].probability.toFixed(2);
//         labelContainer.childNodes[i].innerHTML = classPrediction;
//         if(prediction[i].className==document.getElementById("labela").innerHTML && prediction[i].probability.toFixed(2)>0.96)
//         {
//             document.getElementById('gumb2').disabled = false;
//             document.getElementById('ispis').innerHTML="Točno!";
//             document.getElementById('ispis').style='color: green;';
//         }
//     }
// }