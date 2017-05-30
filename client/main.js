import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

const renderPlayers = (players)=> {
    return players.map((player)=> {
        return (
            /* JSX below */
            <p key={player._id}>
                {player.name} has {player.score} point(s).
                <button onClick={()=> Players.update({_id : player._id}, {$inc: {score:1} })}>+1</button>
                <button onClick={()=> Players.update({_id : player._id}, {$inc: {score:-1} })}>-1</button>
                <button onClick={()=> Players.remove({_id : player._id})}>X</button>
            </p>
        );
    });
};

const handleSubmit = (e)=> {
    let playerName = e.target.playerName.value;
    // console.log(playerName);
    e.preventDefault();

    if (playerName) {
        e.target.playerName.value = "";
        Players.insert({
            name: playerName,
            score: 0
        });
  
    }
};

Meteor.startup(()=> {

    Tracker.autorun(()=> {
        let players = Players.find({}).fetch();
        let name = 'App'
        let title = 'Score Keep';
        let jsx = (
            <div>
                <h1>{title}</h1>
                <p>Hello {name}</p>
                <p>This is my second P</p>
                {renderPlayers(players)}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="Player name"/>
                    <button type="">Add Player</button>
                </form>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});