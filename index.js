const express = require ('express');
const app = express();

app.use(express.json());
const friends =[
    {id: 1, name: 'mei', closeness: 'very close', year:'1 year'},
    {id: 2, name: 'zizka', closeness: 'very close', year:'2 years'},
    {id: 3, name: 'noa',closeness: 'very close', year:'3 years'},
    {id: 4, name: 'cece',closeness: 'very close', year:'4 years'},
    {id: 5, name: 'dedie',closeness: 'very close', year:'5 years'},
    {id: 6, name: 'moshii',closeness: 'very close', year:'6 years'},
    {id: 7, name: 'lolie',closeness: 'very close', year:'7 years'},
    {id: 8, name: 'rocky',closeness: 'very close', year:'8 years'},
    {id: 9, name: 'mochaska',closeness: 'very close', year:'9 years'},
    {id: 10, name: 'colokoy',closeness: 'very close', year:'10 years'},
    {id: 11, name: 'lolielie',closeness: 'very close', year:'11 years'},
    {id: 12, name: 'mokiee',closeness: 'very close', year:'12 years'},
    
]
//view
app.get('/api/friends', (req, res)=>{
    res.send(friends);
    
});
// specific ID
app.get('/api/friends/:id', (req, res)=> {
const friend = friends.find(c => c.id === parseInt(req.params.id));
if(!friend) res.status(404).send('the friend with the given ID is not found');
    res.send(friend);
});
//create
app.post('/api/friends', (req, res) =>{
if (!req.body.name || req.body.name.length <= 5){
        res.status(404).send('this names shoudld be at least five characters long')
        return;
}
const friend = {

    id: friends.length + 1,
    name: req.body.name,
    closeness: req.body.closeness,
    year: req.body.year
};
friends.push(friend);
res.send(friend);
});

//updates
app.put('/api/friends/:id', (req, res) =>{
const friend = friends.find(c => c.id === parseInt(req.params.id));
if(!friend) res.status(404).send('the friend with this ID is not found');

    friend.name = req.body.name;
    friend.closeness = req.body.closeness;
    friend.year = req.body.year;
    res.send(friend);
});
//delete
app.delete('/api/friends/:id', (req, res) => {
    const friend = friends.find(c => c.id === parseInt(req.params.id));
    if(!friend) res.status(404).send('the friend with this ID could not be');

    const index = friends.indexOf(friend);

    friends.splice(index, 1);
    res.send(friend);
});
const port =process.env.PORT || 3000;
app.listen(3000,()=> console.log('listen to ${port}'));