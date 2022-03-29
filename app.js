const express = require('express');
const app = express();
app.use(express.json());


//hard coded data for login & ChairCard
const login = [
    { name: 'Harvey', id: 1 },
    { name: 'Jessie Pinkman', id: 2 },
    { name: 'John Snow', id: 3 }
]

const ChairCard = [
    { name: 'Chair', id: 1, description: "This chair is the perfect choice for you. This chair is made up of durable and sleek material that it will not take much space. It is stackable for easy storage", price: '$1.91 per hour' }
]

app.get('/', (req, res) => {
    res.send('API endpoints are Login and chaircard as I have created in mockAPI task!!');
});

//get for login
app.get('/api/login', (req, res) => {
    res.send(login);

});


//getting login by id
app.get('/api/login/:id', (req, res) => {
    const loginID = login.find(d => d.id === parseInt(req.params.id));
    if (!loginID)
        return res.status(404).send('The ID you have entered does not exist');
    res.send(loginID);
});



// get for chair card
app.get('/api/ChairCard', (req, res) => {
    res.send(ChairCard);
})

//getting by id
app.get('/api/ChairCard/:id', (req, res) => {
    const CardID = ChairCard.find(d2 => d2.id === parseInt(req.params.id));
    if (!CardID)
        return res.status(404).send('The ID you have entered does not exist');
    res.send(CardID);
});


app.listen(8080, () => console.log('Listening on port 8080..'));