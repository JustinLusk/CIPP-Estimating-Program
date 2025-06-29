import React, { useState } from 'react';

const App = () => {
  const [project, setProject] = useState({
    name: '',
    diameter: '',
    wetFootage: 0,
    dryFootage: 0,
  });

  const [crewRate, setCrewRate] = useState(2500);
  const [markup, setMarkup] = useState(20);

  const linerCostPerFoot = 25;
  const wetCost = project.wetFootage * linerCostPerFoot;
  const dryCost = project.dryFootage * (linerCostPerFoot * 0.8);
  const laborCost = Math.ceil((project.wetFootage + project.dryFootage) / 300) * crewRate;
  const total = (wetCost + dryCost + laborCost) * (1 + markup / 100);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Cobra CIPP Estimator</h1>

      <label>Project Name:<br />
        <input value={project.name} onChange={e => setProject({ ...project, name: e.target.value })} />
      </label><br /><br />

      <label>Pipe Diameter:<br />
        <select value={project.diameter} onChange={e => setProject({ ...project, diameter: e.target.value })}>
          <option value="">Select</option>
          {[6, 8, 10, 12, 15, 18, 24, 30, 36, 48, 60, 72].map(d => (
            <option key={d} value={d}>{d}"</option>
          ))}
        </select>
      </label><br /><br />

      <label>Wet Liner Footage:<br />
        <input type="number" value={project.wetFootage} onChange={e => setProject({ ...project, wetFootage: +e.target.value })} />
      </label><br /><br />

      <label>Dry Liner Footage:<br />
        <input type="number" value={project.dryFootage} onChange={e => setProject({ ...project, dryFootage: +e.target.value })} />
      </label><br /><br />

      <label>Crew Rate ($/day):<br />
        <input type="number" value={crewRate} onChange={e => setCrewRate(+e.target.value)} />
      </label><br /><br />

      <label>Markup (%):<br />
        <input type="number" value={markup} onChange={e => setMarkup(+e.target.value)} />
      </label><br /><br />

      <h2>Wet Liner Cost: ${wetCost.toFixed(2)}</h2>
      <h2>Dry Liner Cost: ${dryCost.toFixed(2)}</h2>
      <h2>Labor Cost: ${laborCost.toFixed(2)}</h2>
      <h2>Total Bid (w/ Markup): ${total.toFixed(2)}</h2>
    </div>
  );
};

export default App;
