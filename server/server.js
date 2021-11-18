// Import npm packages
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import path from 'path'
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 8080; // Step 1

import routes from './routes/api.js'

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

// Step 2
mongoose.connect('mongodb+srv://juarezcout:TzUg6wS27v8WMMeE@cluster0.gzc7y.mongodb.net/lista_reuniao?retryWrites=true&w=majority'|| 'mongodb://localhost/lista_reuniao', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}


// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);




app.listen(PORT, console.log(`Server is starting at ${PORT}`));