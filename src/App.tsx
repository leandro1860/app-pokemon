import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import Pokemons from './pages/pokemons/Pokemons';
import Types from './pages/types/Types';

const App = () => {
    return (
        <Router>
            <div className="background">
                <Header />
                <Switch>
                    <Route path="/pokemons">
                        <Pokemons />
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
