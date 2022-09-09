$(".nav__toggle").click(function () {
  this.classList.toggle("is-active");
  $(".nav__wrapper").slideToggle(function () {
    this.style.display = null;
    this.classList.toggle("is-active");
    removeItemActiveClasses.call(document.querySelector(".menu"));
  });
})

$(".wpml-ls-item-legacy-dropdown-click").click(function() {
  this.classList.toggle("is-active");
})

// Removes active classes in navbar elements
function removeActiveClasses() {
  const element = this.querySelector(".is-active");
  if(element) {
    element.classList.remove("is-active");
    removeActiveClasses.call(this);
  }
}

$("body").click(function () {
  removeActiveClasses.call(document.querySelector(".navbar"));
})

// Dropdown handler
function removeItemActiveClasses() {
  const element = this.querySelector(".menu-item-has-children.is-active")
  if(element) {
    element.classList.remove("is-active");
    removeItemActiveClasses.call(this);
  }
}


let previousClick = 0;
$(".navbar").on("click", function (e) {
  e.stopPropagation();
  if(window.innerWidth > 1199) return;
  const currentClick = Date.now();
  const element = $( e.target ).parent();
  if(element.hasClass("menu-item-has-children")) {
    if(!element.hasClass("is-active")) {
      removeItemActiveClasses.call(document.querySelector(".menu"));
    } 
    if(currentClick - previousClick > 200) {
      e.preventDefault();
      const subMenu = element.find(".sub-menu")
      subMenu.slideToggle(function () {
        this.style.display = null;
        element.toggleClass("is-active");
      })
    } 
  
    previousClick = currentClick;
  }
});

