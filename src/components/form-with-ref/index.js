import { useRef } from 'react'
import { TextField }from '../text-input'

let count = 0

const useForm = function() {
    const formConfig = {}
    
    const getFormValue = () => {
        Object.keys(formConfig).reduce((acc, key) => ({
            ...acc,
            [key]: formConfig[key].current.value
        }), {})
    }

    const registerFormField = ({ 
        name,
        ...restProps
    }) => {
        const ref = useRef()
        formConfig[name] = ref
        return {
            ref,
            name,
            ...restProps
        }
    }

    return {
        registerFormField,
        getFormValue
    }
}

export const FormWithRef = () => {

    const {registerFormField, getFormValue} = useForm()

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('----Form Value----', { formValue: getFormValue() })
    }

    console.log(`----Rendering FormWithRef-----`, count++)

    return (
        <form onSubmit={handleSubmit}>
            <h2>Form with ref</h2>
            <TextField {...registerFormField({name: 'name', label: 'Name'})}/>
            <TextField {...registerFormField({name: 'age', label: 'Age'})}/>
             <TextField  {...registerFormField({name: 'organisation', label: 'Organisation'})}/>
        </form>
    )
}