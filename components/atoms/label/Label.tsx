import { LabelProps } from '@/types'
import React from 'react'

const Label = ({htmlFor, children, className} : LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={className}>
        {children}
    </label>
  )
}

export default Label
