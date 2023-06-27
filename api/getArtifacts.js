const express = require("express")
const router = express.Router();
const db = require("../db/index");

router.get("/", (req, res) => {
    const command = "SELECT * FROM artifacts";
    db.query(command, (err, result) => {
        try{
            res.send(result.rows);
        }
        catch(error){
            console.error("ERROR: ", error);
        }
    })
});

module.exports = router;