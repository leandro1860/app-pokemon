import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Pokemons from './pages/pokemons';
import Types from './pages/types';
import Main from './pages/main';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <Router>
            <div className="h-full flex flex-col">
                <div className="flex-none">
                    <Header />
                </div>
                <div className="flex-grow pt-20 ">
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
                <div className="flex-none">
                    <Footer />
                </div>
            </div>
        </Router>
    );
};

export default App;
