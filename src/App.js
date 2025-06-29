
import React, { useState } from 'react';

const rentalTypes = ['Day', 'Week', 'Month'];

const App = () => {
  const [tab, setTab] = useState('equipment');

  const [equipment, setEquipment] = useState([
    { type: 'Pump 4\"', rentalType: 'Day', rate: 100, quantity: 0 },
    { type: 'Pump 6\"', rentalType: 'Day', rate: 120, quantity: 0 },
    { type: 'Pump 8\"', rentalType: 'Day', rate: 150, quantity: 0 },
    { type: 'Pump 12\"', rentalType: 'Day', rate: 180, quantity: 0 },
    { type: 'Plug 6\"–10\"', rentalType: 'Day', rate: 40, quantity: 0 },
    { type: 'Plug 8\"–12\"', rentalType: 'Day', rate: 50, quantity: 0 },
    { type: 'Plug 12\"–18\"', rentalType: 'Day', rate: 70, quantity: 0 },
    { type: 'Plug 18\"–36\"', rentalType: 'Day', rate: 175, quantity: 0 },
    { type: 'Boiler Truck', rentalType: 'Day', rate: 450, quantity: 0 },
    { type: 'Excavator', rentalType: 'Day', rate: 500, quantity: 0 },
    { type: 'Compressor 375cfm', rentalType: 'Day', rate: 100, quantity: 0 },
    { type: 'Compressor 750cfm', rentalType: 'Day', rate: 150, quantity: 0 },
    { type: 'Compressor 925cfm', rentalType: 'Day', rate: 200, quantity: 0 },
    { type: 'Compressor 1600cfm', rentalType: 'Day', rate: 300, quantity: 0 },
  ]);

  const handleEquipmentChange = (index, field, value) => {
    const newList = [...equipment];
    newList[index][field] = field === 'rate' || field === 'quantity' ? parseFloat(value) : value;
    setEquipment(newList);
  };

  const equipmentSubtotal = equipment.reduce(
    (sum, item) => sum + item.rate * item.quantity,
    0
  );

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

      {tab === 'equipment' && (
        <div>
          <h2>Equipment</h2>
          {equipment.map((item, i) => (
            <div key={i} style={{ marginBottom: '10px' }}>
              <strong>{item.type}</strong><br />
              Rental Type:
              <select
                value={item.rentalType}
                onChange={e => handleEquipmentChange(i, 'rentalType', e.target.value)}
                style={{ margin: '0 10px' }}
              >
                {rentalTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              Rate: $
              <input
                type="number"
                value={item.rate}
                onChange={e => handleEquipmentChange(i, 'rate', e.target.value)}
                style={{ width: '80px', marginLeft: '10px' }}
              />
              Qty:
              <input
                type="number"
                value={item.quantity}
                onChange={e => handleEquipmentChange(i, 'quantity', e.target.value)}
                style={{ width: '60px', marginLeft: '10px' }}
              />
              <span style={{ marginLeft: '15px' }}>
                Line Total: ${(item.rate * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
          <h3>Equipment Subtotal: ${equipmentSubtotal.toFixed(2)}</h3>
        </div>
      )}

      {tab !== 'equipment' && (
        <div>
          <h2>{tab.charAt(0).toUpperCase() + tab.slice(1)} (coming next)</h2>
        </div>
      )}
    </div>
  );
};

export default App;
