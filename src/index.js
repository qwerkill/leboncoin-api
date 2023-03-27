const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8000;
const cors = require('cors');

const connectMongo = require('./config/database.config');
connectMongo();



const PostsRouter = require('./routers/post.router');

app.use(express.json());
app.use(cors());
app.use('/api', PostsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


