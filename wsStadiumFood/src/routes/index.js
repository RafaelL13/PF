const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    const data = {
        "Title": "Hello World",
        "Name": "Rafael Lopez"
    }
    res.json(data);
});

module.exports = router;