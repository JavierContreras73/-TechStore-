import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [termino, setTermino] = useState('');

  const handleChange = (e) => {
    setTermino(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={termino}
        onChange={handleChange}
      />
      <button className="search-btn">🔍</button>
    </div>
  );
}

export default SearchBar;
