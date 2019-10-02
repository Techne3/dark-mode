import React from 'react';
import {useLocalStorage} from './useLocalStorage'
import {useState, useEffect} from 'react';


export const useDarkMode =(key,initialValue)=> {

    const [value, setValue] = useLocalStorage(key, initialValue);


    const handleChanges =(e) => {
        setValue(e)
    };

    useEffect(() => {
        if(value === true) {
            document.querySelector('body').classList.add('dark-mode')
        }else{
            document.querySelector('body').classList.remove('dark-mode')
        }
    },[value])



    return [value, setValue, handleChanges]


}



