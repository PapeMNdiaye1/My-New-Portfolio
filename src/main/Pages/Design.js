import React from 'react'





function Design({ title }) {
    return (
        <div id='Design' className='.all'>
            <div id="design-title">
                <h1>{title}</h1>
            </div>
            <div className='design-container'>
                <div className="one-design-container"></div>
                <div className="one-design-container"></div>
                <div className="one-design-container"></div>
                <div className="one-design-container"></div>
                <div className="one-design-container"></div>
                <div className="one-design-container"></div>
                <div className="one-design-container"></div>
                <div className="one-design-container"></div>
                <div className="one-design-container"></div>
                <div className="one-design-container"></div>
                <div className="one-design-container"></div>
                <div className="one-design-container"></div>
                <div className="one-design-container"></div>
                <div className="one-design-container"></div>
            </div>
            <div className='network' >

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