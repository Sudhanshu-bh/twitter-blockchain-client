import { Children, FC } from 'react'

interface ForProps {
  array: Array<any>
  RepeatElement: FC<any>
  // Children: ReactElement | HTMLElement
}

const For: FC<ForProps> = ({ array, RepeatElement }) => {
  if (array == null || array == undefined) {
    console.error('Error: Invalid value received for array in "For" component.')
    return <></>
  }

  return (
    <>
      {array.map((obj, index) => (
        <RepeatElement {...obj} key={index} />
      ))}
    </>
  )
}

export default For
