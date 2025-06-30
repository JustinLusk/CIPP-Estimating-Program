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
    { type: 'Pump 6"', rentalType: 'Day', rate: 120, quantity: 0, markup: 0 },
    { type: 'Pump 8"', rentalType: 'Day', rate: 150, quantity: 0, markup: 0 },
    { type: 'Pump 12"', rentalType: 'Day', rate: 180, quantity: 0, markup: 0 },
    { type: 'Plug 6"–10"', rentalType: 'Day', rate: 40, quantity: 0, markup: 0 },
    { type: 'Plug 8"–12"', rentalType: 'Day', rate: 50, quantity: 0, markup: 0 },
    { type: 'Plug 12"–18"', rentalType: 'Day', rate: 70, quantity: 0, markup: 0 },
    { type: 'Plug 12"–24"', rentalType: 'Day', rate: 90, quantity: 0, markup: 0 },
    { type: 'Plug 15"–30"', rentalType: 'Day', rate: 130, quantity: 0, markup: 0 },
    { type: 'Plug 20"–40"', rentalType: 'Day', rate: 175, quantity: 0, markup: 0 },
    { type: 'Plug 24"–48"', rentalType: 'Day', rate: 220, quantity: 0, markup: 0 },
    { type: 'Plug 24"–60"', rentalType: 'Day', rate: 320, quantity: 0, markup: 0 },
    { type: 'Plug 48"–72"', rentalType: 'Day', rate: 520, quantity: 0, markup: 0 },
    { type: 'Plug 54"–96"', rentalType: 'Day', rate: 600, quantity: 0, markup: 0 },
    { type: 'Urethane Plug 24"', rentalType: 'Day', rate: 90, quantity: 0, markup: 0 },
    { type: 'Urethane Plug 30"', rentalType: 'Day', rate: 130, quantity: 0, markup: 0 },
    { type: 'Urethane Plug 36"', rentalType: 'Day', rate: 175, quantity: 0, markup: 0 },
    { type: 'Urethane Plug 48"', rentalType: 'Day', rate: 220, quantity: 0, markup: 0 },
    { type: 'Boiler Truck', rentalType: 'Day', rate: 450, quantity: 0, markup: 0 },
    { type: 'Excavator', rentalType: 'Day', rate: 500, quantity: 0, markup: 0 },
    { type: 'Compressor 375cfm', rentalType: 'Day', rate: 100, quantity: 0, markup: 0 },
    { type: 'Compressor 750cfm', rentalType: 'Day', rate: 150, quantity: 0, markup: 0 },
    { type: 'Compressor 925cfm', rentalType: 'Day', rate: 200, quantity: 0, markup: 0 },
    { type: 'Compressor 1600cfm', rentalType: 'Day', rate: 300, quantity: 0, markup: 0 }
  ]);

  const [labor, setLabor] = useState([
  { diameter: '6"', wetLF: 0, prodRate: 300, rate: 2100, overhead: 4300, markup: 0 },
  { diameter: '8"', wetLF: 0, prodRate: 300, rate: 2100, overhead: 4300, markup: 0 },
  { diameter: '10"', wetLF: 0, prodRate: 300, rate: 2100, overhead: 4300, markup: 0 },
  { diameter: '12"', wetLF: 0, prodRate: 300, rate: 2100, overhead: 4300, markup: 0 },
  { diameter: '15"', wetLF: 0, prodRate: 300, rate: 2100, overhead: 4300, markup: 0 },
  { diameter: '18"', wetLF: 0, prodRate: 300, rate: 2100, overhead: 4300, markup: 0 },
  { diameter: '21"', wetLF: 0, prodRate: 300, rate: 2100, overhead: 4300, markup: 0 },
  { diameter: '24"', wetLF: 0, prodRate: 300, rate: 2100, overhead: 4300, markup: 0 },
  { diameter: '27"', wetLF: 0, prodRate: 300, rate: 2100, overhead: 4300, markup: 0 },
  { diameter: '30"', wetLF: 0, prodRate: 300, rate: 2100, overhead: 4300, markup: 0 },
  { diameter: '36"', wetLF: 0, prodRate: 300, rate: 2100, overhead: 4300, markup: 0 },
  { diameter: '42"', wetLF: 0, prodRate: 300, rate: 2100, overhead: 4300, markup: 0 },
  { diameter: '48"', wetLF: 0, prodRate: 300, rate: 2100, overhead: 4300, markup: 0 },
  { diameter: '54"', wetLF: 0, prodRate: 300, rate: 2100, overhead: 4300, markup: 0 },
  { diameter: '60"', wetLF: 0, prodRate: 300, rate: 2100, overhead: 4300, markup: 0 },
  { diameter: '66"', wetLF: 0, prodRate: 300, rate: 2100, overhead: 4300, markup: 0 },
  { diameter: '72"', wetLF: 0, prodRate: 300, rate: 2100, overhead: 4300, markup: 0 }
]);

const [fuel, setFuel] = useState([
  { name: 'Boiler Truck', gallons: 0, cost: 4.5, markup: 0 },
  { name: 'Reefer Truck', gallons: 0, cost: 4.5, markup: 0 },
  { name: 'CCTV Truck', gallons: 0, cost: 4.5, markup: 0 },
  { name: 'Vac Truck', gallons: 0, cost: 4.5, markup: 0 },
  { name: 'Compressors', gallons: 0, cost: 4.5, markup: 0 },
  { name: 'Pumps', gallons: 0, cost: 4.5, markup: 0 },
  { name: 'Pickup Truck', gallons: 0, cost: 4.5, markup: 0 }
]);

