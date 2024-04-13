const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const server= require('http').Server(app)
// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index3.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'contact.html'));
});

app.get('/work', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index3.html'));
});

// Video proxy route
/*app.get('/video/:videoFile', (req, res) => {//'/video/:videoFile'
  const videoFile = req.params.videoFile;
  const filePath = path.join(__dirname, '../public/videos', videoFile);

  // Check if the video file exists
  if (fs.existsSync(filePath)) {
    // Perform any necessary security checks or validations
    // (e.g., check if the requested video is allowed, user has permission, etc.)
    console.log("maniac");
    // Set the appropriate headers to prevent direct access
    res.setHeader('Content-Type', 'video/mp4');
    res.setHeader('Content-Disposition', `inline; filename="${path.basename(videoFile)}"`);
    res.setHeader('Content-Length', fs.statSync(filePath).size);
    res.setHeader('Accept-Ranges', 'bytes');*/
    
    /*res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');*/
    // Read and output the video file
   /* const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  } else {
    // If the video file doesn't exist, send a 404 response
    res.status(404).send('Video not found');
  }
});*/

// Start server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*
//旧版a
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();


app.use(express.static(path.join(__dirname, '../public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index3.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'contact.html'));
  });
  

app.get('/work', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index3.html'));
});

// Video proxy route
app.get('/video/:videoFile', (req, res) => {
    const videoFile = req.params.videoFile;
    const filePath = path.join(__dirname, '../public/videos', videoFile);
  
    // Check if the video file exists
    if (fs.existsSync(filePath)) {
      // Perform any necessary security checks or validations
      // (e.g., check if the requested video is allowed, user has permission, etc.)
  
      // Set the appropriate headers to prevent direct access
      res.setHeader('Content-Type', 'video/mp4');
      res.setHeader('Content-Disposition', `inline; filename="${path.basename(videoFile)}"`);
      res.setHeader('Content-Length', fs.statSync(filePath).size);
      res.setHeader('Accept-Ranges', 'bytes');
  
      // Read and output the video file
      const stream = fs.createReadStream(filePath);
      stream.pipe(res);
    } else {
      // If the video file doesn't exist, send a 404 response
      res.status(404).send('Video not found');
    }
  });

// Start server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});*/

//旧版
/*const express = require('express');
const path = require('path');

const app = express();

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index3.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'about.html'));
});

app.get('/work', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index3.html'));
});

// Start server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});*/
