var lis = document.querySelectorAll("#menu_li");
for (let i = 0; i < lis.length; i++) {
  //鼠标移入
  lis[i].addEventListener("mouseover", function() {
    // console.log(lis[i]);
    lis[i].className = "menu_li";
    this.style.cursor = "pointer";
  });
  //鼠标移开
  lis[i].addEventListener("mouseout", function() {
    lis[i].className = "";
  });
}

//滑过消息的时候下拉菜单显示
//注意要获取滑过的这个li，然后ul进行的展开事件
var li = document.querySelector(".scope3");
var ul = document.querySelector(".two");
//滑过消息展示子菜单
li.addEventListener("mouseover", function() {
  ul.style.display = "block";
  this.style.cursor = "pointer";
});
//鼠标滑出消息，隐藏子菜单
li.addEventListener("mouseout", function() {
  ul.style.display = "none";
});
//获取消息父元素的子节点
var item = document.getElementById("two").getElementsByTagName("li");
//滑过消息下的文字改变背景颜色
for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("mouseover", function() {
    item[i].style.backgroundColor = "rgba(192, 191, 191, 0.377)";
    this.style.cursor = "pointer";
  });
  //滑出消息下的文字恢复背景颜色
  item[i].addEventListener("mouseout", function() {
    item[i].style.backgroundColor = "";
    this.style.cursor = "pointer";
  });
}
//会员中心下滑子菜单
var scope1 = document.querySelector(".scope1");
var privilege = document.querySelector(".privilege");
scope1.addEventListener("mouseover", function() {
  privilege.style.display = "block";
  this.style.cursor = "pointer";
});
//会员中心鼠标移出子菜单消失
scope1.addEventListener("mouseout", function() {
  privilege.style.display = "none";
 
});

//会员中心鼠标滑过里面的字变颜色
var as = document.getElementById("1111").getElementsByTagName("p");
for (let i = 0; i < as.length; i++) {
  as[i].addEventListener("mouseover", function() {
    // console.log("as[i]", as[i]);
    as[i].style.color = "red";
    this.style.cursor = "pointer";
  });
}
//会员中心鼠标滑过里面的字变颜色
var b = document.getElementById("2222").getElementsByTagName("p");
for (let i = 0; i < b.length; i++) {
b[i].addEventListener("mouseover", function(){
  b[i].style.color = "black";
  this.style.cursor = "pointer";
})
}
//收藏滑过显示二级菜单
var scope2 = document.querySelector(".scope2");
var collect = document.querySelector(".collect");
scope2.addEventListener("mouseover", function() {
  collect.style.display = "block";
  this.style.cursor = "pointer";
});
//会员中心鼠标移出子菜单消失
scope2.addEventListener("mouseout", function() {
  collect.style.display = "none";
 
});

//监听滚动事件
window.onscroll = function () {
  // 滚动时当前位置距顶部的距离
  var topScroll = document.documentElement.scrollTop;
  console.log(topScroll)
  // 获取导航id
  var nav = document.getElementById("nav");
  // 滚动距离大于多少时执行下面事件
  if (topScroll > 69) {
      
      // 到了那个距离相当于给了导航定位
      nav.style.position = 'fixed';
      nav.style.top = '0';
      nav.style.zIndex = '99'
  } else {
      // 小于的时候让他恢复原状
      nav.style = ''
  }}