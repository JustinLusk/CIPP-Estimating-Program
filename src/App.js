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

  const [fuel, setFuel] = useState([
    { name: 'Boiler Truck', gallons: 0, cost: 4.5, markup: 0 },
    { name: 'Reefer Truck', gallons: 0, cost: 4.5, markup: 0 },
    { name: 'CCTV Truck', gallons: 0, cost: 4.5, markup: 0 },
    { name: 'Vac Truck', gallons: 0, cost: 4.5, markup: 0 },
    { name: 'Compressors', gallons: 0, cost: 4.5, markup: 0 },
    { name: 'Pumps', gallons: 0, cost: 4.5, markup: 0 },
    { name: 'Pickup Truck', gallons: 0, cost: 4.5, markup: 0 }
  ]);

  const [subs, setSubs] = useState([
    { name: 'Clean/TV Crew', base: 0, markup: 0 },
    { name: 'Lateral/T-Liner Crew', base: 0, markup: 0 },
    { name: 'Divers', base: 0, markup: 0 },
    { name: 'Chemical Grout Crew', base: 0, markup: 0 },
    { name: 'Sod/Restoration', base: 0, markup: 0 },
    { name: 'Pipe Contractor', base: 0, markup: 0 },
    { name: 'Paving', base: 0, markup: 0 },
    { name: 'Concrete', base: 0, markup: 0 }
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

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Cobra CIPP Estimator</h1>
      <nav style={{ marginBottom: '20px' }}>
        {['materials', 'equipment', 'fuel', 'subcontractors', 'labor'].map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{ marginRight: '10px', padding: '10px', cursor: 'pointer' }}
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
              {item.name} - Unit: $
              <input type="number" value={item.unitCost} onChange={e => {
                const m = [...materials];
                m[i].unitCost = parseFloat(e.target.value);
                setMaterials(m);
              }} />
              Qty:
              <input type="number" value={item.quantity} onChange={e => {
                const m = [...materials];
                m[i].quantity = parseFloat(e.target.value);
                setMaterials(m);
              }} />
              Markup %:
              <input type="number" value={item.markup} onChange={e => {
                const m = [...materials];
                m[i].markup = parseFloat(e.target.value);
                setMaterials(m);
              }} />
            </div>
          ))}
        </div>
      )}

      {tab === 'equipment' && (
        <div>
          <h2>Equipment</h2>
          {equipment.map((item, i) => (
            <div key={i}>
              {item.type} - Rate: $
              <input type="number" value={item.rate} onChange={e => {
                const eq = [...equipment];
                eq[i].rate = parseFloat(e.target.value);
                setEquipment(eq);
              }} />
              Qty:
              <input type="number" value={item.quantity} onChange={e => {
                const eq = [...equipment];
                eq[i].quantity = parseFloat(e.target.value);
                setEquipment(eq);
              }} />
              Markup %:
              <input type="number" value={item.markup} onChange={e => {
                const eq = [...equipment];
                eq[i].markup = parseFloat(e.target.value);
                setEquipment(eq);
              }} />
            </div>
          ))}
        </div>
      )}

      {tab === 'fuel' && (
        <div>
          <h2>Fuel</h2>
          {fuel.map((item, i) => (
            <div key={i}>
              {item.name} - Gallons:
              <input type="number" value={item.gallons} onChange={e => {
                const f = [...fuel];
                f[i].gallons = parseFloat(e.target.value);
                setFuel(f);
              }} />
              Cost/Gallon:
              <input type="number" value={item.cost} onChange={e => {
                const f = [...fuel];
                f[i].cost = parseFloat(e.target.value);
                setFuel(f);
              }} />
              Markup %:
              <input type="number" value={item.markup} onChange={e => {
                const f = [...fuel];
                f[i].markup = parseFloat(e.target.value);
                setFuel(f);
              }} />
            </div>
          ))}
        </div>
      )}

      {tab === 'subcontractors' && (
        <div>
          <h2>Subcontractors</h2>
          {subs.map((item, i) => (
            <div key={i}>
              {item.name} - Base Cost:
              <input type="number" value={item.base} onChange={e => {
                const s = [...subs];
                s[i].base = parseFloat(e.target.value);
                setSubs(s);
              }} />
              Markup %:
              <input type="number" value={item.markup} onChange={e => {
                const s = [...subs];
                s[i].markup = parseFloat(e.target.value);
                setSubs(s);
              }} />
            </div>
          ))}
        </div>
      )}

      {tab === 'labor' && (
        <div>
          <h2>Labor</h2>
          {labor.map((item, i) => (
            <div key={i}>
              {item.diameter} - Wet LF:
              <input type="number" value={item.wetLF} onChange={e => {
                const l = [...labor];
                l[i].wetLF = parseFloat(e.target.value);
                setLabor(l);
              }} />
              Prod Rate:
              <input type="number" value={item.prodRate} onChange={e => {
                const l = [...labor];
                l[i].prodRate = parseFloat(e.target.value);
                setLabor(l);
              }} />
              Crew Rate:
              <input type="number" value={item.rate} onChange={e => {
                const l = [...labor];
                l[i].rate = parseFloat(e.target.value);
                setLabor(l);
              }} />
              Overhead:
              <input type="number" value={item.overhead} onChange={e => {
                const l = [...labor];
                l[i].overhead = parseFloat(e.target.value);
                setLabor(l);
              }} />
              Markup %:
              <input type="number" value={item.markup} onChange={e => {
                const l = [...labor];
                l[i].markup = parseFloat(e.target.value);
                setLabor(l);
              }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;



