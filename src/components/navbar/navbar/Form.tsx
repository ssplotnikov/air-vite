import React, { ChangeEvent, memo, useEffect } from 'react'
import { useInputNumbers } from '../../../hooks/useInputNumbers'
import { useAppDispatch } from '../../../hooks/useRedux'
import { setFilters } from '../../../store/reducers/flitersSlice'
import { Avia } from './Avia'
import { Price } from './Price'

let updateFilterList: any = {
  airline: [],
  minPrice: '',
  maxPrice: '',
  stops: [],
}

export const Form: React.FC<any> = memo(() => {
  const dispatch = useAppDispatch()
  const handleFilters = () => {
    dispatch(setFilters(updateFilterList))
  }
  const minPrice = useInputNumbers()
  const maxPrice = useInputNumbers()

  const onChangeAvias = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      updateFilterList.airline = [...updateFilterList.airline, e.target.value]
    } else {
      updateFilterList.airline.splice(updateFilterList.airline.indexOf(e.target.value), 1)
    }
  }
  useEffect(() => {
    updateFilterList.maxPrice = maxPrice.value
    updateFilterList.minPrice = minPrice.value
  }, [minPrice.value, maxPrice.value])

  return (
    <>
      <Price minPrice={minPrice} maxPrice={maxPrice} />
      <Avia onChangeAvias={onChangeAvias} />
      <div className='navbar__form-btn' onClick={handleFilters}>
        Search
      </div>
      {/* <div className='navbar__form-btn' onClick={resetAllFilters}>
        Reset
      </div> */}
    </>
  )
})
