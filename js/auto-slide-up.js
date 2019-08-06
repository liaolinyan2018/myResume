(function () {
    let specialTags = document.querySelectorAll('[data-x]')
    //添加offset类
    // specialTags.forEach((i) => { i.classList.add('offset') })
    window.addEventListener('scroll', () => { findClosestAndRemoveOffset() })

    function findClosestAndRemoveOffset() {
        /*5.0 某元素出于屏幕中心，menu自动高亮*/
        let minIndix = 0
        specialTags.forEach((value, key) => {
            if (Math.abs(value.offsetTop - window.scrollY) < Math.abs(specialTags[minIndix].offsetTop - window.scrollY)) {
                minIndix = key;
            }
        })
        let id = specialTags[minIndix].id;
        let a = document.querySelector('a[href="#' + id + '"]'); //通过id找标签
        let li = a.parentNode //a的父元素
        let brothersAndMe = [].slice.call(li.parentNode.children)
        brothersAndMe.forEach((v) => { v.classList.remove('highLight') })
        li.classList.add('highLight');
    }
})()
