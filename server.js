const express = require('express');
const cors = require('cors');
const fs = require('fs')
const reservationRoutes = require('./routes/reservationRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', reservationRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});