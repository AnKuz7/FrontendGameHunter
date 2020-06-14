
(function(){
    window.onload = init;

    function enterPortal(){
        document.location.href = "portal.html";
    }

    function init(){
        var btn_enter = document.getElementById("enter");
        btn_enter.addEventListener('click', enterPortal, false);
    }
})();