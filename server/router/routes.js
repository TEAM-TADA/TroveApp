const router = require('express').Router();
const itemCtrl = require('../controller/itemCtrl');
const userCtrl = require('../controller/userCtrl');
const paymentCtrl = require('../controller/paymentCtrl')
const rentTrxCtrl = require('../controller/rentTrxCtrl');
const igCtrl = require('../controller/igCtrl')

router.route('/')
  .get(itemCtrl.fetchAll)
  .post(itemCtrl.create);
  
router.route('/item/:id')
  .get(itemCtrl.getItem);

router.route('/user')
  .post(userCtrl.addUser);

router.route('/user/:userEmail')
  .get(userCtrl.getUser);

router.route('/user/owner/:rentee_id')
  .get(userCtrl.getUserById);

router.route('/item/payment')
  .get(paymentCtrl.getMsg)
  .post(paymentCtrl.postCharge)

router.route('/renttrx')
  .post(rentTrxCtrl.addTrx)

router.route('/renttrx/item/:item_id')
  .get(rentTrxCtrl.getDates)
  
router.route('/renttrx/renter/:renter_id')
  .get(rentTrxCtrl.getRenter)

router.route('/instagram/feed/:userEmail')
  .get(igCtrl.getFeed)

  router.route('/instagram/refresh/:userEmail')
  .get(igCtrl.refresh)

router.route('/instagram/search/')
  .get(igCtrl.searchTag)

module.exports = router;