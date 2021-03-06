import { renderToStaticMarkup } from 'react-dom/server';
import { FaVuejs } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import {
  SiArduino,
  SiC,
  SiCplusplus,
  SiCss3,
  SiDart,
  SiFlutter,
  SiGmail,
  SiGnubash,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiLinkedin,
  SiMongodb,
  SiNextDotJs,
  SiNodeDotJs,
  SiReact,
  SiRedux,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiWhatsapp,
} from 'react-icons/si';

import { ICommonDataState } from './types';

const initialState: ICommonDataState = {
  contacts: [
    {
      name: 'GitHub',
      icon: GoMarkGithub,
      url: 'https://github.com/aboqasem',
      color: 'blue-charcoal',
    },
    {
      name: 'LinkedIn',
      icon: SiLinkedin,
      url: 'https://www.linkedin.com/in/aboqasem/',
      color: 'denim',
    },
    {
      name: 'WhatsApp',
      icon: SiWhatsapp,
      url: 'https://wa.me/60176495945',
      color: 'spring-green',
    },
    {
      name: 'Email',
      icon: SiGmail,
      url: 'mailto:mb.alzouabi@gmail.com',
      color: 'flamingo',
    },
  ],
  projects: [
    {
      title: 'AI Luminance',
      description: 'Simple color luminance detector using neural networks from brain.js.',
      preview: 'https://github.com/aboqasem/ai-luminance/blob/main/docs/preview.webm',
      previewMp4: 'https://raw.githubusercontent.com/aboqasem/ai-luminance/main/docs/preview.mp4',
      url: 'https://ai-luminance.aboqasem.dev/',
      sourceCode: `https://github.com/aboqasem/ai-luminance`,
    },
    {
      title: 'Time Progress',
      description: 'Various time progress bars.',
      preview: 'https://github.com/aboqasem/time_progress/blob/main/docs/preview.webm',
      previewMp4: 'https://raw.githubusercontent.com/aboqasem/time_progress/main/docs/preview.mp4',
      url: 'https://time-progress.aboqasem.dev/',
      sourceCode: `https://github.com/aboqasem/time_progress`,
    },
    {
      title: 'Ants and Bugs',
      description: 'Simple Java Swing simulation game applying design patterns.',
      preview: 'https://github.com/aboqasem/ants-and-bugs/blob/main/docs/preview.webm',
      previewMp4: 'https://raw.githubusercontent.com/aboqasem/ants-and-bugs/main/docs/preview.mp4',
      sourceCode: `https://github.com/aboqasem/ants-and-bugs`,
    },
    {
      title: 'FiRecorder',
      description: 'A simple sound recorder/player with Firebase auth and storage.',
      preview: 'https://github.com/aboqasem/firecorder/blob/main/docs/preview.webm',
      previewMp4: 'https://raw.githubusercontent.com/aboqasem/firecorder/main/docs/preview.mp4',
      sourceCode: `https://github.com/aboqasem/firecorder`,
    },
    {
      title: 'International Checkers',
      description: 'Simple C++ implementation of international checkers in the command-line.',
      preview: 'https://github.com/aboqasem/international-checkers/blob/main/docs/preview.webm',
      previewMp4: 'https://raw.githubusercontent.com/aboqasem/international-checkers/main/docs/preview.mp4',
      sourceCode: `https://github.com/aboqasem/international-checkers`,
    },
  ],
  techIconsHtmlStrings: [
    SiJavascript,
    SiTypescript,
    SiDart,
    SiJava,
    SiCplusplus,
    SiC,
    SiRust,
    SiGnubash,
    GoMarkGithub,
    SiNodeDotJs,
    SiMongodb,
    SiFlutter,
    SiReact,
    SiNextDotJs,
    SiRedux,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    FaVuejs,
    SiArduino,
  ].map((icon) => renderToStaticMarkup(icon({ className: 'text-2xl sm:text-3xl md:text-4xl' }))),
};

const commonDataReducer = (state = initialState): ICommonDataState => {
  return state;
};

export default commonDataReducer;

// export const myInformation: IInformation[] = [
//   {
//     icon: 'Home', // TODO: svg
//     text: 'From Daraa, Syria',
//   },
//   {
//     icon: 'PersonPin', // TODO: svg
//     text: 'In Cyberjaya, Malaysia',
//   },
//   {
//     icon: 'LocalLibrary', // TODO: svg
//     text: "Pursuing Bachelor's at Multimedia University",
//   },
//   {
//     icon: 'Language', // TODO: svg
//     text: 'Arabic, English, and basics of Turkish',
//   },
// ];

// const myAchievements: IAchievement[] = [
//   {
//     from: 'Multimedia University',
//     logoUrl: 'https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/cropped-mmulogo-only-192x192.png',
//     achievement: "Dean's List Trimester 2, 2019/2020",
//     url: 'https://www.mmu.edu.my/cyberjaya/undergraduate/information-technology/bachelor-of-computer-science-hons/',
//   },
//   {
//     from: 'Udemy',
//     logoUrl: 'https://www.udemy.com/staticx/udemy/images/v6/favicon-96x96.png',
//     achievement: 'The Complete 2020 Web Development Bootcamp',
//     url: 'https://www.udemy.com/certificate/UC-df9853fa-31a9-4d62-bbfe-d0d9269f4d6a/',
//   },
//   {
//     from: 'Udemy',
//     logoUrl: 'https://www.udemy.com/staticx/udemy/images/v6/favicon-96x96.png',
//     achievement: 'The Complete 2020 Flutter Development Bootcamp with Dart',
//     url: 'https://www.udemy.com/certificate/UC-268bcbe8-7826-4c72-8b2b-c42ad3391789/',
//   },
//   {
//     from: 'Coursera',
//     logoUrl: 'https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/icon-blue-96x96.png',
//     achievement: 'Information Systems Auditing, Controls and Assurance',
//     url: 'https://coursera.org/share/7c98c3912365fbff6985da0aeac98ddf',
//   },
// ];

// const myEducation: IEducation[] = [
//   {
//     dateFrom: 'Early 2017',
//     dateTo: 'November 2017',
//     certificate: 'High School Diploma',
//     school: 'Amjad Aloroba School',
//     location: 'Istanbul, Turkey',
//   },
//   {
//     dateFrom: 'April 2018',
//     dateTo: 'March 2022',
//     certificate: 'Bachelor of Computer Science (Software Engineering)',
//     school: 'Multimedia University',
//     location: 'Cyberjaya, Malaysia',
//   },
// ];
