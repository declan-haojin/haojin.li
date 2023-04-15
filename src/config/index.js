/**
 * This is the config file where you can edit information as you want.
 *
 * There are 3 variable objects which contain all the information.
 *
 * 1. CommonConfig
 *      This variable contains all the common configuration of your profile
 *      including your name, your social links and the path to draw the signature.
 * 2. ProjectsConfig
 *      This variable contains all the information which will be part of the
 *      projects section. Here you can add your own projects and provide a link for them
 *      and also change the icon as per your liking.
 * 3. CustomSectionsConfig
 *      Now this is the fun part. This variable is an array which can hold any number
 *      of sections. Here you can define any of your custom sections may it be "Work", "Reviews",
 *      "Portfolio" or whatnot. The "content" property supports JSX so you can style or use it
 *      however you like!
 *
 * So what are you waiting for? GO FOR IT!
 */

import React from 'react';
import { Icons } from './icons';

// CUSTOM ICONS
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import BookIcon from '@mui/icons-material/Book';
import HandymanIcon from '@mui/icons-material/Handyman';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import LanguageIcon from '@mui/icons-material/Language';
import DescriptionIcon from '@mui/icons-material/Description';
import TranslateIcon from '@mui/icons-material/Translate';
import PersonIcon from '@mui/icons-material/Person';
import CircleButton from '../components/CircleButton/CircleButton';
import ArticleIcon from '@mui/icons-material/Article';
// configURABLE TEXT BEGINS HERE

/** Common config for top section and footer */
const CommonConfig = {
    // Whether to add the free Palestine screen at the start
    addFreePalestine: false,
    // Name that will be displayed at the top
    name: 'Haojin Li',
    // Tagline that will be displayed after the name
    tagline: 'Student at Duke University',
    // Configuration for signature in the top section
    email: 'work@haojin.li',
    // Information for social media accounts
    social: [
        {
            name: 'Blog',
            link: 'https://blog.haojin.li',
            icon: <BookIcon/>
        },
        {
            // Name of the social media platform
            name: 'GitHub',
            // Link to your account
            link: 'https://github.com/declan-haojin',
            // (Optional) Icon of the social media platform
            // default icon will be used in case of no value
            icon: Icons['github']
        },
        {
            name: 'LinkedIn',
            link: 'https://linkedin.com/in/haojinli'
        },
        {
            name: 'Email',
            link: 'mailto:work@haojin.li'
        },
        {
            name: "Resume",
            link: 'https://dropovercl.s3.amazonaws.com/2d08c987-9397-4a74-a0e0-d7782afd7fab/f9b45e82-5214-4830-b9da-2dfa16a429f7/2d491796-788f-45e0-a626-9e05d3bfa70c.pdf',
            icon: <DescriptionIcon/>
        },

    ]
};

/** Config for the projects section */
const ProjectsConfig = {
    // Name / title of the section
    name: 'Projects',
    // Icon next to the header title. The headerIcon can use any SVG icon, material icons are preferred
    // See https://material-ui.com/components/material-icons/
    headerIcon: <ComputerIcon />,
    // Extra classes to apply styling
    // "section-reverse" class makes a section right to left
    extraClass: 'section-reverse',
    // Projects
    projects: [
        {
            // Name of the project
            name: 'Duke FixIt',
            // Icon of the project
            icon: <HandymanIcon />,
            // Description of the project
            description: 'A full-stack web application centralizes issue reporting avenues on campus, streamlining the cumbersome process and providing end users with a status tracking feature that spans two separate Duke ticketing systems.',
            // Links to the project
            links: [
                {
                    tooltip: 'See code (only with Duke credentials)',
                    link: 'https://gitlab.oit.duke.edu/essweb/fixit',
                    icon: Icons['code']
                },
                {
                    tooltip: 'See website',
                    link: 'https://fixit.oit.duke.edu',
                    icon: Icons['link']
                }
            ]
        },
        {
            name: 'Haojin\'s Blog',
            icon: <DriveFileRenameOutlineIcon />,
            description: 'From its beginnings in 2018 as a blog for competitive programming tutorials, my personal blog has since expanded to encompass everything from learning to reflections on my life.',
            links: [
                {
                    tooltip: 'See code',
                    link: 'https://github.com/declan-haojin/blog.haojin.li',
                    icon: Icons['code']
                },
                {
                    tooltip: 'See website',
                    link: 'https://blog.haojin.li',
                    icon: Icons['link']
                }
            ]
        },
        {
            name: 'haojin.li/[keyword] URL Shortener',
            icon: <LanguageIcon />,
            description: 'A private self-hosted URL shortener service based on YOURLS open-source framework, operates under my personal domain, haojin.li.',
            links: [
                {
                    tooltip: 'Try haojin.li/github',
                    link: 'https://haojin.li/github',
                    icon: Icons['link']
                }
            ]
        },
    ]
};

/** Config for the publication section */
const PublicationsConfig = {
    // Projects
    projects: [
        {
            name: 'Explore BERT and Bi-LSTM with Attention for Chinese Essay Automated Scoring',
            icon: <TranslateIcon />,
            description: 'The paper proposes a new neural network model for automated Chinese essay scoring. The model integrates the BERT network for obtaining sentence vectors and a Bi-LSTM with two types of attention mechanism to extract essay vector representation. The model was trained on a self-collected open-source dataset and outperformed existing ones by 24%.',
            links: [
                {
                    tooltip: 'See open-source dataset',
                    link: 'https://github.com/declan-haojin/AES-Dataset',
                    icon: Icons['code']
                },
                {
                    tooltip: 'See publication',
                    link: 'https://doi.org/10.1088/1742-6596/1631/1/012036',
                    icon: Icons['link']
                }
            ]
        }
    ]
};

