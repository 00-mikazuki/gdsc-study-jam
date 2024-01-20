const express = require('express');
const cors = require('cors');
const Routes = require('./routes/routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(Routes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
