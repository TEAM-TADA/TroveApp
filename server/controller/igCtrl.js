const client = require('../../server/server')
const axios = require('axios')

const authUrl = 'https://api.instagram.com/oauth/authorize/?client_id=7c000611357a488ab02d7afc86b47909&redirect_uri=http://localhost:3000/auth/instagram/callback&response_type=token'
const feedUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='


module.exports = {
  getFeed: (req, res) => {
    // client.get(req.params.userEmail, (err, result) => {
    //   if (result) {
    //     res.send({"cached feed": result, "source": "redis cache"})
    //   } else {
      console.log('server request');
      console.log('token', req.query.token)
        axios.get(feedUrl + req.query.token) 
          .then((response) => { 
            console.log('this is response', response);
            // client.set(req.params.userEmail, data);
            res.send({"feed": response.data, "source": "instagram api"});
          })
          .catch(err => {
            res.status(202).send(err);
          })
    //   }
    // })
  }, 
  refresh: (req, res) => {
    axios.get(feedUrl + req.body.token) 
    .then((data) => {
      client.setxx(req.params.userEmail, data);
      res.send({"feed": data, "source": "Instagram API"});
    })
    .catch(err => {
      res.status(500).send(err);
    })
  },
  searchTag: (req, res) => {
    axios.get('https://api.instagram.com/v1/tags/' + req.body.tag + '/media/recent?access_token=' + req.body.token)
      .then((data) => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send(err);
      })
  }
}


