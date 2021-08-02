import { React, useState, useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
ps: le code est en open-source sur mon Github`} theLink={'https://geek--blog.herokuapp.com/SignUp'} Images={["https://previews.dropbox.com/p/thumb/ABM5-sgid-GwgpImXkyytq_mQ3Kfjbre3S4zGkDi7neQcijfDMQDFLeoQvrQY4eDggqEns9gEbMM1H5ooRGi1ym11BcCVBWHVD9SASpPar5pW57KRqmr3Lwm3GjQmSqc4mEqNx8AHZedT9AG_sBjzH_jZJK1bswl4vFJR8JKdrl91zpcCmaV0d3_aEZbJaH5h5UPTF6_8V84zQ0rI5_19QKWgJwRakeFHI9Rz6RjRXLnQNMqkxN4_gpKXIlQS5H7loYMFAlZa3bF02ZNb8AL-c2I2ymcpMuv20ApDWG9h9mGELCFMXb5TpyW34LSumjX-lOfosIZD3RRdTRnSvdyAgNK6idbc1Bfz9aCmPal53eEuQ/p.png?fv_content=true&size_mode=5",
                        `https://previews.dropbox.com/p/thumb/ABN4o936XFy8FmJ6yjADpPT2HVPKdNFqkbbN0Gbj4kjs49-y6jVXUQyqa92ruLfqOwjA20Z5Oa2s3INCCwoGEGSqWzCmuZ1U06a9y1cq0gq--b4DtOFgmUlTPKPFT1vSZjaV9GhY5zPqTZ5tNve3qJS3EojbXfOJ7ERvCAR7bHBBHSscL66CdZK3vBOwo5f7E1xCDE7hL8RJmJvgRonFJNdcMD8-tnM17GH-bZfQ2XvwQmRWmyRagIMmE73f36B-v2YBLkRMwo6tb7NLIKAZhFwUs9eks99Dmb7n46PiJMJA5PxWfkJdpAtCSWz2ZDfQp9TBMcnNK-LDTuIrp1KZzTOV4Ipb_HOkpyXh6AH3zrSOAw/p.png?fv_content=true&size_mode=5`,
                        `https://previews.dropbox.com/p/thumb/ABMdzXJHJoLSPJxIxB7RM3_6T6mSmoJNGMWP8kgCp3hWvdRvoIkOX2KfyJYxBGAyobDc-j8dBQOfwZmELWZ1ncdLc61S1L16mgqAA_btaOSepGCvOoOalN_X2zzYhzLW1pZtuDBDGxvSv2NniRiwJDskSJCL-vF64PR6mwRk4Y5qM5ZerDWUr1uDxbKx9v9k_Mo7XvEdVwxvaXUgPW7Qz8Zd-YEcRDr7pyKkLD1nZ2u1Phs1sQMfmSAVhP526m2ww2OccDV6ekGZ5XDza1DhPrlr9lAPL7T7mxktq78chyYvgguHwVqYz8r3U6hZtIY9K0xeZ0FyB357e0F8U63hSQ7_HHYX85uLwwxNoJLXhGxRZA/p.png?fv_content=true&size_mode=5`,
                        `https://previews.dropbox.com/p/thumb/ABNXxn0Xy-hyfIjRkWpanxMTLdU_H6ARpalSS_jyQiRoMssaQU8hl_Lhl7usjLhIFwU2rxW_GvKyWhrNNlgNli28ApWH_ufd39gYg7DkvV6pCes2VuFeqAymC8uSrRIlFrC4Q8-oXKanUZ9906ACugF_hzp2KWIZ-0ZvHRObA0jBfWWeCfkkbDNF7UB2tYphcnlVZF08xc_Ywonu-1sgJwcExeAkU678rn-wshsK2OoajuNSpnXeFiaAz71Bh7URKs8aEiMzl0bj3D_9w91lIZt5TQAA2z_y4jotUXT54KxkZ557p1T7U_EpUmHJh2f5iVaEqm_9yatzalfB-YUIOfIZcMFrfILeU3rzKQTyiQE2Sw/p.png?fv_content=true&size_mode=5`,
                        'https://previews.dropbox.com/p/thumb/ABMp5PPVnPwHPp13ZAxw3vRyjlNk-TPlkSKOS5mv1Ze62HFRRsM90nOmIHH1fbLkqk-TgbYjl1YAxjny1FGNwxNq3Eg2J-CqpQcPMurMuJYKNNWGBtHghPuCgMdwHjvHjAJjZjMKAR7On8kGZR7FGryad1buwGi9II6uOzVjDiBS-M6ZMBf41tnRTPLQ5gokpIaySm6fBGRPCxGVn2lKgX7XkwnSHqZXEpS6qTBPN8j5h2V5IMAvbS6h-bBTjOMweZkqgrsjwpgrQjef5z63-5HSts7Ei9mY7gCACZhbY4NIsRDDuCKAE0yw_QWdovpJ4seocOLrMs6NBOkaaCL0o05S_f9s1xO39NSegQ1mhJgzdA/p.png?size=2048x1536&size_mode=3']} />
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

