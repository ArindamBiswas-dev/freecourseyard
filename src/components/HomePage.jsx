import React from 'react'
import { useMediaQuery } from '@material-ui/core';
import FindByTags from './FindByTags';
import Footer from './Footer';
import ImgSlider from './ImgSlider';
import NavbarDesktop from './NavbarDesktop';
import NavBarPhone from './NavBarPhone';
import PopularChoice from './PopularChoice';

function HomePage() {
    const isActivePhone = useMediaQuery("(max-width: 700px)");
    const isActiveDesk = useMediaQuery("(min-width: 700px)");
    return (
        <div>
            { isActiveDesk && <NavbarDesktop />}
            { isActivePhone && <NavBarPhone />}
            <div><ImgSlider /></div>
            <PopularChoice />
            <FindByTags />
            <Footer />
        </div>
    )
}

export default HomePage
