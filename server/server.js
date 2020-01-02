const PORT = 3000;
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');;
const cookieParser = require('cookie-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
  
app.use(cookieParser());
app.use(express.json());

const dbRouter = require('./routers/dbRouter');
const consumerRouter = require('./routers/consumerRouter');
const producerRouter = require('./routers/producerRouter');
const multer = require('multer');
const storage = require('./storage');
const imageFilter = require('./imageFilter');
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../public/index.html'));
})
app.use('/db', dbRouter);
app.use('/consumer', consumerRouter);
app.use('/producer', producerRouter);

app.post('/upload-multiple-images', (req, res) => {
    // 10 is the limit I've defined for number of uploaded files at once
    // 'multiple_images' is the name of our file input field
    let upload = multer({ storage: storage, fileFilter: imageFilter }).array('multiple_images', 10);

    upload(req, res, function(err) {
        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.file) {
            return res.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }// The same as when uploading single images

        let result = "You have uploaded these images: <hr />";
        const files = req.files;
        let index, len;

        // Loop through all the uploaded images and display them on frontend
        for (index = 0, len = files.length; index < len; ++index) {
            result += `<img src="${files[index].path}" width="300" style="margin-right: 20px;">`;
        }
        result += '<hr/><a href="./">Upload more images</a>';
        res.sendStatus(200);
    });
  
});

app.listen(PORT, ()=> console.log(`listing on ${PORT}`))
module.exports = app;