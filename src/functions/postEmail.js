const fetch = require('node-fetch');

const postEmail = (score) => {
  console.log('score: ')
  console.log(score)

  return fetch(process.env.NODE_SERVER, { 
    method: 'POST', 
    body: JSON.stringify(score),
    headers: {
      "Content-type": "application/json"
    }  
  })
  .then(res => res.json(), (err) => {
    console.log(err)
  }) // expecting a json response   
  
}

export {
  postEmail,
}