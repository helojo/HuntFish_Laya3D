(function () {
    var gameVersionObj = document.getElementById("gameVersion");
    if (gameVersionObj) {
        gameVersion = gameVersionObj.getAttribute("value");
    }
    var indexjs = document.createElement('script');
    indexjs.async = false;
    indexjs.src = "index.js?v=" + gameVersion;
    document.body.appendChild(indexjs);
})();