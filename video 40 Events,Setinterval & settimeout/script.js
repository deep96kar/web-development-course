let btn = document.querySelector("#btn");

btn.addEventListener("dblclick", () => {
  //   alert("i was clicked");
  document.querySelector(".box").innerHTML =
    "<b>yayy you are clicked</b> Enjoy your click!";
});

btn.addEventListener("contextmenu", () => {
  alert("Dont hack us by right click please");
});

document.addEventListener("keydown", (event) => {
  console.log(event.key,event.keyCode);
});
