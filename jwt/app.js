import express from 'express';
const app = express();
import cors from 'cors';
const port = process.env.PORT || 5001;
import AuthController from './auth/AuthContorl';

app.use(cors());
//html
app.set('views','./src/views');
//view engine
app.set('view engine','ejs');

app.get('/',(req,res) => {
    res.render('home')
})

app.use('/api/auth', AuthController);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})