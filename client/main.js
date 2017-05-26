import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

const renderPlayers = (players)=> {
    return players.map((player)=> {
        return <p key={player._id}>{player.name} has {player.score} point(s).</p>
    });
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
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });


    Players.insert({
        name: 'Jasper',
        score: 3
    });
  


});