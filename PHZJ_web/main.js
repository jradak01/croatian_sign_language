function toggle() {
    let x = document.getElementById("prva_");
    let y = document.getElementById("druga_");
    if (x.style.display == "none" && y.style.display== "none") {
      x.style.display = "block";
      y.style.display = "none";
    }
    else if(x.style.display == "block" && y.style.display== "none"){
        x.style.display = "none";
        y.style.display = "block";  
    }
    else if(x.style.display == "none" && y.style.display== "block"){
      x.style.display = "block";
      y.style.display = "none";
    }
}
let vrsta='';
//funkcije na gumb
function promijeniVrstuOsobneZamjenice(){
    URL= 'https://teachablemachine.withgoogle.com/models/ShX8fId6t/';
    vrsta="zamjenice";
    var div = document.getElementById('label-container');
    while(div.firstChild)
        div.removeChild(div.firstChild);
    document.getElementById('tijeloUp').scrollIntoView();
    document.getElementById('gumb').disabled=false;
    document.getElementById('opisIzvedbe').innerHTML="Ispruži kažiprst desne ruke te<br>ruku ispruži prema desno.";
    document.getElementById("labela").innerHTML="On";
    document.getElementById('gumb').onclick=init;
    document.getElementById('naslov').innerHTML='Osobne zamjenice';
    document.getElementById('slika').src='./slike/On.png';
    var div = document.getElementById('canvas');
    while(div.firstChild)
        div.removeChild(div.firstChild);
}
function promijeniVrstuSkola(){
    URL = 'https://teachablemachine.withgoogle.com/models/SVNExSX-H/';
    vrsta="skola";
    var div = document.getElementById('label-container');
    while(div.firstChild)
        div.removeChild(div.firstChild);
    document.getElementById('tijeloUp').scrollIntoView();
    document.getElementById('gumb').disabled=false;
    document.getElementById('opisIzvedbe').innerHTML="Savijte prste u šaku obje ruke.<br>Desnu ruku savijte u laktu, a lijevu<br>pozicionirajte ispod lakta i kružite<br>malim kružnim pokretima prema van.";
    document.getElementById("labela").innerHTML="Studirati";
    document.getElementById('gumb').onclick=init;
    document.getElementById('naslov').innerHTML='Obrazovanje';
    document.getElementById('slika').src='./slike/fakultet.png';
    document.getElementById('canvas').innerHTML="";
}
function promijeniVrstuOsnovno(){
    URL = 'https://teachablemachine.withgoogle.com/models/Ku8aKxfOm/';
    vrsta="osnovno";
    var div = document.getElementById('label-container');
    while(div.firstChild)
        div.removeChild(div.firstChild);
    document.getElementById('tijeloUp').scrollIntoView();
    document.getElementById('gumb').disabled=false;
    document.getElementById("labela").innerHTML="Bok";
    document.getElementById('gumb').onclick=init;
    document.getElementById('opisIzvedbe').innerHTML='Okrenite dlan prema sebi, savijte ruku u laktu<br>tako da dlan bude u razini ramena.<br>Pomičite ruku naprijed nazad (prema kameri pa od kamere).';
    document.getElementById('naslov').innerHTML='Osnovna komunikacija';
    document.getElementById('slika').src='./slike/pozdrav.png';
    document.getElementById('canvas').innerHTML="";
}

