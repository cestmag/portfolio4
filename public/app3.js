//document.oncontextmenu = function () {return false;}
// app3.js
//document.oncontextmenu = function () { return false; }
//document.oncontextmenu = function () { return false; }
/*
const artworkContainer = document.getElementById('artworkContainer');
const videoPopup = document.getElementById('videoPopup');
const closeButton = document.querySelector('.close-button');
const popupVideo = document.getElementById('popupVideo');

fetch('/videos.json')
  .then(response => response.json())
  .then(data => {
    artworkData = data;
    renderArtworkData();
  })
  .catch(error => {
    console.error('Error fetching artwork data:', error);
  });

function renderArtworkData() {
  artworkData.forEach((artwork, index) => {
    const artworkElement = document.createElement('div');
    artworkElement.classList.add('artwork');

    const videoElement = document.createElement('div');
    videoElement.classList.add('artwork-video');

    const thumbnail = document.createElement('img');
    thumbnail.classList.add('artwork-video-thumbnail');
    thumbnail.src = `./thumbnails/${artwork.thumbnailUrl}`;

    const infoElement = document.createElement('div');
    infoElement.classList.add('artwork-info');

    const titleElement = document.createElement('div');
    titleElement.textContent = artwork.title;

    const dateElement = document.createElement('div');
    dateElement.textContent = artwork.date;

    const descriptionElement = document.createElement('div');
    descriptionElement.textContent = artwork.description;

    infoElement.appendChild(titleElement);
    infoElement.appendChild(dateElement);
    infoElement.appendChild(descriptionElement);

    if (index % 2 === 0) {
      videoElement.appendChild(thumbnail);
      artworkElement.appendChild(videoElement);
      artworkElement.appendChild(infoElement);
    } else {
      artworkElement.appendChild(infoElement);
      videoElement.appendChild(thumbnail);
      artworkElement.appendChild(videoElement);
    }

    artworkContainer.appendChild(artworkElement);

    
    videoElement.addEventListener('click', () => {
      console.log('Clicked video element:', artwork.videoUrl);
      const player = new Plyr('#popupVideo', {
        sources: [
          {
            src: artwork.videoUrl,
            type: 'video/mp4',
          },
        ],

        fullscreen: {
          enabled: true,
          fallback: true,
          iosNative: true
        },
        controls: [
          'play-large',
          'play',
          'progress',
          'current-time',
          'mute',
          'volume',
          'fullscreen'
        ]
      });
      videoPopup.style.display = 'block';
    });

  });

  closeButton.addEventListener('click', () => {
    console.log('Close button clicked!');
    videoPopup.style.display = 'none';
    
    //popupVideo.src = '';
  });

  window.addEventListener('click', (event) => {
    console.log('Clicked on videoPopup:', event.target);
    if (event.target == videoPopup) {
      videoPopup.style.display = 'none';
      
      //popupVideo.src = '';
    }
  });
}*/

//旧版2

const artworkContainer = document.getElementById('artworkContainer');
const videoPopup = document.getElementById('videoPopup');
const closeButton = document.querySelector('.close-button');
const popupVideo = document.getElementById('popupVideo');

fetch('/videos.json')
  .then(response => response.json())
  .then(data => {
    artworkData = data;
    renderArtworkData();
  })
  .catch(error => {
    console.error('Error fetching artwork data:', error);
  });

