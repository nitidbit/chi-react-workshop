import React from 'react'

interface ClinicJsonDisplayProps {
  count: number
  fontColor: 'lightblue' | 'green'
}

const ClinicJsonDisplay: React.FC<ClinicJsonDisplayProps> = ({
  count,
  fontColor,
}) => (
  <p
    style={{ color: fontColor }}
  >{`There are ${count} abortion clinics on Navigate`}</p>
)

export default ClinicJsonDisplay
