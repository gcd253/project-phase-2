import React,{useEffect, useState} from 'react';
import Homepage from './Homepage';
import NavBar from './NavBar';
function ParentComponent(){
    const [champions, setChampions]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3001/data')
        .then(resp => resp.json())
        .then(championJson => setChampions(championJson))
    },[])
    

    
    return (
        <>
        <NavBar/>
        <Homepage champions={champions}/>
        </>
    )
}
export default ParentComponent;