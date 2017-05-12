import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

Tracker.autorun(()=> {
   console.log(Players.find({}).fetch());
});

console.log(Players.find({}).fetch());

const players = [{
        _id: '1',
        name: 'Jules',
        score: 99
    },{
        _id: '2',
        name: 'Corey',
        score: -1
    }, {
        _id: '3',
        name: 'Jason',
        score: -12
    }
];

const renderPlayers = (players)=> {
    return players.map((player)=> {
        return <p key={player._id}>{player.name} has {player.score} point(s).</p>
    });
};

Meteor.startup(()=> {
    let name = 'App'
    let title = 'Score Keep';
    let jsx = (
        <div>
            <h1>{title}</h1>
            <p>Hello {name}</p>
            <p>This is my second P</p>
            {renderPlayers(players)}
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
});