const http = require('http')
const querystring =  require('querystring')


// get请求
// const server = http.createServer((req, res) => {
//   console.log('method: ', req.method)
//   const url = req.url
//   console.log('url: ', url)
//   req.query = querystring.parse(url.split('?')[1])
//   console.log('query: ', req.query)
//   res.end(
//     JSON.stringify(req.query)
//   )
// })

// post
// const server = http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     // 数据格式
//     console.log('content-type', req.headers['content-type'])
//     // 接收数据
//     let postData = ''
//     req.on('data', chunk => {
//       postData += chunk.toString()
//     })
//     req.on('end', () => {
//       console.log('postData', postData)
//       res.end('hello world !')
//     })
//   }
// })

const server = http.createServer((req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]
  const query = url.split('?')[1]

  // 设置返回格式为 JSON
  res.setHeader('Content-type', 'application/json')

  // 返回的数据
  const resData = {
    method,
    url,
    path,
    query
  }
  
  if (method === 'GET') {
    res.end(
      JSON.stringify(resData)
    )
  }

  if (method === 'POST') {
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      resData.postData = postData
      // 返回
      res.end(
        JSON.stringify(resData)
      )
    })
  }
})

server.listen(8000)
console.log('listen at 8000!')