function PromijeniVrstuJednorucna(){
    URL='https://teachablemachine.withgoogle.com/models/d_3jfDqXJ/';
    vrsta='jednorucna';
    var div = document.getElementById('label-container');
    while(div.firstChild)
        div.removeChild(div.firstChild);
    document.getElementById('tijeloUp').scrollIntoView();
    document.getElementById('gumb').disabled=false;
    document.getElementById('gumb').onclick=init2;
    document.getElementById("labela").innerHTML="A";
    document.getElementById('opisIzvedbe').innerHTML='Okreni šaku prema van (prema kameri)<br>te skupi prste, a kažiprst ispruži<br>i nasloni na vanjsku stranu kažiprsta.';
    document.getElementById('naslov').innerHTML='Jednoručna abeceda';
    document.getElementById('slika').src='./slike/Aj.png';
    var div = document.getElementById('webcam-container');
    while(div.firstChild)
        div.removeChild(div.firstChild);
}
function PromijeniVrstuDvorucna(){
    URL='https://teachablemachine.withgoogle.com/models/0Tcw_NA_5/';
    vrsta='dvorucna';
    var div = document.getElementById('label-container');
    while(div.firstChild)
        div.removeChild(div.firstChild);
    document.getElementById('tijeloUp').scrollIntoView();
    document.getElementById('gumb').disabled=false;
    document.getElementById('gumb').onclick=init2;
    document.getElementById("labela").innerHTML="A";
    document.getElementById('opisIzvedbe').innerHTML='Na objema rukama spojite<br>vrhove kažiprsta i palca, a zatim spojite ruke.<br> Ostale prste ispružite i spojite<br>tako da formiraju trokut.';
    document.getElementById('naslov').innerHTML='Dvoručna abeceda';
    document.getElementById('slika').src='./slike/Ad.png';
    var div = document.getElementById('webcam-container');
    while(div.firstChild)
        div.removeChild(div.firstChild);
}
function PromijeniVrstuBrojevi(){
    URL='https://teachablemachine.withgoogle.com/models/qftlL45FJ/';
    vrsta='brojevi';
    var div = document.getElementById('label-container');
    while(div.firstChild)
        div.removeChild(div.firstChild);
    document.getElementById('tijeloUp').scrollIntoView();
    document.getElementById('gumb').disabled=false;
    document.getElementById('gumb').onclick=init2;
    document.getElementById("labela").innerHTML="Nula";
    document.getElementById('opisIzvedbe').innerHTML='Okreni dlan od sebe (prema kameri).<br>Spoji vrhove palca i kažiprsta (tako da formiraju o),<br>a ostale prste ispruži i raširi.';
    document.getElementById('naslov').innerHTML='Brojevi';
    document.getElementById('slika').src='./slike/nula.png';
    document.getElementById('webcam-container').innerHTML="";
}

let brojac=0;

function Promjena(odabir){
    for(let i = 0; i < odabir.length; i++){
        if(i==brojac){
            document.getElementById("labela").innerHTML=odabir[i].naziv;
            document.getElementById('opisIzvedbe').innerHTML=odabir[i].opis;
            document.getElementById('slika').src=odabir[i].slika;
        }
    }
    if(brojac==odabir.length){
        brojac=-1;
    }
}

function PromijeniZnak(){
    brojac+=1;
    if(vrsta=="zamjenice"){
        Promjena(zamjenice);
    }
    else if(vrsta=="skola"){
        Promjena(skola);
    }
    else if(vrsta=="osnovno"){
        Promjena(osnovno);
    }
    else if(vrsta=='brojevi'){
        Promjena(broj);
    }
    else if(vrsta=='jednorucna'){
        Promjena(abecedaJ);
    }
    else if(vrsta=='dvorucna'){
        Promjena(abecedaD);
    }
    
    document.getElementById('gumb2').disabled = true;
    document.getElementById('ispis').innerHTML="";
}

