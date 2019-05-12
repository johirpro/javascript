function openTab(event, tabName) {
    var i, tabdata, tab;
    tabdata = document.getElementsByClassName("tabItem");
    for (i = 0; i < tabdata.length; i++) {
        tabdata[i].style.display = "none";
    }
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();