const express = require('express');
const app = express();
const PORT = 5001;
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello');
// })

app.use(express.static('client/dist'));

app.listen(PORT, console.log(`LISTENING ON PORT ${PORT}`));