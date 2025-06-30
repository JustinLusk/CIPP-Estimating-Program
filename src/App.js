import React, { useState } from 'react';

const App = () => {
  const [tab, setTab] = useState('materials');

  const [materials, setMaterials] = useState([
    { name: 'Resin', unitCost: 30, quantity: 0, markup: 0 },
    { name: 'End Seals', unitCost: 50, quantity: 0, markup: 0 },
    { name: 'Mineral Oil', unitCost: 10, quantity: 0, markup: 0 },
    { name: 'Rope', unitCost: 5, quantity: 0, markup: 0 },
    { name: 'Sawzall Blades', unitCost: 3, quantity: 0, markup: 0 },
    { name: 'Razor Blades', unitCost: 1, quantity: 0, markup: 0 },
    { name: 'Ratchet Straps', unitCost: 12, quantity: 0, markup: 0 },
    { name: 'Duct Tape', unitCost: 4, quantity: 0, markup: 0 }
  ]);

  const [equipment, setEquipment] = useState([
    { type: 'Pump 4"', rentalType: 'Day', rate: 100, quantity: 0, markup: 0 },
    { type: 'Boiler Truck', rentalType: 'Day', rate: 450, quantity: 0, markup: 0 },
    { type: 'Compressor 750cfm', rentalType: 'Day', rate: 150, quantity: 0, markup: 0 }
  ]);

  const [labor, setLabor] = useState([
    { diameter: '6"', wetLF: 0, rate: 2500, prodRate: 300, markup: 0 },
    { diameter: '8"', wetLF: 0, rate: 2500, prodRate: 280, markup: 0 },
    { diameter: '10"', wetLF: 0, rate: 2500, prodRate: 260, markup: 0 },
    { diameter: '12"', wetLF: 0, rate: 2500, prodRate: 240, markup: 0 }
  ]);

  const handleMaterialChange = (index, field, value) => {
    const newList = [...materials];
    newList[index][field] = parseFloat(value);
    setMaterials(newList);
  };

  const handleEquipmentChange = (index, field, value) => {
    const newList = [...equipment];
    newList[index][field] = parseFloat(value);
    setEquipment(newList);
  };

  const handleLaborChange = (index, field, value) => {
    const newList = [...labor];
    newList[index][field] = parseFloat(value);
    setLabor(newList);
  };

  const materialsSubtotal = materials.reduce((sum, item) => {
    const line = item.unitCost * item.quantity;
    const total = line * (1 + item.markup / 100);
    return sum + total;
  }, 0);

  const equipmentSubtotal = equipment.reduce((sum, item) => {
    const total = item.rate * item.quantity * (1 + item.markup / 100);
    return sum + total;
  }, 0);

  const laborSubtotal = labor.reduce((sum, item) => {
    const days = item.prodRate > 0 ? Math.ceil(item.wetLF / item.prodRate) : 0;
    const base = days * item.rate;
    const total = base * (1 + item.markup / 100);
    return sum + total;
  }, 0);

  return (
    <div style={{ fontFamily: 'Arial', padding: '1rem' }}>
      <h1>Cobra CIPP Estimator</h1>
      <nav style={{ marginBottom: '1rem' }}>
        {['materials', 'equipment', 'labor', 'fuel', 'subcontractors', 'liner material', 'summary'].map(t => (
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
                style={{ width: '80px', marginLeft: '10px' }}
              />
              Qty:
              <input
                type="number"
                value={item.quantity}
                onChange={e => handleMaterialChange(i, 'quantity', e.target.value)}
                style={{ width: '60px', marginLeft: '10px' }}
              />
              Markup %:
              <input
                type="number"
                value={item.markup}
                onChange={e => handleMaterialChange(i, 'markup', e.target.value)}
                style={{ width: '60px', marginLeft: '10px' }}
              />
              <span style={{ marginLeft: '15px' }}>
                Total: ${(item.unitCost * item.quantity * (1 + item.markup / 100)).toFixed(2)}
              </span>
            </div>
          ))}
          <h3>Materials Subtotal: ${materialsSubtotal.toFixed(2)}</h3>
        </div>
      )}

      {tab === 'equipment' && (
        <div>
          <h2>Equipment</h2>
          {equipment.map((item, i) => {
            const total = item.rate * item.quantity * (1 + item.markup / 100);
            return (
              <div key={i} style={{ marginBottom: '10px' }}>
                <strong>{item.type}</strong><br />
                Rental Type:
                <select
                  value={item.rentalType}
                  onChange={e => handleEquipmentChange(i, 'rentalType', e.target.value)}
                  style={{ margin: '0 10px' }}
                >
                  {['Day', 'Week', 'Month'].map(type => (
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
                Markup %:
                <input
                  type="number"
                  value={item.markup}
                  onChange={e => handleEquipmentChange(i, 'markup', e.target.value)}
                  style={{ width: '60px', marginLeft: '10px' }}
                />
                <span style={{ marginLeft: '15px' }}>
                  Total: ${total.toFixed(2)}
                </span>
              </div>
            );
          })}
          <h3>Equipment Subtotal: ${equipmentSubtotal.toFixed(2)}</h3>
        </div>
      )}

      {tab === 'labor' && (
        <div>
          <h2>Labor</h2>
          {labor.map((item, i) => {
            const days = item.prodRate > 0 ? Math.ceil(item.wetLF / item.prodRate) : 0;
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

      {tab !== 'materials' && tab !== 'equipment' && tab !== 'labor' && (
        <div>
          <h2>{tab.charAt(0).toUpperCase() + tab.slice(1)} (coming next)</h2>
        </div>
      )}
    </div>
  );
};

export default App;
