import React, { useState } from 'react';

const App = () => {
  const [tab, setTab] = useState('labor');

  const [labor, setLabor] = useState([
    { diameter: '6"', wetLF: 0, dryLF: 0, rate: 2500, prodRate: 300, markup: 0 },
    { diameter: '8"', wetLF: 0, dryLF: 0, rate: 2500, prodRate: 250, markup: 0 },
    { diameter: '12"', wetLF: 0, dryLF: 0, rate: 2500, prodRate: 200, markup: 0 },
    { diameter: '24"', wetLF: 0, dryLF: 0, rate: 2500, prodRate: 150, markup: 0 },
    { diameter: '36"', wetLF: 0, dryLF: 0, rate: 2500, prodRate: 100, markup: 0 },
    { diameter: '48"', wetLF: 0, dryLF: 0, rate: 2500, prodRate: 75, markup: 0 }
  ]);

  const handleLaborChange = (index, field, value) => {
    const newList = [...labor];
    newList[index][field] = parseFloat(value);
    setLabor(newList);
  };

  const calculateCrewDays = (wet, dry, rate) => {
    const total = wet + dry;
    return rate > 0 ? Math.ceil(total / rate) : 0;
  };

  const laborSubtotal = labor.reduce((sum, item) => {
    const days = calculateCrewDays(item.wetLF, item.dryLF, item.prodRate);
    const base = days * item.rate;
    const withMarkup = base * (1 + item.markup / 100);
    return sum + withMarkup;
  }, 0);

  return (
    <div style={{ fontFamily: 'Arial', padding: '1rem' }}>
      <h1>Cobra CIPP Estimator</h1>
      <nav style={{ marginBottom: '1rem' }}>
        {['materials', 'equipment', 'labor', 'fuel', 'subcontractors', 'diameters', 'summary'].map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              marginRight: '10px',
              padding: '0.5rem 1rem',
              background: tab === t ? '#28a745' : '#eee',
              color: tab === t ? '#fff' : '#000',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </nav>

      {tab === 'labor' && (
        <div>
          <h2>Labor</h2>
          {labor.map((item, i) => {
            const days = calculateCrewDays(item.wetLF, item.dryLF, item.prodRate);
            const base = days * item.rate;
            const total = base * (1 + item.markup / 100);
            return (
              <div key={i} style={{ marginBottom: '15px' }}>
                <strong>{item.diameter}</strong><br />
                Wet LF:
                <input
                  type="number"
                  value={item.wetLF}
                  onChange={e => handleLaborChange(i, 'wetLF', e.target.value)}
                  style={{ width: '80px', marginLeft: '10px' }}
                />
                Dry LF:
                <input
                  type="number"
                  value={item.dryLF}
                  onChange={e => handleLaborChange(i, 'dryLF', e.target.value)}
                  style={{ width: '80px', marginLeft: '10px' }}
                />
                Prod Rate:
                <input
                  type="number"
                  value={item.prodRate}
                  onChange={e => handleLaborChange(i, 'prodRate', e.target.value)}
                  style={{ width: '80px', marginLeft: '10px' }}
                />
                Crew Rate:
                <input
                  type="number"
                  value={item.rate}
                  onChange={e => handleLaborChange(i, 'rate', e.target.value)}
                  style={{ width: '100px', marginLeft: '10px' }}
                />
                Markup %:
                <input
                  type="number"
                  value={item.markup}
                  onChange={e => handleLaborChange(i, 'markup', e.target.value)}
                  style={{ width: '60px', marginLeft: '10px' }}
                />
                <div style={{ marginTop: '5px' }}>
                  Crew Days: <strong>{days}</strong> | Cost w/ Markup: <strong>${total.toFixed(2)}</strong>
                </div>
              </div>
            );
          })}
          <h3>Labor Subtotal: ${laborSubtotal.toFixed(2)}</h3>
        </div>
      )}

      {tab !== 'labor' && (
        <div>
          <h2>{tab.charAt(0).toUpperCase() + tab.slice(1)} (coming next)</h2>
        </div>
      )}
    </div>
  );
};

export default App;
  );
};

export default App;
