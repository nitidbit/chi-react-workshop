import React from 'react'

const OrgJsonDisplay = ({ count, fontColor }) => (
  <p
    style={{ color: fontColor }}
  >{`There are ${count} support orgs on Navigate`}</p>
)

export default OrgJsonDisplay
