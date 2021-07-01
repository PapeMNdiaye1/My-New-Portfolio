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
        <div onMouseOver={onMouseOverTab}
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
                    gridRowStart: '1'
                }} className='onSkillsInfos'>
                Node
                <p> Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Vitae unde ab facilis dolore veritatis
                    laborum magnam ex molestias. Ipsam veritatis quo voluptatem
                    nisi beatae. Sapiente rerum dolorem omnis expedita voluptates.</p>
            </div>);
            case "php": return (<div style={{
                gridRowStart: '2'
            }} className='onSkillsInfos'>php</div>);
            case "javaScript": return (<div style={{
                gridRowStart: '3'
            }} className='onSkillsInfos'>javaScript</div>);
            case "react": return (<div style={{
                gridRowStart: '4'
            }} className='onSkillsInfos'>react</div>);
            case "git": return (<div style={{
                gridRowStart: '5'
            }} className='onSkillsInfos'>git</div>);
            case "html": return (<div style={{
                gridRowStart: '6'
            }} className='onSkillsInfos'>html</div>);
            case "css": return (<div style={{
                gridRowStart: '8'
            }} className='onSkillsInfos'>css</div>);
            case "adobe": return (<div style={{
                gridRowStart: '9'
            }} className='onSkillsInfos'>adobe</div>);
        }
    }

    useEffect(() => {
        Tabs = document.querySelectorAll('.skills');
        console.log(Tabs[0].getBoundingClientRect())

    })

    return (
        <div id='Skills' className='.all'>
            <div id="skills_navbar">
                <Tab parentCallback={callback} theClass='skills nodejs' icon={<i class="fab fa-node-js"></i>} name='node.js' />
                <Tab parentCallback={callback} theClass='skills php' icon={<i class="fab fa-php"></i>} name='php' />
                <Tab parentCallback={callback} theClass='skills skills_selected javaScript' icon={<i class="fab fa-js"></i>} name='javaScript' />
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