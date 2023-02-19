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
import WbIridescentIcon from '@material-ui/icons/WbIridescent';
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import BookIcon from '@mui/icons-material/Book';
import HandymanIcon from '@mui/icons-material/Handyman';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ScienceIcon from '@mui/icons-material/Science';

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
    email: 'hi@haojin.li',
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
            link: 'mailto:hi@haojin.li'
        }

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
                    tooltip: 'See code (only within Duke network)',
                    link: 'https://gitlab.oit.duke.edu/essweb/fixit',
                    icon: Icons['code']
                },
                {
                    tooltip: 'See website (only within Duke network )',
                    link: 'https://fixit-test.cloud.duke.edu',
                    icon: Icons['link']
                }
            ]
        },
        {
            name: 'Haojin\'s blog',
            icon: <DriveFileRenameOutlineIcon />,
            description: 'From its beginnings in 2018 as a blog for competitive programming tutorials, my personal blog has since expanded to encompass everything from learning to reflections on my life.',
            links: [
                {
                    tooltip: 'See source',
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
            name: 'Explore BERT and Bi-LSTM with Attention for Chinese Essay Automated Scoring (Publication)',
            icon: <ScienceIcon />,
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
        },
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
                <h4>{Icons['helpoutline']} Who is this guy?</h4>
                <p><li>A Duke student double-majoring in Computer Science and Political Science</li></p>
                <p><li>An easily excited and highly passionate developer who is debugging all the time</li></p>
                <p><li>An unskilled hiker who dreams of thru-hiking the <a href='https://appalachiantrail.org/explore/hike-the-a-t/thru-hiking/'>Appalachian Trail</a></li></p>
                <p><li>A dreadfully bad karting driver obsessed with Formula 1</li></p>
                <p><li>A non-country boy in love with 'Take Me Home, Country Roads'</li></p>

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
                    {Icons['docker']}
                    {Icons['postgresql']}
                    {Icons['mongodb']}
                    {Icons['centos']}
                    {Icons['nginx']}
                    {Icons['travis']}
                </p>
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
