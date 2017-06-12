import React from 'react';

import TitleBar   from './TitleBar';
import AddPlayer  from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends React.Component {
    render () {
        return (
            <div>
                <TitleBar title={this.props.title}/>
                {/** Render Add Player here. **/}
                <PlayerList players={this.props.players}/>
                <AddPlayer/>
            </div>
        );   
    }
}

// Required PropTypes
App.propTypes = {
    title: React.PropTypes.string.isRequired,
    plyers: React.PropTypes.array.isRequired,
};