function renderArtworkData() {
  artworkData.forEach((artwork, index) => {
    const artworkElement = document.createElement('div');
    artworkElement.classList.add('artwork');

    const videoElement = document.createElement('div');
    videoElement.classList.add('artwork-video');

    const thumbnail = document.createElement('img');
    thumbnail.classList.add('artwork-video-thumbnail');
    thumbnail.src = `./thumbnails/${artwork.thumbnailUrl}`;

    const infoElement = document.createElement('div');
    infoElement.classList.add('artwork-info');

    const titleElement = document.createElement('div');
    titleElement.textContent = artwork.title;

    const dateElement = document.createElement('div');
    dateElement.textContent = artwork.date;

    const descriptionElement = document.createElement('div');
    descriptionElement.textContent = artwork.description;

    infoElement.appendChild(titleElement);
    infoElement.appendChild(dateElement);
    infoElement.appendChild(descriptionElement);

    if (index % 2 === 0) {
      videoElement.appendChild(thumbnail);
      artworkElement.appendChild(videoElement);
      artworkElement.appendChild(infoElement);
    } else {
      artworkElement.appendChild(infoElement);
      videoElement.appendChild(thumbnail);
      artworkElement.appendChild(videoElement);
    }

    artworkContainer.appendChild(artworkElement);

    videoElement.addEventListener('click', () => {
      //popupVideo.src = `${artwork.videoUrl}`;
      popupVideo.src = artwork.videoUrl
      //popupVideo.src = `/video/${artwork.videoUrl}`;
      videoPopup.style.display = 'block';
    });
  });

  closeButton.addEventListener('click', () => {
    videoPopup.style.display = 'none';
    popupVideo.src = '';
  });

  window.addEventListener('click', (event) => {
    if (event.target == videoPopup) {
      videoPopup.style.display = 'none';
      popupVideo.src = '';
    }
  });
}
/*
//旧版
const artworkContainer = document.getElementById('artworkContainer');
const videoPopup = document.getElementById('videoPopup');
const closeButton = document.querySelector('.close-button');
const popupVideo = document.getElementById('popupVideo');

fetch('/videos.json')
  .then(response => response.json())
  .then(data => {
    artworkData = data;
    renderArtworkData();
  })
  .catch(error => {
    console.error('Error fetching artwork data:', error);
  });

function renderArtworkData() {
  const artworkContainer = document.getElementById('artworkContainer');
  const videoPopup = document.getElementById('videoPopup');
  const closeButton = document.querySelector('.close-button');
  const popupVideo = document.getElementById('popupVideo');

  artworkData.forEach((artwork, index) => {
    // ... (existing code for creating the artwork elements)
    const artworkElement = document.createElement('div');
    artworkElement.classList.add('artwork');
  
    const videoElement = document.createElement('div');
    videoElement.classList.add('artwork-video');
    //videoElement.textContent = 'Video Player';

    const thumbnail = document.createElement('img'); // Change from div to img
    thumbnail.classList.add('artwork-video-thumbnail');

    
    thumbnail.src = `./thumbnails/${artwork.thumbnailUrl}`//artwork.thumbnailUrl //|| 'path/to/placeholder.jpg';
  
    const infoElement = document.createElement('div');
    infoElement.classList.add('artwork-info');
  
    const titleElement = document.createElement('div');
    titleElement.textContent = artwork.title;
  
    const dateElement = document.createElement('div');
    dateElement.textContent = artwork.date;
  
    const descriptionElement = document.createElement('div');
    descriptionElement.textContent = artwork.description;
  
    infoElement.appendChild(titleElement);
    infoElement.appendChild(dateElement);
    infoElement.appendChild(descriptionElement);
  
    if (index % 2 === 0) {
      videoElement.appendChild(thumbnail);
      artworkElement.appendChild(videoElement);
      artworkElement.appendChild(infoElement);

    } else {
      artworkElement.appendChild(infoElement);
      videoElement.appendChild(thumbnail);
      artworkElement.appendChild(videoElement);
    }
  
    artworkContainer.appendChild(artworkElement);

    videoElement.addEventListener('click', () => {
      popupVideo.src = `./videos/${artwork.videoUrl}`;
      videoPopup.style.display = 'block';
    });
  });

  closeButton.addEventListener('click', () => {
    videoPopup.style.display = 'none';
    popupVideo.src = ''; // Clear the video source
  });

  window.addEventListener('click', (event) => {
    if (event.target == videoPopup) {
      videoPopup.style.display = 'none';
      popupVideo.src = ''; // Clear the video source
    }
  });
}*/
 /* videoElement.addEventListener('click', () => {
    popupVideo.src = `./videos/${artwork.videoUrl}`;
    videoPopup.style.display = 'flex'; // Change to 'flex' to center the content
    popupVideo.onloadedmetadata = () => {
      // Get the video's natural width and height
      const videoWidth = popupVideo.videoWidth;
      const videoHeight = popupVideo.videoHeight;
  
      // Calculate the aspect ratio
      const aspectRatio = videoWidth / videoHeight;
  
      // Set the width and height of the video based on the aspect ratio
      if (aspectRatio > 1.78) { // 16:9 aspect ratio
        popupVideo.style.width = '90%';
        popupVideo.style.height = 'auto';
      } else {
        popupVideo.style.height = '90%';
        popupVideo.style.width = 'auto';
      }
    };
  });*/

  /*videoElement.addEventListener('click', () => {
    popupVideo.src = `./videos/${artwork.videoUrl}`;
    videoPopup.style.display = 'flex';
    videoPopup.style.alignItems = 'center';
    videoPopup.style.justifyContent = 'center';
  
    // Wait for the video to load before adjusting the size
    popupVideo.onloadedmetadata = () => {
      const videoWidth = popupVideo.videoWidth;
      const videoHeight = popupVideo.videoHeight;
      const aspectRatio = videoWidth / videoHeight;
  
      // Get the popup window dimensions
      const popupWidth = videoPopup.offsetWidth * 0.8; // 80% of the popup window width
      const popupHeight = videoPopup.offsetHeight * 0.8; // 80% of the popup window height
  
      let newWidth, newHeight;
      if (aspectRatio > popupWidth / popupHeight) {
        // Video is wider than the popup, so use the popup width and calculate the height
        newWidth = popupWidth;
        newHeight = popupWidth / aspectRatio;
      } else {
        // Video is taller than the popup, so use the popup height and calculate the width
        newHeight = popupHeight;
        newWidth = popupHeight * aspectRatio;
      }
  
      popupVideo.style.width = `${newWidth}px`;
      popupVideo.style.height = `${newHeight}px`;
    };
  });*/

  /*videoElement.addEventListener('click', () => {
    popupVideo.src = `./videos/${artwork.videoUrl}`;
    videoPopup.style.display = 'flex';
    videoPopup.style.alignItems = 'center';
    videoPopup.style.justifyContent = 'center';
  
    // Wait for the video to load before adjusting the size
    popupVideo.onloadeddata = () => {
      // Get the video's natural width and height
      const videoWidth = popupVideo.videoWidth;
      const videoHeight = popupVideo.videoHeight;
      const aspectRatio = videoWidth / videoHeight;
  
      // Get the popup window dimensions
      const popupWidth = videoPopup.offsetWidth * 0.8; // 80% of the popup window width
      const popupHeight = videoPopup.offsetHeight * 0.8; // 80% of the popup window height
  
      let newWidth, newHeight;
      if (aspectRatio > popupWidth / popupHeight) {
        // Video is wider than the popup, so use the popup width and calculate the height
        newWidth = popupWidth;
        newHeight = newWidth / aspectRatio;
      } else {
        // Video is taller than the popup, so use the popup height and calculate the width
        newHeight = popupHeight;
        newWidth = newHeight * aspectRatio;
      }
  
      popupVideo.style.width = `${newWidth}px`;
      popupVideo.style.height = `${newHeight}px`;
      popupVideo.style.maxWidth = '100%';
      popupVideo.style.maxHeight = '100%';
    };
  });*/

