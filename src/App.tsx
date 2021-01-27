import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainTitle from './components/MainTitle/MainTitle';
import CharacterFinder from './components/characterFinder/CharacterFinder';
import ListItems from './components/listItems/ListItems';
import MainModal from './components/MainModal/MainModal';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/pokedex">
                        <div>Pokedex</div>
                    </Route>
                    <Route path="/abilities">
                        <div>abilities</div>
                    </Route>
                    <Route path="/locations">
                        <div>locations</div>
                    </Route>
                    <Route path="/types">
                        <div>types</div>
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
