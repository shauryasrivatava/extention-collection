(function() {
    console.log("bookmarklet starting");
    let paragraphs = document.getElementsByTagName('p');
    for (let i=0;i<paragraphs.length;i++){
        paragraphs[i].innerHTML = 'Kitten'
    }
})();