const skola=[
    {naziv: 'Studirati',opis:'Savijte prste u šaku obje ruke.<br>Desnu ruku savijte u laktu, a lijevu<br>pozicionirajte ispod lakta i kružite<br>malim kružnim pokretima prema van.', slika:'./slike/fakuktet.png'},
    {naziv: 'Škola',opis:'Ispruži kažiprst desne ruke te<br>vrh kažiprsta usmjeri prema kameri.', slika:'./slike/skola.png'},
    {naziv: 'Informatika',opis:'Pozicionirajte ruke u područje gornjeg<br>dijela trbuha. Opustite šake tako da dlan bude okrenut<br>prema dolje, a vrhovi prstiju okrenuti prema kameri.<br>Trepereći prstima razdvajajte šake i spajajte.<br>Šake se maksimalno razdvajaju do širine trupa.<br>Pokret podsjeća na tipkanje po tastaturi.', slika:'./slike/informatika.png'},
    {naziv: 'Matematika',opis:'Okrenite dlanove prema sebi(od kamere),<br>savijte ruke u laktu i pozicionirajte u visini glave.<br>Trepereći prstima ruke lagano spuštajte prema dolje.', slika:'./slike/matematika.png'},
    {naziv: 'Fizika',opis:'Napravite kuke kažiprstima lijeve<br>i desne ruke te u predjelu gornjeg<br> dijela trbuha "zakačite kuke".', slika: './slike/fizika.png'},
    {naziv: 'Znati',opis:'Ispružite kažiprst desne ruke i<br>vrhom prsta dotaknite desni rub čela.', slika:'./slike/znati.png'}
];
const zamjenice=[
    {naziv:'On',opis:'Ispruži kažiprst desne ruke te<br>ruku ispruži prema desno.', slika:'./slike/On.png'},
    {naziv:'Ti',opis:'Ispruži kažiprst desne ruke te<br>vrh kažiprsta usmjeri prema kameri.', slika:'./slike/Ti.png'},
    {naziv:'Ja',opis:'Savijte prste u šaku obje ruke.<br>Desnu ruku savijte u laktu, a lijevu<br>pozicionirajte ispod lakta i kružite<br>malim kružnim pokretima prema van.', slika:'./slike/Ja.png'},
    {naziv:'Mi',opis:'Ispružite kažiprst desne ruke te<br>pozicionirajte ruku kao da pokazujete<br>na pod ispred sebe i kružite kažiprstom.', slika:'./slike/Mi.png'},
    {naziv:'Vi',opis:'Ispruži kažiprst desne ruke te<br>vrh kažiprsta usmjeri prema kameri,<br>ali više prema dnu kamere te kružite prstom.', slika:'./slike/Vi.png'},
    {naziv:'Oni',opis:'Ispruži kažiprst desne ruke te<br>ruku ispruži prema lijevo i kružite rukom.', slika:'./slike/Oni.png'}
];
const osnovno=[
    {naziv:'Bok',opis:'Okrenite dlan prema sebi, savijte ruku u laktu<br>tako da dlan bude u razini ramena.<br>Pomičite ruku naprijed nazad (prema kameri pa od kamere).',slika:'./slike/pozdrav.png'},
    {naziv:'Gluh',opis:'Ispružite kažiprst te vrhom prsta<br>dodirnite uho pa usta.',slika:'./slike/Gluh.png'},
    {naziv:'Upoznati',opis:'Ispružite kažiprst i srednji prst obje ruke.<br>Stavite ruke u razunu iznad bokova sa strane.<br>Zatim spojite vrhove prstiju.',slika:'./slike/Upoznati.png'},
    {naziv:'Da',opis:'Ispružite mali prst i palac desne ruke.<br>Stavite ruku po sredini trbuha te u ručnom zglobu rotirajte šaku.',slika:'./slike/Da.png'},
    {naziv:'Ne',opis:'Okrenite dlan desne ruke prema van (prema kameri).<br>Ispružite kažiprst te od lijevog ramena povucite ruku prema desnom.',slika:'./slike/Ne.png'},
    {naziv:'Osoba',opis:'Ispružite desnu ruku prema desno. Formirajte prste u obliku<br>slova C dvoručne abecede. Od razine glave spuštajte ruku prema dolje.',slika:'./slike/Osoba.png'},
];
const abecedaJ=[
    {naziv:'A', opis:'Okreni šaku prema van (prema kameri)<br>te skupi prste, a kažiprst ispruži<br>i nasloni na vanjsku stranu kažiprsta.', slika:'./slike/Aj.png'},
    {naziv:'B', opis:'Okreni šaku prema van (prema kameri)<br>Skupite i ispružite prste, a palac savinite te<br>stavite na sredinu dlana.', slika:'./slike/Bj.png'},
    {naziv:'C', opis:'Okrenite dlan desne ruke prema lijevo.<br>Formirajte prstima polukrug (slovo c).', slika:'./slike/Cj.png'},
    {naziv:'D', opis:'Okrenite dlan desne ruke prema lijevo.<br>Vrh palca spojite s vrhom kažiprsta,<br>srednjeg prsta i prstenjaka tako da formirate krug.<br>Mali prst ispružite prema gore.', slika:'./slike/Dj.png'},
    {naziv:'E', opis:'Okreni šaku prema van (prema kameri)<br>te savinite sve prste po sredini.', slika:'./slike/Ej.png'},
    {naziv:'F', opis:'Okreni šaku prema van (prema kameri)<br>te spojite sve prste. Ispružite mali prst,<br>prstenjak i srednji prst. Spojite vrhove kažiprsta i palca.', slika:'./slike/Fj.png'},
    {naziv:'G', opis:'Okreni šaku prema van (prema kameri)<br>te savinte ruku u ručnom zglobu u stranu.<br>Savinite mali prst, prstenjak i srednji prst.<br>Ispružite kažiprst, a neka palac dodiruje sredinu kažiprsta.', slika:'./slike/Gj.png'},
    {naziv:'H', opis:'Okreni šaku prema van (prema kameri)<br>te savinite ruku u ručnom zglobu u stranu.<br>Savinite mali prst, prstenjak i srednji prst.<br>Spojite i ispružite palac i kažiprst.', slika:'./slike/Hj.png'},
    {naziv:'I', opis:'Okreni šaku prema van (prema kameri)<br>te skupte sve priste. Ispružite mali prst.', slika:'./slike/Ij.png'},
    {naziv:'J', opis:'Okreni šaku prema van (prema kameri) te šaku nagnite u stranu.<br>Skupte sve priste. Mali prst savijte u "kuku".', slika:'./slike/Jj.png'},
    {naziv:'K', opis:'Okreni šaku prema van (prema kameri)<br>, skupite mali prst i prstenjak, ispružite i raširite<br>srednji prst i kažiprst, a palac postavite između njih.', slika:'./slike/Kj.png'},
    {naziv:'L', opis:'Okreni šaku prema van (prema kameri)<br>, skupite mali prst, prstenjak i srednji prst,<br>a ispružite i raširite kažiprst i palac (formira se obris slova L).', slika:'./slike/Lj.png'},
    {naziv:'M', opis:'Okreni šaku prema dolje te skupite<br>mali prst i palac, a ostala tri prsta ispružite<br>tako da im vrhovi budu okrenuti prema dolje.', slika:'./slike/Mj.png'},
    {naziv:'N', opis:'Okreni šaku prema dolje te skupite<br>mali prst, palac i kažiprst, a ostala tri prsta ispružite<br>tako da im vrhovi budu okrenuti prema dolje.', slika:'./slike/Nj.png'},
    {naziv:'O', opis:'Okrenite dlan desne ruke prema lijevo.<br>Neka vam se vrhovi prstiju dodiruju tako da<br>formiraju oblik slova o.', slika:'./slike/Oj.png'},
    {naziv:'P', opis:'Okrenite dlan desne ruke prema lijevo.<br>Neka vam se vrhovi prstiju dodiruju tako da<br>formiraju oblik slova o<br> te ispružite kažiprst tako da vrh prsta bude okrenut lijevo.', slika:'./slike/Pj.png'},
    {naziv:'R', opis:'Okreni šaku prema van (prema kameri)<br>te skupite mali prst, prstenjak i palac.<br>Ispružite i isprepletite kažiprst i srednji prst.', slika:'./slike/Rj.png'},
    {naziv:'S', opis:'Okreni šaku prema van (prema kameri)<br>te skupite šaku tako da palac bude vidljiv<br>cijeli i prelazi preko ostalih prstiju.', slika:'./slike/Sj.png'},
    {naziv:'T', opis:'Okreni šaku prema van (prema kameri)<br>te savinte ruku u ručnom zglobu u stranu.<br>Savinite mali prst, prstenjak i srednji prst.<br>Ispružite i raširite kažiprst i palac.', slika:'./slike/Tj.png'},
    {naziv:'U', opis:'Okreni šaku prema van (prema kameri)<br>te skupite mali prst, prstenjak i palac.<br>Ispružite i spojite kažiprst i srednji prst.', slika:'./slike/Uj.png'},
    {naziv:'V', opis:'Okreni šaku prema van (prema kameri)<br>te skupite mali prst, prstenjak i palac.<br>Ispružite i raširite kažiprst i srednji prst.', slika:'./slike/Vj.png'}
];
const abecedaD=[
    {naziv:'A', opis:'Na objema rukama spojite<br>vrhove kažiprsta i palca, a zatim spojite ruke.<br> Ostale prste ispružite i spojite<br>tako da formiraju trokut.', slika:'./slike/Ad.png'},
    {naziv:'B', opis:'Na objema rukama spojite<br>vrhove kažiprsta i palca, a zatim spojite ruke.<br>Ostala tri prsta ispravite i savinite u korijenu prsta.', slika:'./slike/Bd.png'},
    {naziv:'C', opis:'Okrenite desnu ruku prema lijevo<br>te skupite mali prst, prstenjak i srednji prst.<br>Kažiprstom i palcem formirajte polukroug (oblik slova c).', slika:'./slike/Cd.png'},
    {naziv:'D', opis:'Desnom rukom formirajte slovo C (iz prethodnog primjera),<br>a na lijevoj ruci ispružite kažiprst <br>(ostale savinite). Spojite ruke tako da vrhovi "slova c dodiruju kažiprst druge ruke.', slika:'./slike/Dd.png'},
    {naziv:'Đ', opis: 'Ispružite kažiprst jedne ruke,<br>a spojite vrh srednjeg prsta druge ruke i tog kažiprsta.<br>Isto tako, palac druge ruke postavite na korijen kažiprsta.<br>Kažiprst te ruke postavite na sredinu sipruženog kažiprsta.', slika:'./slike/DJd.png'},
    {naziv:'E', opis:'Formirajte slovo c (kao i u prijašnjem primjeru)<br>te isprepletite srednji prst i kažiprst.', slika:'./slike/Ed.png'},
    {naziv:'F', opis:'Okrenite vrhove prstiju obje ruke prema dolje (i dlanove prema sebi).<br>Ispružite i raširite kažiprst i srednji prst,<br>a ostale skupite u šaku. Prekrižite prste.', slika:'./slike/Fd.png'},
    {naziv:'G', opis:'Okrenite dlanove u stranu te ih skupite u šaku.<br> Jednu šaku naslonite na drugu.', slika:'./slike/Gd.png'},
    {naziv:'H', opis:'Napravite kuke s obje ruke te ih "zakačite,<br>a ostale prste skupite u šake.', slika:'./slike/Hd.png'},
    {naziv:'I', opis:'Okrenite desni dlan od sebe (prema kameri),<br>ispružite kažiprst, a ostale prste skupite u šaku.', slika:'./slike/Id.png'},
    {naziv:'J', opis:'Okrenite desni dlan od sebe (prema kameri) te nagnite šaku u stranu.<br>Kažiprst savijte u "kuku", a ostale prste skupite u šaku.', slika:'./slike/Jd.png'},
    {naziv:'K', opis:'Ispružite kažiprst lijeve ruke, a ostale skupite u šaku.<br>Kažiprst desne ruke lagano savinite u srednjem zglobu prsta<br>te tim zglobom dotaknite sredinu drugog kažiprsta.<br>Ostale prste savinite u šaku.', slika:'./slike/Kd.png'},
    {naziv:'L', opis:'Okrenite dlan desne ruke prema lijevo.<br>Ispružite i raširite palac i kažiprst.<br>Ostale prste skupite u šaku.', slika:'./slike/Ld.png'},
    {naziv:'M', opis:'Okrenite lijevi dlan od sebe (prema kameri), ispružite<br>i spojite sve prste. Na desnoj ruci skupite u šaku<br>palac i mali prst, a ostala tri spojite i ispružite.<br>Prislonite vrhove prstiju desne ruke na sredinu dlana lijeve.', slika:'./slike/Md.png'},
    {naziv:'N', opis:'Okrenite lijevi dlan od sebe (prema kameri), ispružite<br>i spojite sve prste. Na desnoj ruci skupite u šaku<br>palac, prstenjak i mali prst, a ostala dva spojite i ispružite.<br>Prislonite vrhove prstiju desne ruke na sredinu dlana lijeve.', slika:'./slike/Nd.png'},
    {naziv:'O', opis:'Okrenite desni dlan prema lijevo te spojite<br>vrhove kažiprsta i palca tako da formiraju krug.<br>Srednji prst naslonite na vanjsku stranu<br>kažiprsta, prstenjak na srednji prst i mali prst na prstenjak.', slika:'./slike/Od.png'},
    {naziv:'P', opis:'Ispružite kažiprtse. Vrh kažiprsta jedne ruke<br>okrenite prema gore, a druge (desne) prema lijevo.<br> Spojite vrhove kažiprsta. Vrh palca desne ruke<br>prislonite na sredinu kažiprsta druge ruke.', slika:'./slike/Pd.png'},
    {naziv:'R', opis:'Okrenite dlan od sebe (prema kameri).<br>Skupite u šaku mali prst i prstenjak.<br>Ispružite i spojite vrhove ostala tri prsta.', slika:'./slike/Rd.png'},
    {naziv:'S', opis:'Napravite na objema šakama slovo c (po već prije prikazanom primjeru)<br>te spojite palac jedne ruke s kažiprstom druge.', slika:'./slike/Sd.png'},
    {naziv:'T', opis:'Ispružite kažiprste obje ruke, a ostale prste skupite u šaku.<br>Vrh kažiprsta jedne ruke usmjerite prema gore,<br> a druge prema lijevo (desne šake).<br>Neka vrh kažiprsta okrenutog prema gore dira sredinu drugog.', slika:'./slike/Td.png'},
    {naziv:'U', opis:'Okrenite dlanove od sebe (prema kameri) te ispružite i<br>raširite kažiprst i palac, a ostale skupite u šaku.<br> Spojite palčeve.', slika:'./slike/Ud.png'},
    {naziv:'V', opis:'Okrenite dlan od sebe (prema kameri) te ispružite i raširite<br> kažiprst i srednji prst, a ostale skupite u šaku.', slika:'./slike/Vd.png'},
    {naziv:'Z', opis:'Okrenite dlan od sebe (prema kameri) te ispružite i raširite<br> kažiprst i srednji prst, a ostale skupite u šaku.', slika:'./slike/Zd.png'}
];
const broj=[
    {naziv:'Nula', opis:'Okreni dlan od sebe (prema kameri).<br>Spoji vrhove palca i kažiprsta (tako da formiraju o),<br>a ostale prste ispruži i raširi.', slika:'./slike/nula.png'},
    {naziv:'Jedan', opis:'Okreni dlan prema sebi.<br>Ipruži palac prema gore, a ostale<br>prste skupi u šaku.', slika:'./slike/jedan.png'},
    {naziv:'Dva', opis:'Okreni dlan prema sebi.<br>Ipruži palac prema gore i kažiprst, a ostale<br>prste skupi u šaku.', slika:'./slike/dva.png'},
    {naziv:'Tri', opis:'Okreni dlan prema sebi.<br>Ipruži palac prema gore, kažiprst i srednji prst, a ostale<br>prste skupi u šaku.', slika:'./slike/tri.png'},
    {naziv:'Četiri', opis:'Okreni dlan prema sebi.<br>Skupi palac, a ostale prste ispruži.', slika:'./slike/cetiri.png'},
    {naziv:'Pet', opis:'Okreni dlan prema sebi te ispruži i raširi prste.', slika:'./slike/pet.png'}
];
