console.log("everything is fine");

let filenames =[
    "kirmada1.jpg",
    "kirmada2.jpg",
    "kirmada3.jpg",
    "kirmada4.jpg"
];

let imgs =document.getElementsByTagName('img');

for (imgElt of imgs) {
    let r= Math.floor(Math.random() * filenames.length);
    let file= 'kirmada/'+filenames[r];
    let url =  chrome.extension.getURL(file);
    imgElt.src= url;
    console.log(url );
}