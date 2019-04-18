import React from "react"

export interface EntryProps {
  id: string
}

export const Entry: React.FC<EntryProps> = ({ id, ...props }) => {
  return (
    <h1>Entry #{id}</h1>
  )
}