import React, { useState } from 'react';
import './App.css';

function App() {
  const [nickname, setNickname] = useState('Нажми кнопку');
  const [history, setHistory] = useState([]);

  const words = {
    adjectives: ['Красный', 'Синий', 'Быстрый', 'Смелый', 'Тёмный', 'Огненный', 'Ледяной'],
    nouns: ['Волк', 'Тигр', 'Орёл', 'Дракон', 'Воин', 'Маг', 'Рыцарь']
  };

  const generateNickname = () => {
    const adj = words.adjectives[Math.floor(Math.random() * words.adjectives.length)];
    const noun = words.nouns[Math.floor(Math.random() * words.nouns.length)];
    const num = Math.floor(Math.random() * 1000);
    const newNick = `${adj}_${noun}_${num}`;
    
    setNickname(newNick);
    setHistory(prev => [newNick, ...prev.slice(0, 5)]);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Скопировано: ' + text);
  };

  return (
    <div className="container">
      <h1 className="header">🎮 Генератор никнеймов</h1>
      
      <button 
        onClick={generateNickname}
        className="generate-button"
      >
        🎲 Сгенерировать новый никнейм
      </button>

      <div className="result-card">
        <div>Текущий никнейм:</div>
        <div className="nickname-text">{nickname}</div>
        <button 
          onClick={() => copyToClipboard(nickname)}
          className="copy-button"
        >
          📋 Копировать
        </button>
      </div>

      {history.length > 0 && (
        <div className="history-section">
          <h3>📜 История (последние {history.length}):</h3>
          {history.map((item, index) => (
            <div key={index} className="history-item">
              <span>{item}</span>
              <button 
                onClick={() => copyToClipboard(item)}
                className="history-copy-button"
              >
                Копировать
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;