import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import * as url from 'url';
// const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import usersRoutes from './routes/users.js';

// app.set('view-engine', 'ejs');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: true }));

// all routes starts with user

// app.get('/', (req, res)=>{
//     console.log("form is called");
//     res.sendFile(__dirname + "public\\inndex.html");
// })
// app.post('/form', (req, res)=>{
//     console.log(req.body);
//     console.log("post is call");
// })


const PORT = process.env.PORT || 8000;
app.use(bodyParser.json())
app.use('/users', usersRoutes);

// app.get('/', (req, res)=>{
// res.render(`index.ejs`);
// })

app.listen(PORT, ()=> console.log('Listening http://localhost:'+ PORT))