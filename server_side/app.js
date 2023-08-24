const express = require('express');
const cors = require('cors');
const apiRoutes = require('./router/api');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', apiRoutes);
app.use("/",(req,res )=>{
    res.send("home page")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
