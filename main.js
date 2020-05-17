let menuStatus = false;

let openMenuBar = function() {

  let menuBar = document.querySelector(".open-menubar");
  let menuBarH2 = document.querySelector(".open-menubar h2");
  let menuProjLinks = document.querySelector(".open-menubar section a");

  if (menuStatus === false) {
    menuBar.style.height = "100px";
    menuBarH2.style.visibility = "visible";
    menuProjLinks.style.visibility = "visible";
    menuStatus = true;

  } else {
    menuBarH2.style.visibility = "hidden";
    menuProjLinks.style.visibility = "hidden";
    menuBar.style.height = "0px";
    menuStatus = false;
  }

}