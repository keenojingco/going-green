import React from 'react';
import BoroughList from './BoroughList';
import Data from './DataComponent';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <BoroughList />
                    <Data />
                </div>
            </div>
        )
    }
}

export default App;
