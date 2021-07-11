const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', async (req, res) => {
    console.log('Request > GET /posts...');
    res.send(posts);
});

app.post('/posts', async (req, res) => {
    console.log('Request > POST /posts...');
    const { title } = req.body
    const id = randomBytes(4).toString('hex');

    posts[id] = {
        id, title
    };

    await axios.post('http://localhost:4005/events', {
        type: 'PostCreated',
        data: { id, title }
    });

    res.status(201).send(posts[id]);
});

app.post('/events', async (req, res) => {
    console.log('Received Event >', req.body);

    res.send({});
});

app.listen(4000, () => {
    console.log('Listening on port 4000...');
})