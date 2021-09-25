console.log("HELLO");

const test = () => {
  console.log("this is a test");
};

// mubile menu
const close = document.querySelector(".close");
const menu = document.querySelector(".menu-hamburger");
const open = document.querySelector("#open-hamburger");

// btnHumburger.addEventListener("click", function () {
// 	if (btnHumburger.classList.contains("open")) {
// 	  btnHumburger.classList.remove("open");
// 	  menu.classList.add("hidden");
// 	  headernav.classList.remove("black-in");
// 	  headernav.classList.add("black-out");
// 	  hamburgerLogo.classList.remove("black-in");
// 	  hamburgerLogo.classList.add("black-out");
// 	} else {
// 	  hamburgerLogo.classList.remove("black-out");
// 	  hamburgerLogo.classList.add("black-in");
// 	  headernav.classList.remove("black-out");
// 	  headernav.classList.add("black-in");
// 	  btnHumburger.classList.add("open");
// 	  menu.classList.remove("hidden");
// 	}
//   });

close.addEventListener("click", () => {
  menu.classList.add("hide");
  menu.classList.remove("open");

  open.classList.remove("hide");
  open.classList.add("open");

});

open.addEventListener("click", () => {
  menu.classList.add("open");
  menu.classList.remove("hide");
  
  open.classList.add("hide");
  open.classList.remove("open");
});
