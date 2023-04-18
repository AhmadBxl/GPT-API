document.getElementById("submit-btn").addEventListener("click", function() {
    
    sendToChatGPT() 
})

// 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

function sendToChatGPT() { 
   let value = document.getElementById('word-input').value; 
   let body = {
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": value}],
    "temperature": 1
   };
   let headers = {
    Authorization : "Bearer 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"
   };
   axios.post("https://api.openai.com/v1/chat/completions",body,{headers : headers}).then((response) => {
    let reply = response.data.choices[0].message.content;
    document.getElementById('reply-content').textContent = reply;
    })
}
