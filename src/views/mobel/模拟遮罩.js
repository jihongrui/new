var img=document.querySelector('.img_container')
img.addEventListener('mouseover',over)
function over(){
    console.log('img',img)
    img.style.className='.img_container .mask'
}