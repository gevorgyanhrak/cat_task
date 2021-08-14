import React from "react";
import Routes from "../../Route/Routes";
import SiteBar from "../siteBar/index";
import "./index.scss"


const Sections = () => {
    return (
        <div className='cat_blocks'>
            <div className="site_bar_block">
                <SiteBar />
            </div>
            <div className="content_block" >
                <Routes />
            </div>
        </div>
    )
}

export default Sections;