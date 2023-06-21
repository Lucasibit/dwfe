import { useState } from 'react';
import { sculptureList } from './data.jsx';
import './gallery.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index === sculptureList.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function handlePreviousClick() {
    if (index === 0) {
      setIndex(sculptureList.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  let sculpture = sculptureList[index];
  return (
    <div className="gallery-container">
      <button type="button" className="btn btn-outline-primary" onClick={handlePreviousClick}>
        Anterior
      </button>
      <button type="button" className="btn btn-outline-primary" onClick={handleClick}>
        Próxima
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
        className="gallery-image"
      />
      <p>
        {sculpture.description}
      </p>
    </div>
  );
}
