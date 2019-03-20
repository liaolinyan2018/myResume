!function() {
  var model = {
    init: function(){
      //初始化AV对象
      var APP_ID = 'e4cOL5tKtv7eDlGdpEtYTlxY-gzGzoHsz'
      var APP_KEY = 'Srt6LLMtTSBk7VSfSrq6cmUA'
      AV.init({ appId: APP_ID, appKey: APP_KEY });
    },
    // 获取数据
    fetch: function(){
      var query = new AV.Query('Message');
      return query.find()  //返回promise对象
    },
    // 创建和保存数据
    save: function(name,content){
      var Message = AV.Object.extend('Message');
      var message = new Message();
      return message.save({ //返回promise对象
        'name': name,
        'content': content
      })
    }
  }

  var view = document.querySelector('section.message')

  var controller = {
    view: null,
    model: null,
    init: function(view,model){
      this.view = view
      this.model = model
      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('form')
      this.model.init()
      this.loadMessages()
      this.bindEvents()
    },
    loadMessages: function(){//展示历史留言
      this.model.fetch().then(
        (messages) => {
          let array = messages.map((item) => item.attributes)
          array.forEach((item) => {
            let li = document.createElement('li')
            let h2 = document.createElement('h2')
            let p = document.createElement('p')
            h2.innerText = item.name
            li.appendChild(h2)
            p.innerText = item.content
            li.appendChild(p)
            this.messageList.appendChild(li)
          })
        })
    },
    bindEvents: function(){
      //实时保存留言到数据库并展示留言 
      this.form.addEventListener('submit',(e) => {
        e.preventDefault()
        this.saveMessage()
     })
    },
    saveMessage: function(){
      let myForm = this.form
      let content= myForm.querySelector('input[name=content]').value
      let name = myForm.querySelector('input[name=name]').value
      this.model.save(name,content).then(function(object) {
        let messageList = document.querySelector('#messageList')
        let li = document.createElement('li')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')
        h2.innerText = object.attributes.name
        li.appendChild(h2)
        p.innerText = object.attributes.content
        li.appendChild(p)
        messageList.appendChild(li)
        myForm.querySelector('input[name=content]').value = ''
      })
    }
  }
  controller.init(view,model)
}.call()
