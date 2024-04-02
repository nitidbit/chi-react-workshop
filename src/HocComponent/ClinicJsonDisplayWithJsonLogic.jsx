import ClinicJsonDisplay from '../ClinicJsonComponent/ClinicJsonDisplay.jsx'
import withJsonLogic from '../withJsonLogic.jsx'

export default withJsonLogic(
  ClinicJsonDisplay,
  'https://abortionfinder-staging.s3.amazonaws.com/api/abortion_clinics_v3.json',
  'clinics'
)
