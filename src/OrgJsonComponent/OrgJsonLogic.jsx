import React, { useState, useEffect } from 'react'
import ErrorDisplay from '../ErrorrDisplay/ErrorDisplay.tsx'
import LoadinDots from '../LoadinDots/LoadinDots.tsx'
import OrgJsonDisplay from './OrgJsonDisplay.tsx'

const OrgJsonLogic = ({ fontColor }) => {
  const [count, setCount] = useState(null)
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    fetch(
      'https://abortionfinder-staging.s3.amazonaws.com/api/support_orgs_v3.json'
    )
      .then((result) => result.json())
      .then((json) => setCount(Object.keys(json['support_orgs']).length))
      .catch((error) => setFetchError(error))
  }, [])

  if (fetchError) return <ErrorDisplay error={fetchError} />
  if (count === null) return <LoadinDots />

  return <OrgJsonDisplay count={count} fontColor={fontColor} />
}

export default OrgJsonLogic
