import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
    state = { 
        pageHeader: 'Naming Requests!'
    };

    componentDidMount() {
        console.log('did Mount');
    }
    componentWillUnmount() {
        console.log('did Unmount');
    }
    render() {
        return (
            <div className='App'>
                <Header message={this.state.pageHeader}/>
                <div>
                    {this.props.contests.map(contest => 
                        <ContestPreview {...contest}/>
                    )}
                </div>
            </div>
        );
    }
}

export default App;