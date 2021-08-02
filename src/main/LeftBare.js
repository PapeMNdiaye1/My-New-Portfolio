import { React, useEffect, useState } from 'react';
let Tabs = '';
let TheLeftBare = '';

const Tab = ({ tabTitle, tabId, icon, class2, parentCallback }) => {

    const [clickTab, setClickTab] = useState()

    const onClickOnTab = (e) => {
        let tab = e.target
        Tabs.forEach(tab => {
            tab.style.background = '';
            tab.style.left = '';
            tab.style.color = '';
            tab.classList.remove('activeTag')
            tab.classList.remove('activeTag0')
        });
        tab.classList.add('activeTag0')
        TheLeftBare.style.width = '';
        parentCallback(clickTab)
    }

    const onMouseOverTab = (e) => {
        e.stopPropagation();
        let tab = e.target
        if (tab.classList[0] === "tab") {
            Tabs.forEach(tab => {
                tab.classList.remove('activeTag')
            });
            tab.classList.add('activeTag')
        }
        TheLeftBare.style.width = '9em';
        setClickTab(clickTab => tab.innerText)
    }
    const onMouseOutTab = (e) => {
        e.stopPropagation();
        TheLeftBare.style.width = '';
        Tabs.forEach(tab => {
            tab.classList.remove('activeTag')
        });
    }
    return (
        <div onClick={onClickOnTab}
            onMouseOver={onMouseOverTab}
            onMouseOut={onMouseOutTab}
            class={`tab ${class2}`} id={tabId}>
            {tabTitle}
            <div class="tab_icon">
                {
                    icon
                }
            </div>
        </div>
    )
}

const LeftBare = ({ onChangeTab }) => {

    const callback = (count) => {
        onChangeTab(count)
    }

    useEffect(() => {
        TheLeftBare = document.querySelector('#LeftBare-container')
        Tabs = document.querySelector('#tabs').childNodes
    })
    return (
        <div
            id='LeftBare-container'>
            <div id='tabs'>
                <Tab parentCallback={callback} tabTitle='Accueil' tabId='tab1' class2='activeTag0' icon={<ion-icon name="home-outline"></ion-icon>} />
                <Tab parentCallback={callback} tabTitle='Design' tabId='tab3' icon={<ion-icon name="color-palette-outline"></ion-icon>} />
                <Tab parentCallback={callback} tabTitle='Web' tabId='tab2' icon={<ion-icon name="albums-outline"></ion-icon>} />
                <Tab parentCallback={callback} tabTitle='Skills' tabId='tab4' icon={<ion-icon name="list-outline"></ion-icon>} />
                <Tab parentCallback={callback} tabTitle='Contact' tabId='tab5' icon={<ion-icon name="chatbox-outline"></ion-icon>} />
            </div>
        </div>
    )
}

export default LeftBare