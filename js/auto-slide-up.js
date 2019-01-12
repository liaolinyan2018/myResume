 /*6.0添加页面内容随滚动的动画-这是一次性的还存在bug*/
!function() {
     //添加offset类
     let specialTags = document.querySelectorAll('[data-x]');//元素hash
     for(let i = 0;i<specialTags.length; i++){
         specialTags[i].classList.add('offset');
     }
     findClosestAndRemoveOffset();
     window.addEventListener('scroll',function(){findClosestAndRemoveOffset();})
     
     function findClosestAndRemoveOffset(){
         /*5.0 某元素出于屏幕中心，menu自动高亮*/
         let specialTags = document.querySelectorAll('[data-x]');//元素hash
         //console.dir(specialTags[0]) 每个标签的offsetTop是固定的
         let minIndix = 0;
         for(let i = 1;i<specialTags.length;i++){
             if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndix].offsetTop - window.scrollY))
             minIndix = i; //找最小距离差 minIndex就是离窗口顶部最近的元素
             //console.log(minIndix);
         }
         specialTags[minIndix].classList.remove('offset');

         let id = specialTags[minIndix].id;
         let a = document.querySelector('a[href="#' + id + '"]'); //通过id找标签
         let li = a.parentNode //a的父元素
         let brothersAndMe = li.parentNode.children //是hash li的兄弟姐妹
         for(let i=0;i<brothersAndMe.length;i++){   //遍历每一个兄弟姐妹，移除highLight属性
             brothersAndMe[i].classList.remove('highLight');
         }
         li.classList.add('highLight');
     }
}.call()
       