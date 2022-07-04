import { useState } from "react"

export const useInputNumbers = (initialValue) => {
	const [value, setValue] = useState(initialValue)
	const onChange = (e) => {
	  let finalValue
	  Number.isNaN(parseInt(e.target.value)) ? (finalValue = 0) : (finalValue = parseInt(e.target.value))
	  return setValue(finalValue)
	}
  return {value, onChange}
}