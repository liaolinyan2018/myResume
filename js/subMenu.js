  /*3.0 加二级菜单18-12-2*/ 
  let liTags = document.querySelectorAll('nav.menu > ul > li');
  //console.log(aTags) //aTags是hash
  for(let i=0;i<liTags.length;i++){
      liTags[i].onmouseenter = function(x){
          //liTags不可靠，最好不要用aTags[i]
          x.currentTarget.classList.add('active');
      }
      liTags[i].onmouseleave = function(y){
          //aTags不可靠，最好不要用aTags[i]
          y.currentTarget.classList.remove('active');
      }
  }