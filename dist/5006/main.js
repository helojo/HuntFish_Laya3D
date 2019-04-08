(function () {
    var gameVersionObj = document.getElementById("gameVersion");
    if (gameVersionObj) {
        gameVersion = gameVersionObj.getAttribute("value");
    }
    var indexjs = document.createElement('script');
    indexjs.async = false;
    indexjs.src = "index5509e806.js?v=" + gameVersion;
    document.body.appendChild(indexjs);
})();