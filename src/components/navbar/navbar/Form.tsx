import React, { ChangeEvent, useEffect } from 'react'
import { useInputNumbers } from '../../../hooks/useInputNumbers'
import { useAppDispatch } from '../../../hooks/useRedux'
import { resetFilters, setFilters } from '../../../store/reducers/flitersSlice'
import { Avia } from './Avia'
import { Filter } from './Filter'
import { Price } from './Price'

let updateFilterList: any = {
  airline: [],
  minPrice: '',
  maxPrice: '',
  stops: [],
}
export const Form: React.FC = () => {
  const dispatch = useAppDispatch()

  const handleFilters = () => {
    dispatch(setFilters(updateFilterList))
    console.log('updateFilterList after submitting', updateFilterList)
  }
  const minPrice = useInputNumbers()
  const maxPrice = useInputNumbers()

  const onChangeAvias = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      updateFilterList.airline = [...updateFilterList.airline, e.target.value]
      console.log('Добавил: ', updateFilterList.airline)
    } else {
      updateFilterList.airline.splice(updateFilterList.airline.indexOf(e.target.value), 1)
      console.log('Удалил: ', updateFilterList.airline)
    }
  }
  useEffect(() => {
    updateFilterList.maxPrice = maxPrice.value
    updateFilterList.minPrice = minPrice.value
  }, [minPrice.value, maxPrice.value])

  return (
    <>
      <Filter />
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
}