/** Config for sections */
const CustomSectionsConfig = [
    // ABOUT SECTION
    {
        // Name of the section
        name: 'About',
        // Icon next to the header title. The headerIcon can use any SVG icon, material icons are preferred
        // See https://material-ui.com/components/material-icons/
        headerIcon: <InfoIcon />,
        // Extra classes to apply styling
        // "section-reverse" class makes a section right to left
        extraClass: 'about-section',
        // If you don't want a section in menu, make this true
        notInMenu: false,
        // Content inside the section
        content: (
            <>
                <h4><PersonIcon /> Who is this guy?</h4>
                <p><li>A Duke student double-majoring in Computer Science and Political Science</li></p>
                <p><li>An easily excited and highly passionate developer who is debugging all the time</li></p>
                <p><li>An unskilled hiker who dreams of thru-hiking the <a href='https://appalachiantrail.org/explore/hike-the-a-t/thru-hiking/'>Appalachian Trail</a></li></p>
                <p><li>A dreadfully bad karting driver obsessed with Formula 1</li></p>
                <p><li>A non-country boy in love with <a href='https://youtu.be/1vrEljMfXYo'>Take Me Home, Country Roads</a></li></p>

                <h4>{Icons['code']} Programming</h4>
                <p className="programming-icons">
                    {Icons['python']}
                    {Icons['ruby']}
                    {Icons['java']}
                    {Icons['cpp']}
                    {Icons['javascript']}
                    {Icons['r']}
                </p>

                <h4>{Icons['web']} Web</h4>
                <p className="programming-icons">
                    {Icons['rails']}
                    {Icons['react']}
                    {Icons['flask']}
                    {Icons['nodejs']}
                    {Icons['express']}
                    {Icons['docker']}
                    {Icons['postgresql']}
                    {Icons['mongodb']}
                    {Icons['centos']}
                    {Icons['nginx']}
                    {Icons['tailwindcss']}
                    {Icons['travis']}
                </p>
            </>
        )
    },
    // PROJECTS SECTION
    {
        // Name / title of the section
        name: 'Projects',
        // Icon next to the header title. The headerIcon can use any SVG icon, material icons are preferred
        // See https://material-ui.com/components/material-icons/
        headerIcon: <ComputerIcon />,
        // Extra classes to apply styling
        // "section-reverse" class makes a section right to left
        extraClass: 'section-reverse',
        // Projects
        content: (
            <>
                {ProjectsConfig.projects.map((project, index) => {
                    return (
                        <div key={'project-' + index}>
                            <h3 style={{ fontSize: '1.4rem' }}>{project.icon} {project.name}</h3>
                            <p>{project.description}</p>
                            <div style={{ textAlign: 'right' }}>
                                {project.links.map((link, linkIndex) => {
                                    const marginRightStyle = linkIndex === project.links.length - 1
                                                    ? { marginRight: '0' }
                                                    : undefined;

                                    return (
                                        <CircleButton style={marginRightStyle} key={'project-link-' + index + linkIndex}
                                            link={link.link} target="_blank" tooltip={link.tooltip} size={1.4}>
                                            {link.icon}
                                        </CircleButton>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </>
        )

    },
    // Publication SECTION
    {
        // Name / title of the section
        name: 'Publications',
        // Icon next to the header title. The headerIcon can use any SVG icon, material icons are preferred
        // See https://material-ui.com/components/material-icons/
        headerIcon: <ArticleIcon />,
        // Extra classes to apply styling
        // "section-reverse" class makes a section right to left
        extraClass: '',
        // Projects
        content: (
            <>
                {PublicationsConfig.projects.map((project, index) => {
                    return (
                        <div key={'project-' + index}>
                            <h3 style={{ fontSize: '1.4rem' }}>{project.icon} {project.name}</h3>
                            <p>{project.description}</p>
                            <div style={{ textAlign: 'right' }}>
                                {project.links.map((link, linkIndex) => {
                                    const marginRightStyle = linkIndex === project.links.length - 1
                                                    ? { marginRight: '0' }
                                                    : undefined;

                                    return (
                                        <CircleButton style={marginRightStyle} key={'project-link-' + index + linkIndex}
                                            link={link.link} target="_blank" tooltip={link.tooltip} size={1.4}>
                                            {link.icon}
                                        </CircleButton>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </>
        )

    },

    // {
    //     name: 'Favorite Quotes',
    //     headerIcon: <RateReviewIcon />,
    //     extraClass: "section-reverse",
    //     content: (
    //         <>
    //             <p>
    //                 <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>“</span>
    //                 <br />
    //                 We are a walking paradox. We love good but evil. We are free but imprisoned.
    //             </p>


    //             <p>
    //                 <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>“</span>
    //                 <br />
    //                 生活不是你活过的样子，而是你记住的样子。
    //             </p>
    //             {/* <p style={{ textAlign: 'right', fontSize: 'small' }}>
    //                 <i>
    //                     <b>余华 《活着》</b>
    //                 </i>
    //             </p> */}
    //         </>
    //     )
    // }
];

export { CommonConfig, ProjectsConfig, CustomSectionsConfig, Icons };
