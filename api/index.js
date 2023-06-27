const express = require("express")
const router = express.Router();

router.use("/character", require("./getCharacter"));
router.use("/weapons", require("./getWeapons"));
router.use("/artifacts", require("./getArtifacts"));

//Handle 404
router.use('*', (req, res, next) => {
    const error = new Error("404 Not Found")
    error.status = 404
    next();
});

module.exports = router;
