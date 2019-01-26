//初始化AV对象
var APP_ID = 'e4cOL5tKtv7eDlGdpEtYTlxY-gzGzoHsz';
var APP_KEY = 'Srt6LLMtTSBk7VSfSrq6cmUA';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('Message');
query.find()
  .then(
    function(messages) {
      console.log(messages)
      console.log(messages[0].attributes)
      console.log(messages[1].attributes)
      let array = messages.map((item) => item.attributes)
      array.forEach((item) => {
        let li = document.createElement('li')
        li.innerText = item.content
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
      })
    },
    function(error) {
      //异常处理
    })
    .then(
      () =>{},() => {console.log(error)}
    );



let myForm = document.querySelector('#postMessageForm')
myForm.addEventListener('submit',function(e) {
  e.preventDefault()
  let content= myForm.querySelector('input[name=content]').value
  var Message = AV.Object.extend('Message');
  var message = new Message();
  message.save({
    'content': content
  }).then(function(object) {
    alert('留言成功');
    console.log(object)
  })
})