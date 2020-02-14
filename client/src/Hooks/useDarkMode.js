import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage'; //instead of useState, you'll use useLoal storage

export const useDarkMode = (initialValue) =>{
    const[darkMode, setDarkMode] = useLocalStorage(initialValue);

    //useEffect purchase is to watch for dark mode
    useEffect(() => {
     if (darkMode === true){
         return document.querySelector('body').classList.add('dark-mode')
     }else{
         return document.querySelector('body').classList.remove('dark-mode')
     }

    }, [darkMode])

    return [darkMode, setDarkMode]// return => we want to get something
}