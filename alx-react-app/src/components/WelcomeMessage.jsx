import React from 'react';
import WelcomeMessage from './WelcomeMessage';

function WelcomeMessage() {
    return (
        <div>
            <h1>Hello everyone, I am learning React at ALX!</h1>
            <p>This is a simple JSX component</p>
            <p>I am learning about JSX!</p>
        </div>
    );
}

function App() {
    return(
        <div className="App">
                <WelcomeMessage />    
        </div>
    );
}
export default App;
