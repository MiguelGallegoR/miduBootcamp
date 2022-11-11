import React, { useEffect, useState } from 'react';

export default function Suma({parameters}){
    const [addition, setAddition] = useState(null);
    /*
        const addition = useState(null);
        const addition = addition[0];
        const setAddition = addition[1];
    
    */
    const {parts} = parameters;
    const addParameters = () =>{
        console.log(parameters);
       let total = parts.reduce(function(acc, current) { return acc + current.exerciseCount}, 0);
        setAddition(total)
    }

    useEffect(()=>{
        addParameters();
    }, [parameters])

    return(<p> El resultado es : {addition}</p> )
}