# Random User API

👋 Welcome to the Random User Api API by Nutella


**⚙ How to install the meme api?**

First use: 
```npm i --save```
<br>Second: ```node .```



**How to use the api?**

```js
const fetch = require('node-fetch')
    
fetch('your-site-here').then(res =>{
  if(res.status != 200) return console.log('The status code was not 200, there is probably a problem...')
  res.json().then(json =>{
    let person = json;
    // What ever you want do further! 
    })
})
```
