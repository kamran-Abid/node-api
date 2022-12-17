import express from 'express';
const app = express();
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';


const PORT = process.env.PORT || 8000;
app.use(bodyParser.json())
app.use('/users', usersRoutes);

app.get('/', (req, res)=>{
res.send(`<h1>Server is working</h1>`);
})

app.listen(PORT, ()=> console.log('Listening http://localhost:'+ PORT))