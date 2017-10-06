const client = require('../../server/server')

const authUrl = 'https://api.instagram.com/oauth/authorize/?client_id=7c000611357a488ab02d7afc86b47909&redirect_uri=http://localhost:3000/auth/instagram/callback&response_type=token'
const feedUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='


module.exports = {
  searchTag: (req, res) => {
    axios.get('https://api.instagram.com/v1/tags/' + tag + '/media/recent?access_token=' + token)
      .then((data) => {
        client.set(req.body.tag, data);
      })
      .catch(err => {
        res.status(500).send(err);
      })
  },
  getFeed: (req, res) => {
    client.get(req.body.username, (err, result) => {
      if (result) {
        res.send({"cached feed": result, "source": "redis cache"})
      } else {
        axios.get(feedUrl + req.body.token) 
          .then((data) => {
            client.set(req.body.username, data);
            res.send({"feed": data, "source": "Instagram API"});
          })
          .catch(err => {
            res.status(500).send(err);
          })
      }
    })
  }
}


