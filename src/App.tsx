import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import Pokemons from './pages/pokemons/Pokemons';
import Abilities from './pages/abilities/Abilities';
import Locations from './pages/locations/Locations';
import Types from './pages/types/Types';

const App = () => {
    return (
        <Router>
            <div className="h-screen">
                <Header />
                <Switch>
                    <Route path="/pokemons">
                        <Pokemons />
                    </Route>
                    <Route path="/abilities">
                        <Abilities />
                    </Route>
                    <Route path="/locations">
                        <Locations />
                    </Route>
                    <Route path="/types">
                        <Types />
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
