import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players, calculatePlayerPositions}  from './../imports/api/players';
import App        from './../imports/ui/App';
import Player     from './../imports/ui/Player';


Meteor.startup(()=> {
    Tracker.autorun(()=> {
        let players = Players.find({}, {sort: { score:-1, name:1 }}).fetch();
        let positionedPlayers = calculatePlayerPositions(players);
        let title = 'Score Keep App';
        let subTitle = 'This is the sub title';
        let jsx = (
            <div>
             
            </div>
        );
        ReactDOM.render(<App title={title} players={positionedPlayers}/>, document.getElementById('app'));
    });
});