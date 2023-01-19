
fetch('https://api.chatbot.com/v2/stories/63c7ed581c9d010007d555b8', {
  headers: {
    'authorization': 'Bearer '
  }
  
})
  .then(response => console.info(response))
  .then(data => console.log(data))
  .catch(error => console.error(error))