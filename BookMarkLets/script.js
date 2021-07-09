(function() {
    console.log("bookmarklet starting");
    let paragraphs = document.getElementsByTagName('div');
    for (let i=0;i<paragraphs.length;i++){
        paragraphs[i].innerHTML = 'Kitten'
    }
})();

