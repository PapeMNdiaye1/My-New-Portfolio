import React, { Fragment, useState } from 'react'
import LeftBare from './LeftBare'
import Intro from './Pages/Intro'
import Design from './Pages/Design'
import Work from './Pages/Work'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'


function Home() {



    const [tabToShow, setTabToShow] = useState('Accueil')

    const changeTab = (newTab) => {
        setTabToShow(newTab)
        changeTheTab(tabToShow)
    }

    const changeTheTab = (theNewTab) => {
        switch (theNewTab) {
            case "Accueil": return <Intro title='Pape Momar Ndiaye ' />;
            case "Design": return <Design title='Design' />;
            case "Web": return <Work />;
            case "Skills": return <Skills />;
            case "Contact": return <Contact />;
        }
    }

    return (
        <Fragment>
            <LeftBare onChangeTab={changeTab} />
            {/* ############################################### */}
            <div id='home-container'>
                {changeTheTab(tabToShow)}
            </div>
        </Fragment>
    )
}




export default Home