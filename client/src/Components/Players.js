import React from 'react';

 const Players = (props) =>{

    // console.log('props players', props)
    console.log('hello there', props.player.name)
    return(<div>
        <h2>{props.player.name}</h2>
    </div>)
}

export default Players