import React from 'react';

 const Players = (props) =>{

    // console.log('props players', props)
    console.log('props players', props.player)
    return(<div className="players">
        <h2>{props.player.name}</h2>
        <p> Country: {props.player.country}</p>
        <p> Searches: {props.player.searches}</p>
    </div>)
}

export default Players