import React from 'react';
import {useLocalStorage} from './useLocalStorage'
import {useState, useEffect} from 'react';


export const useDarkMode =(key,initialValue)=> {

    const [value, setValue] = useLocalStorage(key, initialValue);


    useEffect(() => {
        if(value) {
            document.body.classList.add('dark-mode')
        }else{
            document.body.classList.remove('dark-mode')
        }
    },[value])




    return [value, setValue]


}



