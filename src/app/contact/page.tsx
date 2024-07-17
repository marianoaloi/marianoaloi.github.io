"use client"
import { useState } from 'react';
import { CAllMe, BlackScreen, ContactScreen } from './contatct.styled';

import '@/app/i18n'
import { ConstactContentt } from './contactCenter';



const Contact = () => {
    const [clicked, setClicked] = useState<boolean>(false)
    function changeView(event: any): void {
        setClicked(!clicked)
    }

    return (
        <>
            !clicked ? <CAllMe onClick={changeView}>📱️</CAllMe> :
            <>
                <ContactScreen>
                    <ConstactContentt />
                </ContactScreen>
                <BlackScreen onClick={changeView} />
            </>
        </>
    )
}

export default Contact