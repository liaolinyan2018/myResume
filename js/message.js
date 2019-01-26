!function() {
//初始化AV对象
var APP_ID = 'e4cOL5tKtv7eDlGdpEtYTlxY-gzGzoHsz';
var APP_KEY = 'Srt6LLMtTSBk7VSfSrq6cmUA';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

//展示历史留言
var query = new AV.Query('Message');
query.find()
  .then(
    function(messages) {
      let array = messages.map((item) => item.attributes)
      array.forEach((item) => {
        let li = document.createElement('li')
        li.innerText = `${item.name}:${item.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
      })
    })

//实时保存留言到数据库并展示留言
let myForm = document.querySelector('#postMessageForm')
myForm.addEventListener('submit',function(e) {
  e.preventDefault()
  let content= myForm.querySelector('input[name=content]').value
  let name = myForm.querySelector('input[name=name]').value
  var Message = AV.Object.extend('Message');
  var message = new Message();
  message.save({
    'name': name,
    'content': content
  }).then(function(object) {
    let li = document.createElement('li')
    li.innerText = `${object.attributes.name}:${object.attributes.content}`
    let messageList = document.querySelector('#messageList')
    messageList.appendChild(li)
    myForm.querySelector('input[name=content]').value = ''
  })
})
}.call()
