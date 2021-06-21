const express = require('express');
const app = express();
const cors = require('cors');
const categoryRouter = require('./routers/categoryRouter');
const basketRouter = require('./routers/basketRouter');

const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/basket', basketRouter);
app.use('/category', categoryRouter);

app.listen(port, () => {
  console.log(`Server: OK, port: ${port}`);
});