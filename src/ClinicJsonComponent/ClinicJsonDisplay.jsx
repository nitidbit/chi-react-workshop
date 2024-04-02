import React from 'react'

const ClinicJsonDisplay = ({ count, fontColor }) => (
  <p
    style={{ color: fontColor }}
  >{`There are ${count} abortion clinics on Navigate`}</p>
)

export default ClinicJsonDisplay
