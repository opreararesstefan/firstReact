import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                <h1>React Table</h1>
                <p>Add a character with a name and a job to the table.</p>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
                 <button><h5> <a href="https://github.com/opreararesstefan/firstReact">View source on Github</a></h5></button>
            </div>
        );
    }
}

export default App;
