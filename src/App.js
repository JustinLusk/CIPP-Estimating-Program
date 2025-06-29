
import React, { useState } from 'react';

const App = () => {
  const [tab, setTab] = useState('materials');
  const [materials, setMaterials] = useState([
    { name: 'Resin', unitCost: 30, quantity: 0 },
    { name: 'End Seals', unitCost: 50, quantity: 0 },
    { name: 'Mineral Oil', unitCost: 10, quantity: 0 },
    { name: 'Rope', unitCost: 5, quantity: 0 },
    { name: 'Sawzall Blades', unitCost: 3, quantity: 0 },
    { name: 'Razor Blades', unitCost: 1, quantity: 0 },
    { name: 'Ratchet Straps', unitCost: 12, quantity: 0 },
    { name: 'Duct Tape', unitCost: 4, quantity: 0 },
  ]);

  const handleMaterialChange = (index, field, value) => {
    const newMaterials = [...materials];
    newMaterials[index][field] = parseFloat(value);
    setMaterials(newMaterials);
  };

  const materialsSubtotal = materials.reduce((sum, item) => sum + item.unitCost * item.quantity, 0);

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
              borderRadius: '5px',
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
          {materials.map((item, i) => (
            <div key={i} style={{ marginBottom: '10px' }}>
              <strong>{item.name}</strong><br />
              Unit Cost: $
              <input
                type="number"
                value={item.unitCost}
                onChange={e => handleMaterialChange(i, 'unitCost', e.target.value)}
                style={{ width: '80px', marginRight: '10px' }}
              />
              Quantity:
              <input
                type="number"
                value={item.quantity}
                onChange={e => handleMaterialChange(i, 'quantity', e.target.value)}
                style={{ width: '80px', marginLeft: '10px' }}
              />
              <span style={{ marginLeft: '15px' }}>
                Line Total: ${(item.unitCost * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
          <h3>Materials Subtotal: ${materialsSubtotal.toFixed(2)}</h3>
        </div>
      )}

      {tab !== 'materials' && (
        <div>
          <h2>{tab.charAt(0).toUpperCase() + tab.slice(1)} (coming next)</h2>
        </div>
      )}
    </div>
  );
};

export default App;
