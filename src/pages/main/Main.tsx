import React from 'react';
import MainTitle from '../../components/MainTitle/MainTitle';
import CharacterFinder from '../../components/characterFinder/CharacterFinder';
import ListItems from '../../components/listItems/ListItems';
import MainModal from '../../components/MainModal/MainModal';

const Main = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full background">
            <div>
                <MainTitle />
                <CharacterFinder />
                <ListItems />
                <MainModal />
            </div>
        </div>
    );
};

export default Main;
