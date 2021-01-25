import React from 'react';
import MainTitle from './components/MainTitle';
import CharacterFinder from './components/CharacterFinder';
import ListItems from './components/ListItems';
import MainModal from './components/MainModal';

const App = () => {
    return (
        <div>
            <MainTitle />
            <CharacterFinder />
            <ListItems />
            <MainModal />
        </div>
    );
};

export default App;
