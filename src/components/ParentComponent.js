import React,{useEffect, useState} from 'react';
import Homepage from './Homepage';
import NavBar from './NavBar';
function ParentComponent(){
    const [champions, setChampions]=([])

    useEffect(()=>{
        fetch('http://localhost:3001/data')
        .then(resp => resp.json)
        .then(championJson => setChampions(championJson))
    },[setChampions])
    

console.log('get some bitches')
    return (
        <>
        <NavBar/>
        <Homepage champions={champions}/>
        </>
    )
}
export default ParentComponent;