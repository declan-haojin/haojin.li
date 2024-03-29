import React from 'react';
import CircleButton from '../../components/CircleButton/CircleButton';
import './Footer.scss';
import { CommonConfig, Icons } from '../../config';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <p>
                    &copy; 2018-{new Date().getFullYear()} Haojin Li
                </p>
                <p>
                    {CommonConfig.social.map((socialDetails, index) => {
                        return (
                            <CircleButton key={'footer-social-' + index} tooltip={socialDetails.name} tooltipPlacement="top"
                                link={socialDetails.link} target="_blank">
                                {socialDetails.icon
                                    ? socialDetails.icon : Icons[socialDetails.name.toLowerCase()]}
                            </CircleButton>
                        );
                    })}
                </p>
            </div>
        );
    }
}

export default Footer;
