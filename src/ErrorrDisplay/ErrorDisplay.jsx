import React from 'react'

const ErrorDisplay = ({ error }) => (
  <h6 className="ErrorDisplay">
    {JSON.stringify(error, Object.getOwnPropertyNames(error))}
  </h6>
)

export default ErrorDisplay
