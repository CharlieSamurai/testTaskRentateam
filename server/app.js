const express = require('express');
const app = express();
const cors = require('cors');

const port = 3001;

const pseudoDB = [
    {
      category: 'Бургеры',
      itemList: [
        {
          id: `${Date.now() + Math.random()}`,
          price: Math.floor(Math.random() * 100),
          name: 'Sidorova',
          delivery: Math.random() > 0.5 ? true : false,
          img: 'http://localhost:3001/images/burgers/burger1.png'
        },
        {
          id: `${Date.now() + Math.random()}`,
          price: Math.floor(Math.random() * 100),
          name: 'Rogova',
          delivery: Math.random() > 0.5 ? true : false,
          img: 'http://localhost:3001/images/burgers/burger1.png'
        }, {
          id: `${Date.now() + Math.random()}`,
          price: Math.floor(Math.random() * 100),
          name: 'Artamonova',
          delivery: Math.random() > 0.5 ? true : false,
          img: 'http://localhost:3001/images/burgers/burger1.png'
        }, {
          id: `${Date.now() + Math.random()}`,
          price: Math.floor(Math.random() * 100),
          name: 'Dolgorukova',
          delivery: Math.random() > 0.5 ? true : false,
          img: 'http://localhost:3001/images/burgers/burger1.png'
        },
        {
          id: `${Date.now() + Math.random()}`,
          price: Math.floor(Math.random() * 100),
          name: 'Dasha',
          delivery: Math.random() > 0.5 ? true : false,
          img: 'http://localhost:3001/images/burgers/burger1.png'
        },
        {
          id: `${Date.now() + Math.random()}`,
          price: Math.floor(Math.random() * 100),
          name: 'Masha',
          delivery: Math.random() > 0.5 ? true : false,
          img: 'http://localhost:3001/images/burgers/burger1.png'
        }, {
          id: `${Date.now() + Math.random()}`,
          price: Math.floor(Math.random() * 100),
          name: 'Katya',
          delivery: Math.random() > 0.5 ? true : false,
          img: 'http://localhost:3001/images/burgers/burger1.png'
        }, {
          id: `${Date.now() + Math.random()}`,
          price: Math.floor(Math.random() * 100),
          name: 'Oleg',
          delivery: Math.random() > 0.5 ? true : false,
          img: 'http://localhost:3001/images/burgers/burger1.png'
        },
      ]
    },
    {
      category: 'Твистеры',
      itemList: [
        {
          id: `${Date.now() + Math.random()}`,
          price: Math.floor(Math.random() * 100),
          name: 'Sidorov',
          delivery: Math.random() > 0.5 ? true : false,
          img: 'http://localhost:3001/images/twisters/twister1.png'
        },
        {
          id: `${Date.now() + Math.random()}`,
          price: Math.floor(Math.random() * 100),
          name: 'Rogov',
          delivery: Math.random() > 0.5 ? true : false,
          img: 'http://localhost:3001/images/twisters/twister1.png'
        }, {
          id: `${Date.now() + Math.random()}`,
          price: Math.floor(Math.random() * 100),
          name: 'Artamonov',
          delivery: Math.random() > 0.5 ? true : false,
          img: 'http://localhost:3001/images/twisters/twister1.png'
        }, {
          id: `${Date.now() + Math.random()}`,
          price: Math.floor(Math.random() * 100),
          name: 'Dolgorukov',
          delivery: Math.random() > 0.5 ? true : false,
          img: 'http://localhost:3001/images/twisters/twister1.png'
        },
        {
          id: `${Date.now() + Math.random()}`,
          price: Math.floor(Math.random() * 100),
          name: 'Petya',
          delivery: Math.random() > 0.5 ? true : false,
          img: 'http://localhost:3001/images/twisters/twister1.png'
        },
        {
          id: `${Date.now() + Math.random()}`,
          price: Math.floor(Math.random() * 100),
          name: 'Nikolai',
          delivery: Math.random() > 0.5 ? true : false,
          img: 'http://localhost:3001/images/twisters/twister1.png'
        }, {
          id: `${Date.now() + Math.random()}`,
          price: Math.floor(Math.random() * 100),
          name: 'Kostya',
          delivery: Math.random() > 0.5 ? true : false,
          img: 'http://localhost:3001/images/twisters/twister1.png'
        }, {
          id: `${Date.now() + Math.random()}`,
          price: Math.floor(Math.random() * 100),
          name: 'Lena',
          delivery: Math.random() > 0.5 ? true : false,
          img: 'http://localhost:3001/images/twisters/twister1.png'
        },
      ]
    },
    { category: 'Курица' },
    { category: 'Баскеты' },
    { category: 'Снэки' },
    { category: 'Соусы' },
    { category: 'Напитки' },
    { category: 'Кофе и чай' },
    { category: 'Десерты' },
    { category: 'Хиты по 50' }
  ];

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.route('/getallcategories')
  .get((req, res) => {
    const allCategories = pseudoDB.map(el => el.category);
    res.json(allCategories);
  });

app.route('/getcurrentcategory/:category')
  .get((req, res) => {
    res.json(pseudoDB[(pseudoDB.findIndex(el => el.category === req.params.category))]);
  });

app.route('/sendbasket')
.post((req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server: OK, port: ${port}`);
});