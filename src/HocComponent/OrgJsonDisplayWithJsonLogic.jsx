import OrgJsonDisplay from '../OrgJsonComponent/OrgJsonDisplay.jsx'
import withJsonLogic from '../withJsonLogic.jsx'

export default withJsonLogic(
  OrgJsonDisplay,
  'https://abortionfinder-staging.s3.amazonaws.com/api/support_orgs_v3.json',
  'support_orgs'
)
