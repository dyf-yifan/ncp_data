// 模拟数据
const express = require('express')
const app = express()
// 疫情数据
var DXYAreaList = require('./src/json/DXYArea.json')
var DXYNewsList = require('./src/json/DXYNews.json')
var DXYOverallList = require('./src/json/DXYOverall.json')
var DXYRumorsList = require('./src/json/DXYRumors.json')
// API路径
var apiRoutes = express.Router()
app.use('/api', apiRoutes)
module.exports = {
  devServer: {
    host: 'localhost',
    port: 8000,
    https: false,
    open: true,
    hotOnly: true,
    before(app) {
      app.get('/api/DXYArea', (req, res) => {
        res.json({
          code: 1,
          msg: '成功',
          data: DXYAreaList,
        })
      })
      app.get('/api/DXYNews', (req, res) => {
        res.json({
          code: 1,
          msg: '成功',
          data: DXYNewsList,
        })
      })
      app.get('/api/DXYOverall', (req, res) => {
        res.json({
          code: 1,
          msg: '成功',
          data: DXYOverallList,
        })
      })
      app.get('/api/DXYRumors', (req, res) => {
        res.json({
          code: 1,
          msg: '成功',
          data: DXYRumorsList,
        })
      })
    },
  },
}
