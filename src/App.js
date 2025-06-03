import { useEffect, useState } from 'react';

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/g/200/300')
    .then(response => {
    // Handle response
  }, []);

  return (
    <div>
      <h1>Galeri Foto</h1>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} width="150" />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
