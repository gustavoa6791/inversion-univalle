import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppInitial from '../containers/AppInitial.jsx'


const App = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={AppInitial} />
        </Switch>
    </BrowserRouter>


)

export default App;

