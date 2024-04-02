import React from 'react'

interface ErrorDisplayProps {
  error: Error
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => (
  <h6 className="ErrorDisplay">
    {JSON.stringify(error, Object.getOwnPropertyNames(error))}
  </h6>
)

export default ErrorDisplay
