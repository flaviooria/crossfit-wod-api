const express = require('express');
const router = express.Router();

router.route('/')
        .get('/', (req, res) => {
            res.send(`La url base es => ${req.baseUrl}`)
        })

// Exporto mi ruta
module.exports = router;