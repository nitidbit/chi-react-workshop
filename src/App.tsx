import { useState } from 'react'
import ClinicJsonLogic from './ClinicJsonComponent/ClinicJsonLogic.tsx'
import OrgJsonLogic from './OrgJsonComponent/OrgJsonLogic.tsx'

// import JsonLogic from './JsonLogic'
// import ClinicJsonDisplay from './ClinicJsonComponent/ClinicJsonDisplay.tsx'
// import OrgJsonDisplay from './OrgJsonComponent/OrgJsonDisplay.tsx'

import { fontColorType } from './types'

const App = (): JSX.Element => {
  const [fontColor, setFontColor] = useState<fontColorType>('lightblue')

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
        complete JsonLogic.tsx's logic so we can replace the above code with the below code:
        
        <JsonLogic jsonKey="clinics" url="https://abortionfinder-staging.s3.amazonaws.com/api/abortion_clinics_v3.json">
          { ({ count }) => <ClinicJsonDisplay fontColor={fontColor} count={count} /> }
        </JsonLogic>

        <JsonLogic jsonKey="support_orgs" url="https://abortionfinder-staging.s3.amazonaws.com/api/support_orgs_v3.json">
          { ({ count }) => <OrgJsonDisplay fontColor={fontColor} count={count} /> }
        </JsonLogic>
      */}

      {/* =================================== */}
    </main>
  )
}

export default App
