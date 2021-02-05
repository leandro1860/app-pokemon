import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import Pokemons from './pages/pokemons/Pokemons';
import Types from './pages/types/Types';

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
