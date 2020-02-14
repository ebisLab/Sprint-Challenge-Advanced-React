import React from 'react';
import {useDarkMode} from '../Hooks/useDarkMode'

 const Players = (props) =>{

    // console.log('props players', props)
    console.log('props players', props.player)
    return(<div className="players">
        <div className="heart"></div>
        <h2>{props.player.name}</h2>
        <p> Country: {props.player.country}</p>
        <p> Searches: {props.player.searches}</p>
        
    </div>)
}

export default Players