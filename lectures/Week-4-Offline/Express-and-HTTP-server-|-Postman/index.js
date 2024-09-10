const express = require("express");
const app = express();


function calculateSquare(num) {
    return num * num;
}

app.get("/", (req, res, next) => {
    const num = req.query.num;
    const square = calculateSquare(num);
    return res.send({ square });
})



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
})