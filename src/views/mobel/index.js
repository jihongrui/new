var box = document.querySelector(".input_box");

document.addEventListener("click", function(e) {

  console.log("this", e.target.type);
  if (e.target.id == "input") {
    box.className = "change";
  } else {
    box.className = "input_box";
  }
});
