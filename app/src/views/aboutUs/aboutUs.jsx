import './aboutUs.scss';

import React from 'react';

class AboutUS extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    render() {
        return (
            <div align="center">
                <h3 > Quienes somos?</h3>
                <a href ="https://github.com/Jesus1994-7"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmaxcdn.icons8.com%2FShare%2Ficon%2Fp1em%2FLogos%2Fgithub1600.png&f=1&nofb=1"  target="_blank" alt="githubJesus" width="40" height="40"/></a>
                <img src="https://avatars3.githubusercontent.com/u/62897732?s=400&u=008ee108116a2a3d58e7809df7c0fab46bea4d17&v=40" alt="Jesus"/>
                &nbsp;                &nbsp;
                <img src="https://avatars2.githubusercontent.com/u/65183792?s=400&u=5e2dc36e1830dd9429313f09a13737d88798c8e1&v=4"alt="Christian Sanchez"/>
                <a href ="https://github.com/chsanleo"><img src ="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_326384.png&f=1&nofb=1" alt="githubChristian"  target="_blank"  width="40" height="40"/></a>
            </div>
        );
    }
}
export default AboutUS;