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

  // Функция удаления текущего никнейма
  const deleteCurrentNickname = () => {
    setNickname('Никнейм удалён');
  };

  // Функция очистки истории
  const clearHistory = () => {
    setHistory([]);
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
        
        <div className="button-group">
          <button 
            onClick={() => copyToClipboard(nickname)}
            className="copy-button"
            disabled={nickname === 'Никнейм удалён' || nickname === 'Нажми кнопку'}
          >
            📋 Копировать
          </button>
          
          <button 
            onClick={deleteCurrentNickname}
            className="delete-button"
            disabled={nickname === 'Никнейм удалён' || nickname === 'Нажми кнопку'}
          >
            🗑️ Удалить
          </button>
        </div>
      </div>

      {history.length > 0 && (
        <div className="history-section">
          <div className="history-header">
            <h3>📜 История (последние {history.length}):</h3>
            <button 
              onClick={clearHistory}
              className="clear-history-button"
            >
              🗑️ Очистить историю
            </button>
          </div>
          
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