// jcy: 测试 devServer
const bodyParser = require('body-parser');
const axios = require('axios');

module.exports = function(app){
	
	app.use(bodyParser.urlencoded({extended: true}))
	const queryString = require('queryString')

	app.get('/api/getDiscList', function(req, res){
		const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
		axios.get(url, {
		  headers: {
		    referer: 'https://y.qq.com',
		    host: 'c.y.qq.com'
		  },
		  params: req.query
		}).then((response) => {
		  res.json(response.data)
		}).catch((e) => {
		  console.log(e)
		})
	})
}