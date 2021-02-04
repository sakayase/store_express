const express = require('express'), router = express();

let itemStore = [
    {
        id: 1,
        item: 'item1',
        brand: 'brand1',
        quantity: 301,
        price: 5,
    },
    {
        id: 2,
        item: 'item2',
        brand: 'brand3',
        quantity: 4,
        price: 150,
    },
    {
        id: 3,
        item: 'item3',
        brand: 'brand1',
        quantity: 159,
        price: 15,
    },
    {
        id: 4,
        item: 'item4',
        brand: 'brand2',
        quantity: 115,
        price: 10,
    },
    {
        id:5,
        name: 'item5',
        brand: 'brand1',
        quantity: 35,
        price: 500,
    },
];

router.get('/items', function(req, res) {
    res.json(itemStore);
});

router.get('/item/:id', function(req, res){
    res.json(itemStore[req.params.id]);
})

router.delete('/item/')
module.exports = router;