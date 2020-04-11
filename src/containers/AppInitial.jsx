
import React from 'react'
import Inicial from '../components/Inicial.jsx'
import '../assets/styles/App.scss'
import Header from '../components/Header.jsx';


const AppInitial = () => {
    return (
        <div>
            <Header/>
           <Inicial/>
        </div>
    );
}

export default AppInitial;