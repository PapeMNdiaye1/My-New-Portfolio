import { React, useEffect, useState } from 'react';


const DesignPresentation = ({ ImageBack, parentCallback, Title, ImageDescription, IsImageVertical }) => {
    const onClickOnTab = () => {
        parentCallback()
    }
    // console.log(IsImageVertical);
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
                    <p>
                        <span>{Title}</span> <br /> {ImageDescription}
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
    const clickOnImage = (e) => {
        // let leftBar = document.querySelector('#LeftBare-container');
        // console.log(leftBar)
        // leftBar.backgroundImage = "red"
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
    }

    const callback = () => {
        // console.log('closeImage2');

        setPresentationDesign(PresentationDesign => false)
    }

    return (
        <div id='Design' className='.all'>
            <div id="design-title">
                <h1>{title}</h1>
            </div>
            {PresentationDesign && <DesignPresentation parentCallback={callback} ImageBack={TheImage} ImageDescription={ImageDescription} Title={ImageTitle} IsImageVertical={IsImageVertical} />}
            <div className='design-container'>
                <div onClick={clickOnImage} className="one-design-container vertical" title="1"><p>
                    hhhhhhh </p> </div>
                <div onClick={clickOnImage} className="one-design-container vertical" title="tttt2"><p>hggh</p></div>
                <div onClick={clickOnImage} className="one-design-container vertical" title="tttt3"><p>gggffgf</p></div>
                <div onClick={clickOnImage} className="one-design-container vertical" title="tttt4"><p>gggffgf</p></div>
                <div onClick={clickOnImage} className="one-design-container vertical" title="tttt5"><p>gggffgf</p></div>
                <div onClick={clickOnImage} className="one-design-container vertical" title="tttt6"><p>gggffgf</p></div>
                <div onClick={clickOnImage} className="one-design-container horizontal" title="tttt7"><p>gggffgf</p></div>
                <div onClick={clickOnImage} className="one-design-container vertical" title="tttt8"><p>gggffgf</p></div>
                <div onClick={clickOnImage} className="one-design-container horizontal" title="tttt9"><p>gggffgf</p></div>
                <div onClick={clickOnImage} className="one-design-container horizontal" title="tttt10"><p>gggffgf</p></div>
                <div onClick={clickOnImage} className="one-design-container vertical" title="tttt11"><p>gggffgf</p></div>
                <div onClick={clickOnImage} className="one-design-container vertical" title="tttt12"><p>gggffgf</p></div>
                <div onClick={clickOnImage} className="one-design-container vertical" title="tttt13"><p>gggffgf</p></div>
                <div onClick={clickOnImage} className="one-design-container horizontal" title="tttt14"><p>gggffgf</p></div>
                <div onClick={clickOnImage} className="one-design-container vertical" title="tttt14"><p>gggffgf</p></div>
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