var li = document.querySelectorAll(".title");
var input = document.querySelectorAll(".input");
var len = li.length;


for (let i = 0; i < len; i++) {
  li[i].addEventListener("click", function() {
    //点击相应的span发生变化
    for (let j = 0; j < len; j++) {
      li[j].className = "title";
    }
    this.className = "on";
    this.style.cursor = "pointer";
    
    // 2）处理下面的ul
    for (let j = 0; j < len; j++) {
      input[j].style.display = "none";
    }
    //为什么这里是input[i]
    input[i].style.display = "block";
  });
}
//输入框得到焦点时，页面变黑
for (let i = 0; i <input.length ; i++) {
input[i].addEventListener('focus',function(){
//设置背景颜色
})
}
//二级导航栏显示与消失
var scope = document.querySelector("#scope");
var menu = document.querySelector(".overflow_menu");
//消失
  scope.addEventListener("mouseover", function() {
    menu.style.display = "block";
    this.style.cursor = "pointer";
  });

//消失
scope.addEventListener("mouseout", function() {
  menu.style.display = "none";
});


