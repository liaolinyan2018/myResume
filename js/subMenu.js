  /*3.0 加二级菜单18-12-2*/ 
(function() {
    let liTags = document.querySelectorAll('nav > ul > li')
    liTags.forEach((v) => {
        v.onmouseenter = (e) => { e.currentTarget.classList.add('active') }
        v.onmouseleave = (e) => { e.currentTarget.classList.remove('active') }
    })
})() 
  
  