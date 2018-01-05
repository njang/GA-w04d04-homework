const express = require('express'); //from documentation: express is function
const app = express();//app is an object

app.get('/', (request, response) => {
  response.send('Let\'s start!');
});

// GET ALL RESTAURANTS "/restaurants"
// GET RESTAURANTS BY ID "/restaurants/:id"
// GET ALL CUISINES "/cuisines"
// GET CUISINE: "/cuisines/:id"
// GET ALL COST RANGES: "/costs"
// GET COST RANGE: "/costs:id"
// GET ALL RESTAURANTS BY CUISINE "/cuisines/:id/restaurants"
// GET RESTAURANTS BY CUISINE "/cuisines/:id/restaurants/:id"
// GET ALL RESTAURANTS BY CUISINE BY COST RANGE "/cuisines/:id/costs/:id/resturants"

const rest = [
	// {
 //    url: "/restaurants",
 //    name: "Get all resturants"
 //  },
  {
    url: "/restaurants/:id",
    name: "Get a resturant"
  },
	{
    url: "/cuisines",
    name: "Get all cuisines"
  },
	{
    url: "/cuisines/:id",
    name: "Get a cuisine"
  },
	{
    url: "/costs",
    name: "Get all cost ranges"
  },
	{
    url: "/costs/:id",
    name: "Get a cost range"
  }
]

// for (let i = 0; i < rest.length; i++) {
//   app.get(rest[i].url, (request, response) => {response.send(rest[i].name)});
// }

const restaurants = [
  {id: 1, name: "Vaquero Taquero", cuisine: "Mexican", url: "http://www.vaquerotaquero.com/"},
  {id: 2, name: "Manna Resaurant", cuisine: "Korean", url: "https://ibigmedia1.wixsite.com/mannaaustin/menu"},
  {id: 3, name: "Franklin Street BBQ", cuisine: "BBQ", url: "https://franklinbbq.com/"},
  {id: 4, name: "Chilantro", cuisine: "Fusion", url: "http://www.chilantrobbq.com/"}
];

app.get('/restaurants', (request, response) => {
  let restaurantsJSON = JSON.stringify(restaurants)
  response.send(restaurantsJSON);
});

for (let i = 0; i < restaurants.length; i++) {
  app.get('/restaurants/' + (i + 1), (request, response) => {response.send('<a href="' + restaurants[i].url + '">' + restaurants[i].name + '</a>')});
}

app.listen(3000, () => {
    console.log("I am listening");
});

