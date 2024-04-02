import React from 'react'

interface OrgJsonDisplayProps {
  count: number
  fontColor: 'lightblue' | 'green'
}

const OrgJsonDisplay: React.FC<OrgJsonDisplayProps> = ({
  count,
  fontColor,
}) => (
  <p
    style={{ color: fontColor }}
  >{`There are ${count} support orgs on Navigate`}</p>
)

export default OrgJsonDisplay
