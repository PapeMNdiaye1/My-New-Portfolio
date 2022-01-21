import { React, useEffect, useState } from 'react'
let Tabs = [];

const Tab = ({ theClass, icon, name, parentCallback }) => {


    const onMouseOverTab = (e) => {
        let tab = e.target
        Tabs.forEach(tab => {
            tab.classList.remove('skills-activeTag')
        });
        tab.classList.add('skills-activeTag')
    }

    const onMouseOutTab = (e) => {
        e.stopPropagation();
        Tabs.forEach(tab => {
            tab.classList.remove('skills-activeTag')
        });
    }
    const onClickOnTab = (e) => {

        let tab = e.target

        if (typeof tab === 'object') {
            Tabs.forEach(tab => {
                tab.classList.remove('skills_selected')
            });
            tab.classList.add('skills_selected')
            parentCallback(tab.childNodes[1].innerText)
        }
    }

    return (
        <div
            onMouseOver={onMouseOverTab}
            onMouseOut={onMouseOutTab}
            onClick={onClickOnTab}
            className={theClass}>
            {icon}
            <h1>{name}</h1>
        </div>
    )
}

const Skills = () => {

    const [theSkills, setTheSkills] = useState('javaScript')
    const callback = (Tab) => {
        setTheSkills(Tab)
        changeTheTab(theSkills)
    }
    const changeTheTab = (theNewTab) => {
        switch (theNewTab) {
            case "node.js": return (<div
                style={{
                    gridRowStart: '3'
                }} className='onSkillsInfos'>
                <h2>
                    Node
                </h2 >
                <p>Le Js étant mon langage de prédilection il était normal que je fasse du node en back-end. Mes projets les plus poussent avec Node sont les plateformes Hackeur-House et Geek-Blog.</p>
            </div>);
            case "php": return (<div style={{
                gridRowStart: '2'
            }} className='onSkillsInfos'><h2>php</h2> <p>Le PHP est un langage que je peux utiliser cependant je maitrise parfaitement sa syntaxe, il est tres populaire dans le milieu du fait de sa stabilité.</p></div>);
            case "javaScript": return (<div style={{
                gridRowStart: '1'
            }} className='onSkillsInfos'><h2>javaScript</h2> <p>
                C'est mon premier langage et celui avec lequel je suis le plus à laise, sa maitrise m'offre une liberte total dans la dynamisation de mes pages web.
                Le JavaScript est un langage de programmation qui permet d’implémenter des mécanismes complexes sur une page.</p></div>);
            case "react": return (<div style={{
                gridRowStart: '4'
            }} className='onSkillsInfos'><h2>react</h2> <p>Apres avoir eu suffisamment d'experience avec L'environnement Js, j'ai décidé de parfaire mon frontend en apprenant un framework.
                React fut le choix le plus judicieux du fait de sa stabilité et de la communauté autour. J'ai réalisé de nombreux projets en React parmis les quels ce portfolio.</p></div>);
            case "git": return (<div style={{
                gridRowStart: '5'
            }} className='onSkillsInfos'><h2>git</h2> <p>C'est un indispensable pour n'importe quelle projet individuel ou en equipe. C'est un protocole permettant de suivre les modifications dans n'importe quel ensemble de fichiers,
                généralement utilisé pour coordonner le travail entre les programmeurs développant en collaboration le code source d'un
                logiciel ou d'une platforme.
                </p></div>);
            case "html": return (<div style={{
                gridRowStart: '6'
            }} className='onSkillsInfos'><h2>html</h2> <p>Ce fut ma porte d'entrée dans le monde du développement. C'est l'ossature de toute plateforme web.</p></div>);
            case "css": return (<div style={{
                gridRowStart: '8'
            }} className='onSkillsInfos'><h2>css</h2> <p>Mon experience en tant que designer me permet de pousser le langage à son plein potentiel. J'utilise surtout le préprocesseur Sass.</p></div>);
            case "adobe": return (<div style={{
                gridRowStart: '9'
            }} className='onSkillsInfos'><h2>adobe</h2> <p>Les logiciels de la suite adobe sont mes principaux outils de design. J'utilise presque quotidiennement Photoshop Illustrator et adobe Xd </p></div>);
        }
    }

    useEffect(() => {
        Tabs = document.querySelectorAll('.skills');
        console.log(Tabs[0].getBoundingClientRect())

    })

    return (
        <div id='Skills' className='.all'>
            <div id="skills_navbar">
                <Tab parentCallback={callback} theClass='skills skills_selected javaScript' icon={<i class="fab fa-js"></i>} name='javaScript' />
                <Tab parentCallback={callback} theClass='skills php' icon={<i class="fab fa-php"></i>} name='php' />
                <Tab parentCallback={callback} theClass='skills nodejs' icon={<i class="fab fa-node-js"></i>} name='node.js' />
                <Tab parentCallback={callback} theClass='skills react' icon={<i class="fab fa-react"></i>} name='react' />
                <Tab parentCallback={callback} theClass='skills git' icon={<i class="fab fa-git-alt"></i>} name='git' />
                <Tab parentCallback={callback} theClass='skills html' icon={<i class="fab fa-html5"></i>} name='html' />
                <Tab parentCallback={callback} theClass='skills css' icon={<i class="fab fa-css3"></i>} name='css' />
                <Tab parentCallback={callback} theClass='skills adobe' icon={<i class="fab fa-adobe"></i>} name='adobe' />
            </div>
            <div id='skills-presentation'>
                {changeTheTab(theSkills)}
            </div>

        </div>
    )
}



export default Skills