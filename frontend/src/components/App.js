import React from 'react';
import BoroughList from './BoroughList';
import BoroughData from './BoroughData';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <BoroughList />
                    <BoroughData />
                </div>
            </div>
        )
    }
}

export default App;
