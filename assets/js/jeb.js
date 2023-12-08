document.getElementById("jeb").addEventListener("click", function() {
    changeCouleurArcEnCiel();
});

function changeCouleurArcEnCiel() {
    const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'];
    let index = 0;

    function changeCouleur() {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }

    const intervalId = setInterval(changeCouleur, 200);

    setTimeout(function() {
        clearInterval(intervalId);
        document.body.style.backgroundColor = '';
    }, 3000);
}