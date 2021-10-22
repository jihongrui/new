//获取事件源
var p = document.querySelector("#scope3");
var lis = document.querySelector(".two_menu");
var len = lis.length;
p.addEventListener("mouseover", over);
function over() {
  lis.style.display = "block";
}
document.addEventListener("mouseup", up);
function up() {
  lis.style.display = "none";
}

var spans = document.querySelectorAll(".span");
var uls = document.querySelectorAll(".content");
var len = spans.length;

for (let i = 0; i < len; i++) {
  spans[i].addEventListener("click", function() {
    for (let j = 0; j < len; j++) {
      spans[j].className = "";
    }
    this.className = "on";
    this.style.cursor = "pointer";

    // 2）处理下面的ul
    for (let j = 0; j < len; j++) {
      uls[j].style.display = "none";
    }
    //为什么这里是uls[i]
    uls[i].style.display = "block";
  });
}

