// ==UserScript==
// @name         Pokaż atak
// @version      1.0
// @description  pokaż atak
// @author       menemeth
// @include      http://*.grepolis.com/game/*
// @include      https://*.grepolis.com/game/*
// @exclude      https://pl.grepolis.com
// ==/UserScript==


window.addEventListener('load', function() {
    function atak(){
        let okno1 = document.querySelector(".btn_wnd.close");
        if (okno1){
            okno1.click();
        }
    }

    function polecenia(){
        let okno2 = document.getElementById("toolbar_activity_commands");
        if (okno2){
            okno2.click();
        }
    }

    function clik_udost(){
        let okno3 = document.getElementById('gd_cmd_vrvw_share');
        if (okno3){
            okno3.click();
        }
    }

    function potwierdz(){
        let okno4 = document.getElementById('gd_cmd_do_upload');
        if(okno4){
            okno4.click();
        }
    }

    function zamknij(){
        let asd = document.querySelector('.icon_right.icon_type_speed.ui-dialog-titlebar-close');
        if (asd){
            asd.click();
            asd.click();
        }
    }

    function sprawdzOkno() {
        var okno = document.querySelector('.js-window-main-container.classic_window.militia_welcome');
        if (okno) {
            setTimeout(atak, 10);
            setTimeout(polecenia, 1000);
            setTimeout(clik_udost, 6000);
            setTimeout(potwierdz, 11000);
            setTimeout(zamknij, 30000);
            setTimeout(sprawdzOkno, 300000);
        } else {
            console.log("Okna nie ma");
            setTimeout(sprawdzOkno, 60000);
        }
    }
    sprawdzOkno();
});