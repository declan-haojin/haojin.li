import React from 'react';
import CircleButton from '../../components/CircleButton/CircleButton';
import './TopSection.scss';

import { CommonConfig, Icons } from '../../config';

class TopSection extends React.Component {

    componentDidMount() {
        if (this.pathElement) {
            const signatureLength = this.pathElement.getTotalLength();
            this.pathElement.setAttribute('stroke-dasharray', signatureLength);
            this.pathElement.setAttribute('stroke-dashoffset', signatureLength);

            const viewBoxCoords = CommonConfig.signature?.viewBox.split(' ').map(val => parseInt(val));
            this.pathElement.setAttribute('stroke-width', Math.max(...viewBoxCoords) / 100);
        }
    }

    render() {
        return (
            <div className="top-section">
                <div className="intro">
                    <h1>{CommonConfig.name}</h1>
                    <p>{CommonConfig.tagline}</p>
                    {/* <h4>Actively looking for 2023 summer internships. Please <a href='mailto:work@haojin.li'>reach out</a>!</h4> */}
                </div>

                <div className="social">
                    {CommonConfig.social.map((socialDetails, index) => {
                        return (
                            <CircleButton key={'top-section-social-' + index} tooltip={socialDetails.name} tooltipPlacement="top"
                                link={socialDetails.link} target="_blank">
                                {/* If the social platform icon is given then use that else pick from default icons */}
                                {socialDetails.icon
                                    ? socialDetails.icon : Icons[socialDetails.name.toLowerCase()]}
                            </CircleButton>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default TopSection;
