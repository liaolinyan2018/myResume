 /*2.0 会动的topNavBar.18-12-2*/
 !function() {
    var view = document.querySelector('#topNavBar')
    var controller = {
        view: null,
        init: function(view){
            this.view = view //controller.view = document.querySelector('#topNavBar')
            this.bindEvents()
            //this.bindEvents.call(this)
        },
        bindEvents: function(){
            var view = this.view
            window.addEventListener('scroll',(x) => { //箭头函数中没有this
                if(window.scrollY > 0){
                    this.active()
                }else{
                    this.deactive()
                }
            })
        },
        active: function(){
            this.view.classList.add('sticky')
        },
        deactive: function(){
            this.view.classList.remove('sticky')
        }
    }
   controller.init(view)
   //controller.init.call(controller,view)
 }.call()
        
        