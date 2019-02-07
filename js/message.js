!function() {
  var view = document.querySelector('section.message')
  var model = {
    init: function(){
      //初始化AV对象
      var APP_ID = 'e4cOL5tKtv7eDlGdpEtYTlxY-gzGzoHsz'
      var APP_KEY = 'Srt6LLMtTSBk7VSfSrq6cmUA'
      AV.init({ appId: APP_ID, appKey: APP_KEY });
    },
    // 保存数据
    fetch: function(){
      var query = new AV.Query('Message');
      return query.find()  //返回promise对象
    },
    // 创建数据
    save: function(name,content){
      var Message = AV.Object.extend('Message');
      var message = new Message();
      return message.save({ //返回promise对象
        'name': name,
        'content': content
      })
    }
  }
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
    loadMessages: function(){
      //展示历史留言
      this.model.fetch().then(
        (messages) => {
          let array = messages.map((item) => item.attributes)
          array.forEach((item) => {
            let li = document.createElement('li')
            li.innerText = `${item.name}:${item.content}`
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
      let li = document.createElement('li')
      li.innerText = `${object.attributes.name}:${object.attributes.content}`
      let messageList = document.querySelector('#messageList')
      messageList.appendChild(li)
      myForm.querySelector('input[name=content]').value = ''
      })
    }
  }
  controller.init(view,model)
}.call()
