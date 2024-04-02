import { useState } from 'react'
import ClinicJsonLogic from './ClinicJsonComponent/ClinicJsonLogic.jsx'
import OrgJsonLogic from './OrgJsonComponent/OrgJsonLogic.jsx'

// import JsonLogic from './JsonLogic'
// import ClinicJsonDisplay from './ClinicJsonComponent/ClinicJsonDisplay.jsx'
// import OrgJsonDisplay from './OrgJsonComponent/OrgJsonDisplay.jsx'

const App = () => {
  const [fontColor, setFontColor] = useState('lightblue')

  return (
    <main>
      <h1>Chi's React Workshop</h1>

      <button
        type="button"
        onClick={() =>
          setFontColor(fontColor === 'lightblue' ? 'green' : 'lightblue')
        }
      >
        Click Me to change font color
      </button>

      <ClinicJsonLogic fontColor={fontColor} />
      <OrgJsonLogic fontColor={fontColor} />

      {/* =================================== */}

      {/* Challenge One:  
        complete JsonLogic.jsx's logic so we can replace the above code with the below code:
        
        <JsonLogic jsonKey="clinics" url="https://abortionfinder-staging.s3.amazonaws.com/api/abortion_clinics_v3.json">
          { ({ count }) => <ClinicJsonDisplay fontColor={fontColor} count={count} /> }
        </JsonLogic>

        <JsonLogic jsonKey="clinics" url="https://abortionfinder-staging.s3.amazonaws.com/api/abortion_clinics_v3.json">
          { ({ count }) => <OrgJsonDisplay fontColor={fontColor} count={count} /> }
        </JsonLogic>
      */}
    </main>
  )
}

export default App
