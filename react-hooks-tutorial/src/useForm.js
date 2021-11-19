import {useState} from "react";

export const useForm = initialValues => {
    const [values, setValues] = useState(initialValues);

    return [ 
        values, 
        e => { 
            setValues({
                ...values, //keeps the previous values over there
                [e.target.values]: e.target.values //based on the name of the field, the values are changed
            });
        }
    ];
};