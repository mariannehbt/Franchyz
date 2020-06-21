import { useState } from 'react'

function useCheckboxChange(init) {
  const [checkbox, setCheckbox] = useState(init)

  const handleCheckboxChange = (e) => setCheckbox({
    ...checkbox,
    [e.currentTarget.name]: e.currentTarget.value
  })

  return [checkbox, handleCheckboxChange]
}

export default useCheckboxChange

