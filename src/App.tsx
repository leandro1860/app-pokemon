import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainTitle from './components/MainTitle/MainTitle';
import CharacterFinder from './components/characterFinder/CharacterFinder';
import ListItems from './components/listItems/ListItems';
import MainModal from './components/MainModal/MainModal';
import Pokemons from './pages/pokemons/Pokemons';
import Abilities from './pages/abilities/Abilities';
import Locations from './pages/locations/Locations';
import Types from './pages/types/Types';

const App = () => {
    return (
        <Router>
            <div className="w-full h-full">
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
                        <MainTitle />
                        <CharacterFinder />
                        <ListItems />
                        <MainModal />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
