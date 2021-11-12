const express = require('express');
const cors = require('cors')

const router = express.Router();

const ListaReuniao = require('../models/listaReuniao');

router.use(cors())
// Routes
router.get('/', (req, res) => {

    ListaReuniao.find({  })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

router.post('/save', (req, res) => {
    const data = req.body;

    const newListaReuniao = new ListaReuniao(data);

    newListaReuniao.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // ListaReuniao
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});


module.exports = router;