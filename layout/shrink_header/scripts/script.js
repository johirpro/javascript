window.onscroll = function() {shrinkHeader()};

function shrinkHeader() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("topHeader").style.fontSize = "25px";
    } else {
        document.getElementById("topHeader").style.fontSize = "80px";
    }
}
