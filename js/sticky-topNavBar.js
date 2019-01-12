 /*2.0 会动的topNavBar.18-12-2*/
 !function() {
    var view = document.querySelector('#topNavBar')
    view.style.border = '1px solid red';
    window.addEventListener('scroll',function(){
        //console.log(window.scrollY);滚动条到窗口顶部（上）的垂直距离，只要滚就变
        if(window.scrollY > 0){topNavBar.classList.add('sticky');}
        else{topNavBar.classList.remove('sticky');}
    })
 }.call()
        
        