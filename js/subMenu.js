  /*3.0 加二级菜单18-12-2*/ 
!function() {
    let liTags = document.querySelectorAll('nav > ul > li');  // not array , is a Object
    for( let i = 0 ; i < liTags.length ; i++ ) {
        liTags[i].onmouseenter = function(e){
            // console.dir(e) //这个mouse对象
            // console.dir(e.currentTarget) //html
            e.currentTarget.classList.add('active');
        }
        liTags[i].onmouseleave = function(e){
            e.currentTarget.classList.remove('active');
        }
    }
}.call() 
  
  