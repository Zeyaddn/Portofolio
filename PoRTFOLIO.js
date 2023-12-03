var typed = new Typed(".text", {
    strings:["Zeyad Elassad"] ,
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  