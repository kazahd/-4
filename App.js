// App.js
import React, { useState } from 'react';

function App() {
  const [nickname, setNickname] = useState('Нажми кнопку');
  const [history, setHistory] = useState([]);

  const words = {
    adjectives: ['Красный', 'Синий', 'Быстрый', 'Смелый', 'Тёмный'],
    nouns: ['Волк', 'Тигр', 'Орёл', 'Дракон', 'Воин']
  };

  const generateNickname = () => {
    const adj = words.adjectives[Math.floor(Math.random() * words.adjectives.length)];
    const noun = words.nouns[Math.floor(Math.random() * words.nouns.length)];
    const num = Math.floor(Math.random() * 100);
    const newNick = `${adj}_${noun}_${num}`;
    
    setNickname(newNick);
    setHistory(prev => [newNick, ...prev.slice(0, 4)]);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Скопировано: ' + text);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Генератор никнеймов</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={generateNickname}
          style={{ padding: '10px 20px', fontSize: '16px' }}
        >
          Сгенерировать
        </button>
      </div>

      <div style={{ marginBottom: '20px', fontSize: '18px' }}>
        <strong>Результат:</strong> {nickname}
        <button 
          onClick={() => copyToClipboard(nickname)}
          style={{ marginLeft: '10px', padding: '5px 10px' }}
        >
          Копировать
        </button>
      </div>

      {history.length > 0 && (
        <div>
          <h3>История:</h3>
          <ul>
            {history.map((item, index) => (
              <li key={index} style={{ margin: '5px 0' }}>
                {item}
                <button 
                  onClick={() => copyToClipboard(item)}
                  style={{ marginLeft: '10px', padding: '2px 8px' }}
                >
                  Копировать
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;