import React, { useState, useEffect } from 'react'
import ErrorDisplay from '../ErrorrDisplay/ErrorDisplay.tsx'
import LoadinDots from '../LoadinDots/LoadinDots.tsx'
import ClinicJsonDisplay from './ClinicJsonDisplay.tsx'

import { fontColorType } from '../types'

interface ClinicJsonLogicprops {
  fontColor: fontColorType
}

const ClinicJsonLogic: React.FC<ClinicJsonLogicprops> = ({ fontColor }) => {
  const [count, setCount] = useState<null | number>(null)
  const [fetchError, setFetchError] = useState<null | Error>(null)

  useEffect(() => {
    fetch(
      'https://abortionfinder-staging.s3.amazonaws.com/api/abortion_clinics_v3.json'
    )
      .then((result) => result.json())
      .then((json) => setCount(Object.keys(json['clinics']).length))
      .catch((error) => setFetchError(error))
  }, [])

  if (fetchError) return <ErrorDisplay error={fetchError} />
  if (count === null) return <LoadinDots />

  return <ClinicJsonDisplay count={count} fontColor={fontColor} />
}

export default ClinicJsonLogic
