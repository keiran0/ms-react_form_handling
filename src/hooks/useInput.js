import { useState } from "react"

//before outsourcing the 
export function useInput(defaultValue, validationFn){

    const [enteredValue, setEnteredValue] = useState(defaultValue)
    const [didEdit, setDidEdit] = useState()

    const valueIsValid = validationFn(enteredValue)

    function handleInputChange(event){
        setEnteredValue(event.target.value)
        setDidEdit(false);   
    }
    
    function handleInputBlur(){
        setDidEdit(true)
    }

    return{
        value: enteredValue,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !valueIsValid
    }
}