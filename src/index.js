import React from 'react';
import ReactDOM from 'react-dom/client'; // Благодаря ReactDOM логика реакта преобразуется в HTML

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Точка запуска нашего проекта
root.render(<App />);
