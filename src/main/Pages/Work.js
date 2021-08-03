import { React, useState, useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import GeekBlog1 from '../Style/Image/Geek Blog - Google Chrome 11_07_2021 11_46_50.png';
import GeekBlog2 from '../Style/Image/Geek Blog - Google Chrome 11_07_2021 11_47_04.png';
import GeekBlog3 from '../Style/Image/Geek Blog - Google Chrome 11_07_2021 11_48_41.png';


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


const OneStuffsContainer = ({ theId, title, parentCallback, description, Images, gotALink, theLink }) => {

    console.log(theId);

    useEffect(() => {
        let stuff = document.querySelector(`#${theId}`)
        stuff.style.backgroundImage = `url(${Images[0]})`
    })

    return (
        <div key={theId} onClick={() => parentCallback(title, description, Images, gotALink, theLink)} className="stuffs_contain">
            <div className="stuffs">
                <div id={theId} className="stuffs_img"
                >
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
ps: le code est en open-source sur mon Github`} theLink={'https://geek--blog.herokuapp.com/SignUp'} Images={[GeekBlog1, GeekBlog2, GeekBlog3]} />
                <OneStuffsContainer parentCallback={clickOnWork} theId="Sy-Portfolio" title="Baba Sy Portfolio" gotALink={false} description="Ceci est le portfolio pour un artiste plasticien le site a une architecture simple comportent la biographie , présentation des oeuvres et présentation de l'atelier." theLink={'test'} Images={[
                    `https://previews.dropbox.com/p/thumb/ABMYGnWzy3OWkT8hiLyKHM0-o9eY85aFcDZiw_9HvrOZ6AORyMAygB6YtZPiCHnh85fMwC4hjPt3ODNVL4D4Xjms3RrdTlinGpCKwCQwWwLrStR4WgT0ZeCpG3e5fFSqFSF2W6z4mWGmm7QvO22oX8t_iecQ2MW4YdRWm2zbNIpmrfFRoD6NbrczN5KjCzRioLvqAZrWA_zQEeWe0t722R-G7UlN9M6OyKbbn9a4dnr-IYJpd_LmEcwRABX3_tf-C--4txZdCh12fmCkF6hNDhUw3YfbYqAJvZpFUVhvMGKutvFrG0MmGk_hAAGxKpM2d7lZkI9IHYZ6J2GQD4ANo2QqzSjpH3ClGmnh7Z30Fb-VIw/p.png?fv_content=true&size_mode=5`,
                    `https://previews.dropbox.com/p/thumb/ABNvbzaKlklUIErReznMTWaEKuzsfKIp9YoZwoqqczvNUJnVSysCQfvbfAzi79uEiAgvXg_q52NZQLQ16S2Floh4M5tQQ4vYoC1s0hiBpkEsFmtkewK6aQxkEurhKuPDrQmXESIhhCjs_cCBlfLZROgp_R0mwvw1S6lZYI2c6gKWoAXjYflMI_nUvrsb5vDSGosmpTN1vhzzTmTdDvlDmmDHv4NE3Yj93emYlktnzaHA5C62QiU5jYz7FFumHQOMOKTyi9mWgts-uViCOi2zMbOm3jWyLlT45gp-hdhhOpOb5VRmcDufAB3kfM36yL2apIkls0YOHT4AjLZNAtsyyr-1FV3GLdEvfUGMOlZAWuEZDR1K47C4T70nPnZLK_aGl-0zeJQmPYdl46cJNj1l-zOf5mtQR-88jYQbIpdwXHDm0A/p.png?size=2048x1536&size_mode=3`,
                    `https://previews.dropbox.com/p/thumb/ABOi2jtAnLaX3CCz1bmTMPmZCz9WZM6I0YOjqx3UhUVL7rZ1RXE8mXrqs9UbMNRarEqSnxI4K4DAoxKKMMbEPZWZ6Ynng2mFcXhNVNgMZjWDyxbLSq-sJ9ozRkXz432IhUZs4Qq8n0JLN6PorPfURTP1o3tvt-4eoYk9UYgtfNLOx1j6kR7rLDTTTHMkjfh82xDjFBJW6VKFGfzSoyb3qlYycrq93JRh9TSbakSYPWel9uq4zJGYPWe272UxlQdVYbpJDTYwaMObU5YjFCcA8snc8Q8KUZH9C6bN2oIa8PDfjkTo8mj4qugR8ghnB_57DMTU8Mj6Otv72n3ueMQhkEYe7fzd8X6UiMuJYqu40ON7tYtnxjkXA4VC4LlxMSRFA85IO1nPsKDvF04YQmGcxmD6E_LtYF8KU-xPNXyLLL1MBA/p.png?size=2048x1536&size_mode=3`,]} />
                <OneStuffsContainer parentCallback={clickOnWork} theId="Hacker-House" title="Hacker-House" gotALink={false} description='Ce project est toujour en production , la plateforme sera un lieu de partage pour les pogrameurs.' theLink={'test'} Images={[
                    `https://previews.dropbox.com/p/thumb/ABNa0pjCkoSpxY__55zCsgQhdY6rRdCHPaf3Kj-Qu0tqrPFy26LAh5C1w_arIMUWfpYQ_ciqgczA8_OPyl2ZWwEzAsHYl3j3hOjLOhiXPX4iBBwNdHymOKj4DmObrw68x8nP-7k3r_QriQZGP0e2aaW3wqC_a2EwDdxd2fvNEy09wBRZ6Ax48fyYnhVg5NoF_1EMzebblmlXo9RPW8WGWGcw20arkFcrOTqy3bWBfYbtJ5RbOuRYMS4oa7wzDXih_-MYPbtFlpATlwPQtIhIb1MCLEk8GTjzslUNshn_lwNOAT-QT6SwvoWPKx7YkV_C_LitBiDmpZ93veUZpvO1pa4a_Vs-OZbf9U72xxhR9soktg/p.jpeg?size=2048x1536&size_mode=3`,
                    `https://previews.dropbox.com/p/thumb/ABMI_yvHQO6MM4Z22Xqb2JGNoWwolejsX3g-KY5d2_eaEtmS8x9If2oYSB9IGDp6xeZT3fN7EaBtAX-hOCoEd2wK7iyhZwS842riZEz8Zn2oNP-0ZdL4e1tIagSyrazg2cKkcoKkX9ugZaG_Co6vnAmbSohDYtD08Q4fSad7P8wXYCb5IAhMIWJpxNFyuSqUoTh0a1W5h6DX6t1viXA47fryOVVkqKS1Yjl59gpb6NU0oFZPaZKP9IzXUIv7h0wXzthHQDqdfZ_dehzp3g9moMtyMsXrOM8p2Zjg5sQkeWCFMSXchtKvADdbnwyoqZ0DRvrUz4PBfi8UxLlZYIW149xih503mPTOcOH5lM-YfY7-XA/p.jpeg?fv_content=true&size_mode=5`,
                    `https://previews.dropbox.com/p/thumb/ABOPq9qVsJZTDo5XHiDg9SZ_ARpZatHrMAIW8xl43t69Yc4z4HEcp2zB293gAbbEbTplaozLs5NSCn6ydmuHNxjBREFln4zSUPdvuGSWD0kFqkVVAj9xk3vjSbGOgxReIP7QjRLEUzvzZrwn_Be4y7xlGDmFC80WnhPR_Xttpu0bTMb22-4WEw5kTduIYNqMMN5tgzF4n8Myy_emajsAS9uoLPuHYrjj9CDosSlZmR912YuPuDRQlLS4ovgBuOElkpaNjf_IGWnuHW8X_u-2RnuC6prbvO5tZtHLQY0718fmN6jPP7SbNcO7LaNwht3dGA2kfchyov-FjmAAyOfpMFwqEKx4-M_46p4OKq8KLcFIaA/p.jpeg?fv_content=true&size_mode=5`,]} />
                <OneStuffsContainer parentCallback={clickOnWork} theId="ffff4" title="Crysalide 3D" gotALink={false} description='description3' theLink={'test'} Images={['https://previews.dropbox.com/p/thumb/ABMYiCrlMOMlKIFHTu30rVq2Qlkf4IpkAvpgN02cuTv604idd-RQWyMG8ggdG-dPYrK3zh3ANh51ds7iJFVS2GFN6iM-EELc6UL9ED-fyWgbyZg4s9xM3RkWS4Wh_fkuWHiVplNUslIy6A3gg-Rl853UhzbP522xedr5Ri-eCVUbH41nQ12-ve1cNunfcmWHD0EpFkCojR3wbvtb9NIQ9luNod_xstcjZHeBlNN1EYodJXEjF23Ty5Qg7YLWrkYeLXZA30fHV4gPOCmJrZhrWchPTgPdiVsgm3cCFRHSKsEnpGp9VgJM6v7EyyAPAZ_kbaIXBhkb7gniVAy8x7OYnJTj0cr438fp-mNhxRhnmq4ChA/p.jpeg?size=2048x1536&size_mode=3']} />
                {/* <OneStuffsContainer parentCallback={clickOnWork} theId="ffff5" title="ffff5" gotALink={false} description='description4' theLink={'test'} Images={[]} />
                <OneStuffsContainer parentCallback={clickOnWork} theId="ffff6" title="ffff6" gotALink={false} description='description' theLink={'test'} Images={[]} /> */}
                {PresentationDesign && <WorkPresentation parentCallback={closeWorkPresentation} theTitle={theDesignPresentationTitle} theDescription={theDesignPresentationDescription} theImagesToPresentation={ImagesToPresentation} gotALinkOrNot={gotALinkOrNot} theLink={theLinkToSet} />}
            </div>
        </div >
    )
}

export default Work

