/*1.0 loading animation.18-12-2*/

(function () {

   // console.log(preloading) 报错
   //  let view = document.querySelector('#preloading')
   // console.dir(view) // null 因为一开始脱离文档流？？？
   setTimeout(() => {
      // console.log(preloading)  //可以取到div#preloading元素
      preloading.classList.remove('active');
   }, 2000);
})()
