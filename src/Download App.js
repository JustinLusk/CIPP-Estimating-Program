
import React, { useState } from 'react';

const App = () => {
  const [tab, setTab] = useState('materials');

  return (
    <div style={{ fontFamily: 'Arial', padding: '1rem' }}>
      <h1>Cobra CIPP Estimator</h1>
      <nav style={{ marginBottom: '1rem' }}>
        {['materials', 'equipment', 'labor', 'diameters', 'summary'].map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              marginRight: '10px',
              padding: '0.5rem 1rem',
              background: tab === t ? '#28a745' : '#eee',
              color: tab === t ? '#fff' : '#000',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </nav>

      {tab === 'materials' && (
        <div>
          <h2>Materials</h2>
          <p>Resin, End Seals, Mineral Oil, Rope, etc. (inputs go here)</p>
        </div>
      )}
      {tab === 'equipment' && (
        <div>
          <h2>Equipment</h2>
          <p>Boiler Truck, Pumps, Plugs, Excavator, Rentals by day/week/month</p>
        </div>
      )}
      {tab === 'labor' && (
        <div>
          <h2>Labor</h2>
          <p>Daily Production Rate per Diameter, Auto Crew Day Calc</p>
        </div>
      )}
      {tab === 'diameters' && (
        <div>
          <h2>Pipe Diameters</h2>
          <p>Wet & Dry Footage, Diameter Selector, Thickness, Per-LF Price</p>
        </div>
      )}
      {tab === 'summary' && (
        <div>
          <h2>Bid Summary</h2>
          <p>Per-diameter breakdown, total bid, markup, export-ready</p>
        </div>
      )}
    </div>
  );
};

export default App;
