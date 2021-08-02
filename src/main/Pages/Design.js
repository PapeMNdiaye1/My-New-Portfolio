import { React, useEffect, useState } from 'react';


const DesignPresentation = ({ ImageBack, parentCallback, Title, ImageDescription, IsImageVertical }) => {
    const onClickOnTab = () => {
        parentCallback()
        let LeftBareContainer = document.querySelector('#LeftBare-container')
        LeftBareContainer.style.display = 'block';
    }
    return (
        <div className="design-presentation-container">
            <div className="design-container">
                {IsImageVertical ?
                    <div className="show-horizontal-image" style={
                        { backgroundImage: ImageBack }
                    }>
                    </div>
                    : <div className="show-vertical-image" style={
                        { backgroundImage: ImageBack }
                    }>
                    </div>}
                <div className="show-vertical-image-text">
                    <span>{Title}</span>
                    <p>
                        {ImageDescription}
                    </p>
                </div>
                <button onClick={onClickOnTab} className="close-design">
                    <ion-icon name="close-outline"></ion-icon>
                </button>
            </div>
        </div >
    )
}

function Design({ title }) {
    let [TheImage, setTheImage] = useState();
    let [PresentationDesign, setPresentationDesign] = useState(false);
    let [ImageTitle, setImageTitle] = useState('');
    let [ImageDescription, setImageDescription] = useState('');
    let [IsImageVertical, setIsImageVertical] = useState(true);
    let leftBar = document.querySelector('#tabs');
    console.log(leftBar)
    const clickOnImage = (e) => {
        let thImg = e.target;
        let theImageUrl = getComputedStyle(thImg).backgroundImage;
        setTheImage(TheImage => theImageUrl);
        console.log(theImageUrl);
        setPresentationDesign(PresentationDesign => true);
        setImageTitle(ImageTitle => thImg.title);
        setImageDescription(ImageDescription => thImg.childNodes[0].innerText);
        console.log(thImg.childNodes[0].innerText);
        console.log(thImg.classList[1]);
        if (thImg.classList[1] == 'vertical') {
            console.log('vertical');
            setIsImageVertical(IsImageVertical => false);
        } else {
            setIsImageVertical(IsImageVertical => true);
        }
        let LeftBareContainer = document.querySelector('#LeftBare-container')
        LeftBareContainer.style.display = 'none';
        console.log(LeftBareContainer);
    }

    const callback = () => {
        setPresentationDesign(PresentationDesign => false)
    }

    return (
        <div id='Design' className='.all'>
            <div id="design-title">
                <h1>{title}</h1>
            </div>
            {PresentationDesign && <DesignPresentation parentCallback={callback} ImageBack={TheImage} ImageDescription={ImageDescription} Title={ImageTitle} IsImageVertical={IsImageVertical} />}
            <div className='design-container'>
                <div onClick={clickOnImage} className="one-design-container vertical" title="In The Street"><p>Drawing in picture [ ‎27 ‎06 ‎2021]</p> </div>
                <div onClick={clickOnImage} className="one-design-container vertical" title="Anna"><p>Digital oil painting [07 ‎06 ‎2021]</p></div>
                <div onClick={clickOnImage} className="one-design-container vertical" title="In Jap"><p>Digital oil painting [‎19 ‎06 ‎2021]</p></div>
                <div onClick={clickOnImage} className="one-design-container vertical" title="Purge"><p>Compositing and montage [‎09 ‎06 ‎2021]</p></div>
                <div onClick={clickOnImage} className="one-design-container vertical" title="Pape"><p>Digital oil painting [27 ‎05 ‎2021]</p></div>
                <div onClick={clickOnImage} className="one-design-container vertical" title="Purge-2"><p>Compositing and montage [09 ‎06 ‎2021]</p></div>
                <div onClick={clickOnImage} className="one-design-container horizontal" title="Sacrifice"><p>Graf , Typography in black and with sacrifice [16 12 ‎2020]</p></div>
                <div onClick={clickOnImage} className="one-design-container vertical" title="Tow Size"><p>Compositing and montage [‎14 ‎06 ‎2021]</p></div>
                <div onClick={clickOnImage} className="one-design-container horizontal" title="Joker"><p>Graf , Typography [06 ‎12 ‎2020]</p></div>
                <div onClick={clickOnImage} className="one-design-container horizontal" title="Typography Nature"><p>Graf , Typography , Compositing and montage [20 ‎11 ‎2020]</p></div>
                <div onClick={clickOnImage} className="one-design-container vertical" title="Anna"><p>Digital oil painting [19 04 ‎2021]</p></div>
                <div onClick={clickOnImage} className="one-design-container vertical" title="Ina Makosi"><p>Digital oil painting [‎17 03 ‎2021]</p></div>
                <div onClick={clickOnImage} className="one-design-container vertical" title="Mor Head"><p>Compositing and montage [0‎2 08 ‎2021]</p></div>
                <div onClick={clickOnImage} className="one-design-container horizontal" title="Converse"><p>Collage [05 11 ‎2020]</p></div>
                <div onClick={clickOnImage} className="one-design-container vertical" title="In The Street"><p>Drawing in picture [18 07 ‎2021]</p></div>
            </div>
            <div className='network'>
                <div className="network_container">
                    <a href="https://github.com/PapeMNdiaye1" target="_blank">
                        <div className="network">
                            <ion-icon name="logo-github"></ion-icon>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/just.a.coder_/" target="_blank">
                        <div className="network">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/pape-momar-ndiaye-37b862199/" target="_blank">
                        <div className="network">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </div>
                    </a>

                    <a href="" target="_blank">
                        <div className="network">
                            <ion-icon name="logo-youtube"></ion-icon>
                        </div>
                    </a>
                    <a href="https://twitter.com/Ndiaye53287322" target="_blank">
                        <div className="network">
                            <ion-icon name="logo-tumblr"></ion-icon>
                        </div>
                    </a>
                </div>

                <div id="tel_gMail">
                    Mail: Pmomar44@gmail.com <br />
                    Tel: 77 727 86 55
                </div>
            </div>

        </div>
    )
}




export default Design