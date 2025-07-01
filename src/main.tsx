import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div>
    <h1>Jump for Senate</h1>
    <p>Fighting for working families in Chicago, Illinois.</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);

