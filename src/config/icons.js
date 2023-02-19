import React from 'react';

// ICONS
import SvgIcon from '@material-ui/core/SvgIcon';
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MapIcon from '@material-ui/icons/Map';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import WebIcon from '@material-ui/icons/Web';
import MailIcon from '@material-ui/icons/Mail';
import Twitter from '@material-ui/icons/Twitter';
import { ReactComponent as FacebookIcon } from '../assets/icons/facebook.svg';
import { ReactComponent as GitHubIcon } from '../assets/icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/linkedin.svg';
import { ReactComponent as CppIcon } from '../assets/icons/cplusplus-plain.svg';
import { ReactComponent as JavaIcon } from '../assets/icons/java-plain-wordmark.svg';
import { ReactComponent as AngularIcon } from '../assets/icons/angularjs-plain-wordmark.svg';
import { ReactComponent as JavaScriptIcon } from '../assets/icons/javascript-plain.svg';
import { ReactComponent as MongoDBIcon } from '../assets/icons/mongodb-plain-wordmark.svg';
import { ReactComponent as MySQLIcon } from '../assets/icons/mysql-plain-wordmark.svg';
import { ReactComponent as NodejsIcon } from '../assets/icons/nodejs-plain-wordmark.svg';
import { ReactComponent as PHPIcon } from '../assets/icons/php-plain.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react-original-wordmark.svg';
import { ReactComponent as TypeScriptIcon } from '../assets/icons/typescript-plain.svg';
import { ReactComponent as GraphQLIcon } from '../assets/icons/graphql.svg';
import { ReactComponent as RailsIcon } from '../assets/icons/rails-plain-wordmark.svg';
import { ReactComponent as RubyIcon } from '../assets/icons/ruby-plain-wordmark.svg';
import { ReactComponent as PythonIcon } from '../assets/icons/python-plain-wordmark.svg';
import { ReactComponent as PostgresqlIcon } from '../assets/icons/postgresql-plain-wordmark.svg';
import { ReactComponent as SvelteIcon } from '../assets/icons/svelte-plain-wordmark.svg';
import { ReactComponent as ArduinoIcon } from '../assets/icons/arduino-plain-wordmark.svg';
import { ReactComponent as BulmaIcon } from '../assets/icons/bulma-plain.svg';
import { ReactComponent as TravisIcon } from '../assets/icons/travis-plain-wordmark.svg';
import { ReactComponent as CentosIcon } from '../assets/icons/centos-plain-wordmark.svg';
import { ReactComponent as DockerIcon } from '../assets/icons/docker-plain-wordmark.svg';
import { ReactComponent as NginxIcon } from '../assets/icons/nginx-original.svg';
import { ReactComponent as FlaskIcon } from '../assets/icons/flask-original-wordmark.svg';
import { ReactComponent as MongodbIcon } from '../assets/icons/mongodb-original-wordmark.svg';
// import { ReactComponent as RubyIcon } from '../assets/icons/ruby.svg';
// ICONS END

/** Default icons */
const Icons = {
    email: <MailIcon />,
    facebook: <SvgIcon component={FacebookIcon} />,
    twitter: <Twitter />,
    github: <SvgIcon component={GitHubIcon} stroke="currentColor" strokeWidth={2} style={{ fill: 'none' }} />,
    linkedin: <SvgIcon component={LinkedInIcon} />,
    projects: <ComputerIcon />,
    about: <InfoIcon />,
    cpp: <SvgIcon component={CppIcon} viewBox="0 0 128 128" fontSize="large" title="C++" />,
    java: <SvgIcon component={JavaIcon} viewBox="0 0 128 128" fontSize="large" title="Java" />,
    typescript: <SvgIcon component={TypeScriptIcon} viewBox="0 0 128 128" fontSize="large" title="TypeScript" />,
    javascript: <SvgIcon component={JavaScriptIcon} viewBox="0 0 128 128" fontSize="large" title="JavaScript" />,
    mysql: <SvgIcon component={MySQLIcon} viewBox="0 0 128 128" fontSize="large" title="MySQL" />,
    php: <SvgIcon component={PHPIcon} viewBox="0 0 128 128" fontSize="large" title="PHP" />,
    mongodb: <SvgIcon component={MongoDBIcon} viewBox="0 0 128 128" fontSize="large" title="MongoDB" />,
    nodejs: <SvgIcon component={NodejsIcon} viewBox="0 0 128 128" fontSize="large" title="Node.js" />,
    react: <SvgIcon component={ReactIcon} viewBox="0 0 128 128" fontSize="large" title="React" />,
    angular: <SvgIcon component={AngularIcon} viewBox="0 0 128 128" fontSize="large" title="Angular" />,
    ruby: <SvgIcon component={RubyIcon} viewBox="0 0 128 128" fontSize="large" title="Ruby" />,
    rails: <SvgIcon component={RailsIcon} viewBox="0 0 128 128" fontSize="large" title="Rails" />,
    python: <SvgIcon component={PythonIcon} viewBox="0 0 128 128" fontSize="large" title="Python" />,
    postgresql: <SvgIcon component={PostgresqlIcon} viewBox="0 0 128 128" fontSize="large" title="PostgreSQL" />,
    svelte: <SvgIcon component={SvelteIcon} viewBox="0 0 128 128" fontSize="large" title="Svelte" />,
    arduino: <SvgIcon component={ArduinoIcon} viewBox="0 0 128 128" fontSize="large" title="Arduino" />,
    bulma: <SvgIcon component={BulmaIcon} viewBox="0 0 128 128" fontSize="large" title="Bulma" />,
    travis: <SvgIcon component={TravisIcon} viewBox="0 0 128 128" fontSize="large" title="Travis CI" />,
    centos: <SvgIcon component={CentosIcon} viewBox="0 0 128 128" fontSize="large" title="CentOS" />,
    docker: <SvgIcon component={DockerIcon} viewBox="0 0 128 128" fontSize="large" title="Docker" />,
    nginx: <SvgIcon component={NginxIcon} viewBox="0 0 128 128" fontSize="large" title="Nginx" />,
    flask: <SvgIcon component={FlaskIcon} viewBox="0 0 128 128" fontSize="large" title="Nginx" />,
    mongodb: <SvgIcon component={MongodbIcon} viewBox="0 0 128 128" fontSize="large" title="Nginx" />,
    helpoutline: <HelpOutlineIcon />,
    map: <MapIcon />,
    code: <CodeIcon />,
    link: <LinkIcon />,
    web: <WebIcon />
};


export { Icons };
