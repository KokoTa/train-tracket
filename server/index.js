/*
 * @Author: KokoTa
 * @Date: 2020-05-07 19:37:56
 * @LastEditTime: 2020-05-07 19:42:20
 * @Description: Mock 服务器，代理配置写在 pacakge.json 中
 */

const express = require('express')
const app = express()

app.get('/name', (req, res) => {
  res.json({
    name: 'KokoTa'
  })
})

app.listen(5000, () => console.log('server ok'))
