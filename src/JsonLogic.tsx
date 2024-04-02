import React from 'react'

interface InjectedProps {
  count: number
}
interface JsonLogicProps {
  url: string
  jsonKey: string
  children: (props: InjectedProps) => React.ReactNode
}

const JsonLogic: React.FC<JsonLogicProps> = ({ url, jsonKey, children }) => {
  /* Complete functionality here */
}

export default JsonLogic
