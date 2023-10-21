const accordions = document.querySelectorAll(".list-item");

const removeActive = () => {
  //remove 'active' class from all ptags
  for (let accordion of accordions) {
    accordion.querySelector("p").classList.remove("active");
  }
};

const changeIcon = () => {
  for (let accordion of accordions) {
    //change icon to add
    let spanTag = accordion.querySelector("h3 span");
    spanTag.innerText = "add";
  }
};

for (let accordion of accordions) {
  accordion.querySelector("h3").onclick = function () {
    changeIcon();

    //change icon to close
    let spanTag = accordion.querySelector("h3 span");
    spanTag.innerText = "close";
    if (this.parentElement.querySelector("p").classList.contains("active")) {
      changeIcon();

      //remove 'active' class from pTag if it is already open
      this.parentElement.querySelector("p").classList.remove("active");
    } else {
      removeActive();
      //add 'active' class to pTag
      this.parentElement.querySelector("p").classList.add("active");
    }
  };
}
