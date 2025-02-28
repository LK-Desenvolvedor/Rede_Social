const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const participantRoutes = require('./routes/participantRoutes');
const postRoutes = require('./routes/postRoutes'); 
const commentRoutes = require('./routes/commentRoutes'); 
const uploadRoutes = require('./routes/uploadRoutes'); 
const errorHandler = require('./utils/errorHandler');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}));
app.use(express.json());


app.use('/uploads', express.static('uploads'));


app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Bem vindo' });
});


app.use('/auth', authRoutes);
app.use('/events', eventRoutes);
app.use('/participants', participantRoutes);
app.use('/posts', postRoutes); 
app.use('/comments', commentRoutes); 
app.use('/upload', uploadRoutes); 

app.use(errorHandler);

module.exports = app;
