import { useState } from 'react';
import './LangToggle.scss';

export const LangToggle = () => {
  const [lang, setLang] = useState('EN');

  const handleChange = () => {
    setLang((prevLang) => (prevLang === 'EN' ? 'UA' : 'EN'));
  };

  return (
    <button
      className="lang-button"
      onClick={handleChange}
    >
      {lang}
    </button>
  );
};
