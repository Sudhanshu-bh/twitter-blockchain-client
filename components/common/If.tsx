import * as React from 'react'

interface IfProps {
  condition: boolean
  children: any
}

function If({ condition, children }: IfProps) {
  return <>{condition && children}</>
}

export default If
