import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" style={{ padding: '100px 20px', textAlign: 'center' }}>
      <h1 style={{ color: 'red', fontSize: '48px' }}>SPIRITY WEBSITE IS WORKING!</h1>
      <p style={{ fontSize: '24px', color: 'blue' }}>If you can see this, React is working correctly.</p>
      <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#d4eb97', borderRadius: '10px' }}>
        <h2>Test Content</h2>
        <p>This is a test to see if the React app is rendering properly.</p>
      </div>
    </div>
  );
}

export default App;
