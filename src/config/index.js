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
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import WbIridescentIcon from '@material-ui/icons/WbIridescent';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import RateReviewIcon from '@material-ui/icons/RateReview';
import NotesIcon from '@material-ui/icons/Notes';

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
            icon: <NotesIcon />
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
    extraClass: '',
    // Projects
    projects: [
        {
            // Name of the project
            name: 'Duke FixIt',
            // Icon of the project
            icon: Icons['map'],
            // Description of the project
            description: 'A full-stack web application that centralizes cumbersome on-campus issue-reporting avenues and provides status tracking feature across two different ticketing systems used by Duke.',
            // Links to the project
            links: [
                // {
                //     // Tooltip of the link
                //     tooltip: 'See source',
                //     // Link URL
                //     link: 'https://github.com/xwiki-contrib/application-interactive-maps',
                //     // Icon of the button
                //     icon: Icons['code']
                // },
                {
                    tooltip: 'See app',
                    link: 'https://fixit-test.cloud.duke.edu',
                    icon: Icons['link']
                }
            ]
        },
        {
            name: 'Haojin\'s blog',
            icon: <WbIridescentIcon />,
            description: 'My personal blog for keeping mindful living.',
            links: [
                {
                    tooltip: 'See source',
                    link: 'https://github.com/declan-haojin/blog.haojin.li',
                    icon: Icons['code']
                },
                {
                    tooltip: 'See app',
                    link: 'https://blog.haojin.li',
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
        extraClass: 'about-section section-reverse',
        // If you don't want a section in menu, make this true
        notInMenu: false,
        // Content inside the section
        content: (
            <>
                <h4>{Icons['helpoutline']} Who is this guy?</h4>
                <p>
                    An easily excited and a highly passionate backend developer who is debugging all the time. Full of eagerness to learn and work on new technologies.
                </p>

                <h4>{Icons['code']} Programming</h4>
                <p className="programming-icons">
                    {Icons['python']}
                    {Icons['ruby']}
                    {Icons['java']}
                    {Icons['cpp']}
                    {Icons['javascript']}
                </p>

                <h4>{Icons['web']} Web</h4>
                <p className="programming-icons">
                    {Icons['rails']}
                    {Icons['postgresql']}
                    {Icons['nodejs']}
                    {Icons['react']}
                </p>
            </>
        )
    },
    {
        name: 'Favorite Quotes',
        headerIcon: <RateReviewIcon />,
        content: (
            <>
                <p>
                    <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>“</span>
                    <br />
                    We are a walking paradox. We love good but evil. We are free but imprisoned.
                </p>


                <p>
                    <span style={{ fontSize: '5rem', height: '30px', display: 'block' }}>“</span>
                    <br />
                    生活不是你活过的样子，而是你记住的样子。
                </p>
                {/* <p style={{ textAlign: 'right', fontSize: 'small' }}>
                    <i>
                        <b>余华 《活着》</b>
                    </i>
                </p> */}
            </>
        )
    }
];

export { CommonConfig, ProjectsConfig, CustomSectionsConfig, Icons };
