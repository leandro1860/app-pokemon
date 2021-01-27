import React from 'react';
import MainTitle from './components/MainTitle/MainTitle';
import CharacterFinder from './components/characterFinder/CharacterFinder';
import ListItems from './components/listItems/ListItems';
import MainModal from './components/MainModal/MainModal';

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