//}


  /*artworkData.forEach((artwork, index) => {
    const artworkElement = document.createElement('div');
    artworkElement.classList.add('artwork');
  
    const videoElement = document.createElement('div');
    videoElement.classList.add('artwork-video');
    videoElement.textContent = 'Video Player';
  
    const infoElement = document.createElement('div');
    infoElement.classList.add('artwork-info');
  
    const titleElement = document.createElement('div');
    titleElement.textContent = artwork.title;
  
    const dateElement = document.createElement('div');
    dateElement.textContent = artwork.date;
  
    const descriptionElement = document.createElement('div');
    descriptionElement.textContent = artwork.description;
  
    infoElement.appendChild(titleElement);
    infoElement.appendChild(dateElement);
    infoElement.appendChild(descriptionElement);
  
    if (index % 2 === 0) {
      artworkElement.appendChild(videoElement);
      artworkElement.appendChild(infoElement);
    } else {
      artworkElement.appendChild(infoElement);
      artworkElement.appendChild(videoElement);
    }
  
    artworkContainer.appendChild(artworkElement);

    

    videoElement.addEventListener('click', () => {
      popupVideo.src = `./videos/${artwork.videoUrl}`;
      videoPopup.style.display = 'block';
    });
  });
  
  closeButton.addEventListener('click', () => {
    videoPopup.style.display = 'none';
    popupVideo.src = ''; // Clear the video source
  });
  
  window.addEventListener('click', (event) => {
    if (event.target == videoPopup) {
      videoPopup.style.display = 'none';
      popupVideo.src = ''; // Clear the video source


    }
  });*/

 
