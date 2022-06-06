import { useState } from 'react'
import { TextField }from '../text-input'

let count = 0

export const FormWithState = () => {
    const [ formValue, setFormValue ]= useState({})

    const handleChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('----Form Value----', { formValue })
    }

    console.log(`----Rendering FormWithState-----`, count++)

    return (
        <form onSubmit={handleSubmit}>
            <h2>Form with state</h2>
            <TextField label="Name"
                    name="name"
                    value={formValue.name}
                    onChange={handleChange}
            />
            <TextField label="Age"
                    name="age"
                    value={formValue.age}
                    onChange={handleChange}
            />
             <TextField label="Organisation"
                    name="organisation"
                    value={formValue.organisation}
                    onChange={handleChange}
            />
        </form>
    )
}