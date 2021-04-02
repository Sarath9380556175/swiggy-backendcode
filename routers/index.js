var express=require('express');

const router=express.Router();
const locationcontroller=require('../controllers/location');
const restaurantcontroller=require('../controllers/restaurantbylocation');
const itemcontrollers=require('../controllers/mealtype');
const usersignupcontroller=require('../controllers/usersignupform');
const signupcontroller=require('../controllers/signup');
const paymentcontroller=require('../controllers/payments')
const resitemcontrollers=require('../controllers/item')

const filtercontroller=require('../controllers/filter')
router.get('/locations', locationcontroller.getLocations);


router.get('/restaurantsbylocationid/:locationId', restaurantcontroller.getRestaurantsbyLocation);
  
router.post('/filter', restaurantcontroller.filterrestaurants);


router.get('/getRestaurantById/:restaurantid', restaurantcontroller.getRestaurantsbyId);

router.post('/signup', signupcontroller.usersignupform);

router.post('/login', signupcontroller.userlogin );

router.get('/mealtypes', itemcontrollers.getItemsfromrestaurant);


router.post('/usersignup',usersignupcontroller.createanaccount);

router.post('/userlogin' ,usersignupcontroller.userLogin);


router.post('/payment', paymentcontroller.payments);


router.post('/callback', paymentcontroller.callback);

router.get('/getrestauantbyitem/:itemid', resitemcontrollers.getitems )

router.post ('/homefilter', filtercontroller.getRestaurantsbyLocationId)
module.exports=router;