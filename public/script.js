document.oncontextmenu = function () {return false;}
fetch('photos.json')
  .then(response => response.json())
  .then(data => {
    const artworkContainer = document.getElementById('artworkContainer');

    data.forEach(photo => {
      const photoContainer = document.createElement('div');
      photoContainer.classList.add('photo-container');

      const img = document.createElement('img');
      img.src = photo.url;
      img.alt = photo.title;
      img.classList.add('photo');

      photoContainer.appendChild(img);
      artworkContainer.appendChild(photoContainer);
    });
  })
  .catch(error => {
    console.error('Error fetching photos:', error);
  });