import React from 'react';
import { BrowserRouter, Route , Link  } from 'react-router-dom';


const PageOne = () => {
    return <Link >PageOne</Link>;
};

const PageTwo = () => {
    return <div> Page 2</div>;
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                <Route path="/" exact component = {PageOne} />
                <Route  path="/pagetwo"  component = {PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App; 