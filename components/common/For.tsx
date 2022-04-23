import { Children, FC } from 'react'

interface ForProps {
  array: Array<any>
  RepeatElement: FC<any>
  // Children: ReactElement | HTMLElement
}

const For: FC<ForProps> = ({ array, RepeatElement }) => {
  return (
    <>
      {array.map((obj, index) => (
        <RepeatElement {...obj} key={index} />
      ))}
    </>
  )
}

export default For
