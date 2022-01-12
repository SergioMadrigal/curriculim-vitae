
import profileImage from '../../assets/profile.jpeg';
import {i18new} from '../../utils/i18nextInit';
console.info('[library]', i18new);
export const CVData = {
    personalData: {
      name: 'Sergio Erik Madrigal Herrera',
      title: 'Senior Web Developer',
      image: profileImage,
      contacts: [
        { type: 'email', value: 'sergmadri@gmail.com' },
        { type: 'phone', value: '55 52895327' },
        { type: 'location', value: 'México, CDMX' },
        { type: 'linkedin', value: 't.ly/QuXN' },
        { type: 'github', value: 't.ly/GwgO' }
      ]
    },
    sections: [
      {
        type: 'text',
        title: i18new.t('career_profile_title'),
        content: i18new.t('career_profile_content'),//'I\'m a professional web development, long time ago I started to interest in web tecnologies and today I become a profesional web developer. In my career I made lots of systems that helped the people to do the things easier.',
        icon: 'usertie'
      },
      {
        type: 'common-list',
        title: i18new.t('education_title'),//'Education',
        icon: 'graduation',
        items: [
          {
            title:i18new.t('education_item_title'),//'Computer Engineering (IPN-ESIME)',
            authority: i18new.t('education_item_authority'),//'University',
            authorityWebSite: 'https://www.esimecu.ipn.mx/',
            rightSide: '2010 - 2014'
          }
        ]
      },
      {
        type: 'experiences-list',
        title: i18new.t('experiences_title'),//'Experiences',
        icon: 'archive',
        items: [
          {
            title: 'Senior Web Developer',
            company: 'Ironbit',
            description: i18new.t('job_1_description'),//'In claro video I\'m using React js, SASS, webpack, Charles proxy and other tools to connect the app with STB(Set Up Boxes), STV (Smart TV) and video consoles like PS4. To update the code, we integrate functional components created with typescript and I made some configuratios to reduce the bundle size, all of this configurations help us to make easier run the app in old smart tv\'s and make the app faster. I worked with the music middleware created apis to show information about artist, albums and songs. Actually I development new features base on briefs created by the user.',
            companyMeta: 'Claro Video',
            companyWebSite: 'https://www.ironbit.com/inicio',
            datesBetween: 'Aug 2019 - Present',
            descriptionTags: ['Javascript', 'React', 'Redux', 'Typescript', 'Node', 'SCSS', 'Webpack']
          },
          {
            title: 'Web Developer',
            company: 'Interware',
            description: i18new.t('job_2_description'),//'I was assignment to Nacional Monte de Piedad in the project called Donatarias I used React js, bootstrap and continuos integration with bluemix by IBM. After we participate in another project that started from zero, we used React js, bootstrap and Mongo DB (MERN stack), I developed the REST services and also integrated those apis to the frontend.',
            companyMeta: 'Monte de Piedad',
            companyWebSite: 'https://interware.com.mx/',
            datesBetween: 'Apr 2018 - Aug 2019',
            descriptionTags: ['Javascript', 'React', 'Redux', 'Mongo DB', 'Node', 'LESS', 'Webpack']
          },
          {
            title: 'Assistant Manager',
            company: 'Walmart eCommerce Mexico',
            description: i18new.t('job_3_description'),//'In walmart I was working for all projects, first time I integrated Google Analytics and Google Tag Manager to analyze the purchase funnel(Superama and Sams) all the integration was made with javascript and C# because we used MVC. After the project end, I made frontend in walmart groceries injected javascript in the website and administrate some elements in oracle endeca like sections and baners. I developed cartridges in JS to insert in endeca, those cartridges was helpful to the content media team, in walmart MG we used a framework called copilot that is a mix between React js and Angular, later we migrate to the last version of React js hand to hand with walmart labs.',
            companyMeta: 'WM Groseries - WM MG - Superama - Sams',
            companyWebSite: 'https://www.walmartcentroamerica.com/',
            datesBetween: 'Aug 2016 - Apr 2018',
            descriptionTags: ['Javascript', 'React', 'Redux', 'Angular', 'LESS', 'GULP']
          },
          {
            title: 'Game Developer',
            company: 'Matersys Group',
            description: i18new.t('job_4_description'),//'I was working on some videogames made with unity 3D and C#/javascript like programming languaje to GLADKIDS local also made virtual tours for clients like GNP and made the website of Matersys.',
            companyMeta: 'GNP - Intern',
            companyWebSite: 'https://www.matersys.mx/',
            datesBetween: 'Jun 2015 - Jun 2016',
            descriptionTags: ['C#', 'Javascript', 'Unity 3D']
          },
          {
            title: 'Trainee',
            company: 'CTIN - Grupo Carso',
            description: i18new.t('job_5_description'),//'I made projects interns that we are planing, I participated making augmented reality, mobile apps and some games with javascript(corona).',
            companyMeta: 'Augmented reality',
            companyWebSite: 'http://www.ctinmx.com/',
            datesBetween: 'Nov 2013 - Sep 2014',
            descriptionTags: ['C#', 'Javascript', 'Unity 3D']
          }
        ]
      },
      {
        type: 'common-list',
        title: i18new.t('certificate_title'),//'Certificates',
        icon: 'comments',
        items: [
          {
            title: 'Scrum Fundamentals / 2018',
            authority: 'VMEdu',
            authorityWebSite: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=663737'
          }
        ]
      },
      {
        type: 'common-list',
        title: i18new.t('lenguages_title'),//'Languages',
        icon: 'language',
        items: [
          {
            authority: i18new.t('lenguages_authority'),//'English',
            authorityMeta: i18new.t('lenguages_authorityMeta'),//'Technical intermediate'
          }
        ]
      },
      {
        type: 'tag-list',
        title: i18new.t('skills_title'),//'Skills Proficiency',
        icon: 'rocket',
        items: ['React', 'Javascript', 'LESS', 'SASS', 'Mongo DB', 'Typescript']
      },
      {
        type: 'tag-list',
        title: i18new.t('hobbies_title'),//'Hobbies & Interests',
        icon: 'cubes',
        items: ['Videogames', 'Draw', 'Books', 'Comics']
      }
    ]
  }
