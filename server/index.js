/*
 * @Author: KokoTa
 * @Date: 2020-05-07 19:37:56
 * @LastEditTime: 2020-05-08 17:24:49
 * @Description: Mock 服务器，代理配置写在 pacakge.json 中
 */

const express = require('express')
const app = express()

app.get('/cities', (req, res) => {
  res.json({
    cityList: [
      {
        title: '北京市',
        cities: [{ name: '北京' }]
      },
      {
        title: '福建省',
        cities: [
          { name: '福州' },
          { name: '泉州' },
          { name: '厦门' },
          { name: '漳州' }
        ]
      },
      {
        title: '福建省',
        cities: [
          { name: '福州' },
          { name: '泉州' },
          { name: '厦门' },
          { name: '漳州' }
        ]
      },
      {
        title: '福建省',
        cities: [
          { name: '福州' },
          { name: '泉州' },
          { name: '厦门' },
          { name: '漳州' }
        ]
      },
      {
        title: '福建省',
        cities: [
          { name: '福州' },
          { name: '泉州' },
          { name: '厦门' },
          { name: '漳州' }
        ]
      }
    ],
    hotList: [
      { name: '泉州' }
    ]
  })
})

app.listen(5000, () => console.log('server ok'))
