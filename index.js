const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const path = require('path')

app.use(express.static(path.resolve('./public')))

app.get('/', (req, res) => {
    res.render('index.html')
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
