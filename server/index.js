/*
 * @Author: KokoTa
 * @Date: 2020-05-07 19:37:56
 * @LastEditTime: 2020-05-09 11:18:14
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
        title: 'A',
        cities: [
          { name: 'A州' },
          { name: 'AA州' },
          { name: 'AAA门' },
          { name: 'AAAA州' }
        ]
      },
      {
        title: 'B',
        cities: [
          { name: 'B州' },
          { name: 'BB州' },
          { name: 'BBB门' },
          { name: 'BBBB州' }
        ]
      },
      {
        title: 'C',
        cities: [
          { name: 'C州' },
          { name: 'CC州' },
          { name: 'CCC门' },
          { name: 'CCCC州' }
        ]
      },
      {
        title: 'D',
        cities: [
          { name: 'D州' },
          { name: 'DD州' },
          { name: 'DDD门' },
          { name: 'DDDD州' }
        ]
      },
      {
        title: 'E',
        cities: [
          { name: 'E州' },
          { name: 'EE州' },
          { name: 'EEE门' },
          { name: 'EEEE州' }
        ]
      },
      {
        title: 'F',
        cities: [
          { name: 'F州' },
          { name: 'FF州' },
          { name: 'FFF门' },
          { name: 'FFFF州' }
        ]
      },
      {
        title: 'G',
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
