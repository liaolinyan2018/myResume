/*2.0 会动的topNavBar.18-12-2*/
(function () {
    let view = document.querySelector('#topNavBar')
    let controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            let view = this.view
            window.addEventListener('scroll', (x) => { window.scrollY > 0 ? this.active() : this.deactive() })
        },
        active: function () {
            this.view.classList.add('fixed')
        },
        deactive: function () {
            this.view.classList.remove('fixed')
        }
    }
    controller.init(view)
})()

