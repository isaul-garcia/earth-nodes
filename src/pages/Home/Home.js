import React from 'react';
import { MyCanvas, Info } from '../../components';
import { PlaceContainer, PlaceWrapper } from '../../globalStyles';

const Home = () => {
    return (
        <>
            <PlaceContainer>
                <PlaceWrapper>
                    <Info />
                    <MyCanvas />
                </PlaceWrapper>
            </PlaceContainer>
        </>
    )
}

export default Home;