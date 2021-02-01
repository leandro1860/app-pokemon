import React from 'react';
import MainTitle from '../../components/MainTitle/MainTitle';
import CharacterFinder from '../../components/characterFinder/CharacterFinder';
import ListItems from '../../components/listItems/ListItems';
import MainModal from '../../components/MainModal/MainModal';

const Main = () => {
    return (
        <div className="flex flex-col justify-center h-full">
            <MainTitle />
            <CharacterFinder />
            <ListItems />
            <MainModal />
        </div>
    );
};

export default Main;
