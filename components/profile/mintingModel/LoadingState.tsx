import { GridLoader } from 'react-spinners'
import { css } from '@emotion/react'

const style = {
  wrapper: `h-[20rem] w-[35rem] text-white bg-[#15202b] rounded-3xl p-10 flex flex-col items-center justify-center`,
  title: `font-semibold text-xl mb-6`,
}

const cssOverrideObj = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'white',
}

const LoadingState = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Minting in progress...</div>
      <GridLoader color={'#fff'} loading={true} cssOverride={cssOverrideObj} size={30} />
    </div>
  )
}

export default LoadingState
