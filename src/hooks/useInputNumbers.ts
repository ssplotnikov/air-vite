import { ChangeEvent, useState } from 'react'

export const useInputNumbers = (initialValue: number | string = '') => {
  const [value, setValue] = useState(initialValue)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    let finalValue: number
    Number.isNaN(parseInt(e.target.value))
      ? (finalValue = 0)
      : (finalValue = parseInt(e.target.value))

    return setValue(finalValue)
  }
  return { value, onChange }
}
