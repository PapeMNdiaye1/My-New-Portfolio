import { React, useState, useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import GeekBlog3 from '../Style/Image/Geek Blog - 3.png';
import GeekBlog2 from '../Style/Image/Geek Blog - 2.png';
import GeekBlog1 from '../Style/Image/Geek Blog - 1.png';
import GeekBlog4 from '../Style/Image/Geek Blog - 4.png';
import GeekBlog5 from '../Style/Image/Geek Blog - 5.png';

import Hacker1 from '../Style/Image/Hacker House - 1.jpg';
import Hacker2 from '../Style/Image/Hacker House - 2.jpg';
import Hacker3 from '../Style/Image/Hacker-House - 3.jpg';
import Hacker4 from '../Style/Image/Hacker House - 4.jpg';
import Hacker5 from '../Style/Image/Hacker House - 5.jpg';

import BabaSy1 from '../Style/Image/Baba Sy - 1.png';
import BabaSy2 from '../Style/Image/Baba Sy - 2.png';
import BabaSy3 from '../Style/Image/Baba Sy - 3.png';
import BabaSy4 from '../Style/Image/Baba Sy - 4.png';

// import Hacker2 from '../Style/Image/Hacker House - 2.jpg';
// import Hacker3 from '../Style/Image/Hacker-House - 3.jpg';
// import Hacker4 from '../Style/Image/Hacker House - 4.jpg';
// import Hacker5 from '../Style/Image/Hacker House - 5.jpg';

import Chrysalide from '../Style/Image/No-Image-min.jpg';



const WorkPresentation = ({ parentCallback, theTitle, theDescription, theImagesToPresentation, gotALinkOrNot, theLink }) => {
    console.log(gotALinkOrNot)

    return (
        <div className='stuffs-presentation-container'>
            <div className="stuffs-presentation">
                <div onClick={parentCallback} className='close-stuffs-presentation'>
                    <ion-icon name="close-outline"></ion-icon>
                </div>
                <div className="stuffs-title">
                    <h2>{theTitle}</h2>
                </div>
                <Carousel className='Carousel-container'>
                    {theImagesToPresentation.map(image => <div>
                        <img src={image} />
                    </div>)}
                </Carousel>
                <div className="container2">
                    <div className='web-presentation-text'>
                        <p>
                            {theDescription}
                        </p>
                    </div>
                    <div className="link-container">
                        {gotALinkOrNot ?
                            <div className="link">
                                <a href={theLink} target="_blank">
                                    Lien Du Site
                                </a>
                            </div> :
                            <div className="no-link">
                                <p>
                                    En Production
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


const OneStuffsContainer = ({ theId, title, parentCallback, description, Images0, Images, gotALink, theLink }) => {
    // console.log(Images0)

    // useEffect(() => {
    //     let stuff = document.querySelector(`#${theId}`)
    // })

    return (
        <div key={theId} onClick={() => parentCallback(title, description, Images, gotALink, theLink)} className="stuffs_contain">
            <div className="stuffs">
                <div id={theId} className="stuffs_img"
                >
                    <img src={Images[0]} width='100%' />
                </div>
                <h2 className="stuffs_title">{title}</h2>
            </div>
        </div>
    )
}

const Work = () => {

    let [PresentationDesign, setPresentationDesign] = useState(false);
    let [theDesignPresentationTitle, setTheDesignPresentationTitle] = useState('');
    let [theDesignPresentationDescription, setTheDesignPresentationDescription] = useState('');
    let [theLinkToSet, setTheLink] = useState('');
    let [ImagesToPresentation, setImagesToPresentation] = useState([]);
    let [gotALinkOrNot, setGotALinkOrNot] = useState();

    const clickOnWork = (title, description, Images, gotALink, theLink) => {
        setPresentationDesign(PresentationDesign => true)
        setTheDesignPresentationTitle(theDesignPresentationTitle => title)
        setTheLink(theLinkToSet => theLink)
        setTheDesignPresentationDescription(theDesignPresentationDescription => description)
        setImagesToPresentation(ImagesToPresentation => Images)
        setGotALinkOrNot(gotALinkOrNot => gotALink)
        let LeftBareContainer = document.querySelector('#LeftBare-container')
        LeftBareContainer.style.display = 'none';
    }

    const closeWorkPresentation = () => {
        setPresentationDesign(PresentationDesign => false)
        let LeftBareContainer = document.querySelector('#LeftBare-container')
        LeftBareContainer.style.display = 'block';
    }

    return (
        <div id='Work' className='.all'>
            <div id="work_title">
                <h1>Web</h1>
            </div>

            <div className="web_work ">
                <OneStuffsContainer parentCallback={clickOnWork} theId="Geek-Blog" title="Geek Blog" gotALink={true}
                    description={`Cette platform est mon premier projet M.E.R.N. Il s'agit d'un réseau social ou il est possible de fair des posts de comanter des posts et de chater avec des amis.
ps: le code est en open-source sur mon Github`} theLink={'https://geek--blog.herokuapp.com/SignUp'} Images0={GeekBlog1} Images={[GeekBlog1, GeekBlog2, GeekBlog3, GeekBlog4, GeekBlog5]} />
                <OneStuffsContainer parentCallback={clickOnWork} theId="Sy-Portfolio" title="Baba Sy Portfolio" gotALink={false} description="Ceci est le portfolio pour un artiste plasticien le site a une architecture simple comportent la biographie , présentation des oeuvres et présentation de l'atelier." theLink={'test'} Images={[BabaSy1, BabaSy2, BabaSy3, BabaSy4]} />
                <OneStuffsContainer parentCallback={clickOnWork} theId="Hacker-House" title="Hacker-House" gotALink={false} description='Ce project est toujour en production , la plateforme sera un lieu de partage pour les pogrameurs.' theLink={'test'} Images={[Hacker1, Hacker2, Hacker3, Hacker4, Hacker5]} />
                <OneStuffsContainer parentCallback={clickOnWork} theId="Chrysalide3D" title="Chrysalide3D" gotALink={false} description='Ce project est toujour en production' theLink={'test'} Images={[Chrysalide]} />

                {PresentationDesign && <WorkPresentation parentCallback={closeWorkPresentation} theTitle={theDesignPresentationTitle} theDescription={theDesignPresentationDescription} theImagesToPresentation={ImagesToPresentation} gotALinkOrNot={gotALinkOrNot} theLink={theLinkToSet} />}
            </div>
        </div >
    )
}

export default Work

