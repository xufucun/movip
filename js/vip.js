

function onPlay(){
    var oJK = document.getElementById("jk");
    var sJK=oJK.options[oJK.selectedIndex].value;
    var sVipUrl = document.getElementById("vipurl").value;
    var oWin = document.getElementById("play");
    if (sVipUrl.length>0){
        oWin.src=sJK + sVipUrl;
    }
}
