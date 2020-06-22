import { useState } from 'react'

const useCheckboxChange = () => {
  const [checkbox, setCheckbox] = useState({lol: 'dwd'})

  const handleCheckboxChange = (e, yolo) => {
    console.log(checkbox, yolo)
    
  setCheckbox({
    ...checkbox,
    [e.currentTarget.name]: e.currentTarget.checked
  })}

  return [checkbox, handleCheckboxChange]
}

export default useCheckboxChange

