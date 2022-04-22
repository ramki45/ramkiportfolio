import contacts from '../assets/svg/projects/contacts.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import seven from '../assets/svg/projects/seven.svg'
import gi from '../assets/svg/projects/gi.svg'
import blog from '../assets/svg/projects/blog.svg'
import conversation from '../assets/svg/projects/conversation.svg'



export const projectsData = [
    {
        id: 5,
        projectName: 'E-Commerce App',
        projectDesc: 'A Simple E-commerce application',
        tags: ['React Js', 'Node Js', 'Mongo DB'],
        code: 'https://github.com/ramki45/Ecom_Bookshop',
        demo: 'https://ecomssan.herokuapp.com/',
        image: five
    },
    {
        id: 1,
        projectName: 'Contact Keeper',
        projectDesc: "A Contact Keeper web application",
        tags: ['React', 'CSS', 'Node Js'],
        code: 'https://github.com/ramki45/ContactKeeper',
        demo: 'https://cryptic-brook-10508.herokuapp.com/',
        image: contacts
    },
    {
        id: 9,
        projectName: "Developer's Blog",
        projectDesc: 'A Blog for developers',
        tags: ['React Js', 'FileBase', 'Node Js'],
        code: 'https://github.com/ramki45/Developersblog',
        demo: 'https://developerssblog.netlify.app/',
        image: blog
    }, 
 
    {
        id: 4,
        projectName: "90's Stories",
        projectDesc: 'User can post stories, image',
        tags: ['React', 'Redux'],
        code: 'https://github.com/ramki45/90-s-project',
        demo: 'https://hopeful-cori-2fad36.netlify.app/',
        image: four
    },
   
   
   
    {
        id: 10,
        projectName: "Github Finder",
        projectDesc: 'User can find any github profile with its repositories',
        tags: ['React', 'MaterialUI'],
        code: 'https://github.com/ramki45/githubfinder',
        demo: 'https://unique-begonia-2ca0c8.netlify.app/',
        image: gi
    },
   
   
    {
        id: 11,
        projectName: "Conversation App - Like Natasha",
        projectDesc: 'Conversation with app -> voice and text',
        tags: ['React', 'Bootstrap'],
        code: 'https://github.com/ramki45/chat',
        demo: 'https://convowithnatasha.netlify.app/',
        image: conversation
    },

    {
        id: 7,
        projectName: 'Expense Keeper',
        projectDesc: 'A MERN Stack Expense Keeper app',
        tags: ['React', 'Node'],
        code: 'https://github.com/ramki45/savingkeeper',
        demo: 'https://blooming-mountain-55200.herokuapp.com/',
        image: seven
    }
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/