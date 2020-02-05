const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const router = express.Router();

router.post('/', (req, res) => {
    if(req.body.password && req.body.message){
        res.send({decoded: Vigenere.Decipher(req.body.password.replace(/\s+/g, '')).crypt(req.body.message)});
    } else {
        res.send('No password or message');
    }
});

module.exports = router;
