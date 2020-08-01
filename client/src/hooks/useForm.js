import {useState} from 'react';

export const  useForm = (initialValues) => {
    const [values,setValues] = useState(initialValues);
    return  [
        values,
        ()=> {
            setValues({
                ...values
            })
        },
        console.log(initialValues)
    ]
}