const handleFuelChange = (index, field, value) => {
  const newList = [...fuel];
  newList[index][field] = parseFloat(value);
  setFuel(newList);
};

const fuelSubtotal = fuel.reduce((sum, item) => {
  return sum + item.gallons * item.cost * (1 + item.markup / 100);
}, 0);

  const handleMaterialChange = (i, field, value) => {
    const newList = [...materials];
    newList[i][field] = parseFloat(value);
    setMaterials(newList);
  };

  const handleEquipmentChange = (i, field, value) => {
    const newList = [...equipment];
    newList[i][field] = parseFloat(value);
    setEquipment(newList);
  };

  const handleLaborChange = (i, field, value) => {
    const newList = [...labor];
    newList[i][field] = parseFloat(value);
    setLabor(newList);
  };

  const materialsSubtotal = materials.reduce((sum, item) => sum + item.unitCost * item.quantity * (1 + item.markup / 100), 0);
  const equipmentSubtotal = equipment.reduce((sum, item) => sum + item.rate * item.quantity * (1 + item.markup / 100), 0);
  const laborSubtotal = labor.reduce((sum, item) => {
  const crewDays = item.prodRate > 0 ? Math.ceil(item.wetLF / item.prodRate) : 0;
  const crewCost = crewDays * item.rate;
  const overheadCost = crewDays * item.overhead;
  const base = crewCost + overheadCost;
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
            <div key={i}>
              <strong>{item.name}</strong><br />
              Unit Cost: $
              <input type="number" value={item.unitCost} onChange={e => handleMaterialChange(i, 'unitCost', e.target.value)} />
              Qty:
              <input type="number" value={item.quantity} onChange={e => handleMaterialChange(i, 'quantity', e.target.value)} />
              Markup %:
              <input type="number" value={item.markup} onChange={e => handleMaterialChange(i, 'markup', e.target.value)} />
              Total: ${(item.unitCost * item.quantity * (1 + item.markup / 100)).toFixed(2)}
            </div>
          ))}
          <h3>Materials Subtotal: ${materialsSubtotal.toFixed(2)}</h3>
        </div>
      )}

      {tab === 'equipment' && (
        <div>
          <h2>Equipment</h2>
          {equipment.map((item, i) => (
            <div key={i}>
              <strong>{item.type}</strong><br />
              Rental Type:
              <select value={item.rentalType} onChange={e => handleEquipmentChange(i, 'rentalType', e.target.value)}>
                {['Day', 'Week', 'Month'].map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              Rate: $
              <input type="number" value={item.rate} onChange={e => handleEquipmentChange(i, 'rate', e.target.value)} />
              Qty:
              <input type="number" value={item.quantity} onChange={e => handleEquipmentChange(i, 'quantity', e.target.value)} />
              Markup %:
              <input type="number" value={item.markup} onChange={e => handleEquipmentChange(i, 'markup', e.target.value)} />
              Total: ${(item.rate * item.quantity * (1 + item.markup / 100)).toFixed(2)}
            </div>
          ))}
          <h3>Equipment Subtotal: ${equipmentSubtotal.toFixed(2)}</h3>
        </div>
      )}

     {tab === 'labor' && (
        <div>
          <h2>Labor</h2>
          {labor.map((item, i) => {
            const crewDays = item.prodRate > 0 ? Math.ceil(item.wetLF / item.prodRate) : 0;
            const crewCost = crewDays * item.rate;
            const overheadCost = crewDays * item.overhead;
            const base = crewCost + overheadCost;
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
                Overhead ($/day):
                <input
                  type="number"
                  value={item.overhead}
                  onChange={e => handleLaborChange(i, 'overhead', e.target.value)}
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
                  Crew Days: <strong>{crewDays}</strong><br />
                  Crew Cost: ${crewCost.toFixed(2)} | Overhead: ${overheadCost.toFixed(2)}<br />
                  Total w/ Markup: <strong>${total.toFixed(2)}</strong>
                </div>
              </div>
            );
          })}
          <h3>Labor Subtotal: ${laborSubtotal.toFixed(2)}</h3>
        </div>
      )}
      {tab === 'fuel' && (
        <div>
          <h2>Fuel</h2>
          {fuel.map((item, i) => {
            const lineTotal = item.gallons * item.cost * (1 + item.markup / 100);
            return (
              <div key={i} style={{ marginBottom: '15px' }}>
                <strong>{item.name}</strong><br />
                Gallons:
                <input
                  type="number"
                  value={item.gallons}
                  onChange={e => handleFuelChange(i, 'gallons', e.target.value)}
                  style={{ width: '80px', marginLeft: '10px' }}
                />
                Cost/Gallon:
                <input
                  type="number"
                  value={item.cost}
                  onChange={e => handleFuelChange(i, 'cost', e.target.value)}
                  style={{ width: '80px', marginLeft: '10px' }}
                />
                Markup %:
                <input
                  type="number"
                  value={item.markup}
                  onChange={e => handleFuelChange(i, 'markup', e.target.value)}
                  style={{ width: '60px', marginLeft: '10px' }}
                />
                <span style={{ marginLeft: '15px' }}>
                  Total: ${lineTotal.toFixed(2)}
                </span>
              </div>
            );
          })}
          <h3>Fuel Subtotal: ${fuelSubtotal.toFixed(2)}</h3>
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


