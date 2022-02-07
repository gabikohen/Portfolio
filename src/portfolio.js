const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'GK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Gabriel Kohen',
  role: 'Full Stack Developer',
  description:
    'I am a Full Stack developer looking to consolidate my SERN stack. I started writing code learning on my own, until I found a way to challenge myself in programming. I am meticulous, flexible, decisive with result oriented.I like to learn something new every day',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/gabriel-kohen-24b865b9/',
    github: 'https://github.com/gabikohen',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Sport-Shoes',
    description:
      'E-commerce of sneakers',
    stack: ['Javascript','Node.js','MySQL','HTML','CSS','EJS',],
    sourceCode: 'https://sportshoesdb.herokuapp.com/',
    livePreview: 'https://github.com/gabikohen/SportShoes',
  },
  {
    name: 'Schools Back-end',
    description:
      'It is a project that I am doing with a friend, it is about schools where parents can have direct communication with schools',
    stack: ['Javascript','Node.js','MySQL2'],
   sourceCode: 'https://github.com/giornn0/api_jardin.git',
    livePreview: 'https://github.com'
  },

  {
    name: 'Schools Front-end',
    stack: ['MySQL2','Tailwindui','MUI','Next.JS'],
    sourceCode: 'https://github.com/giornn0/front-jardines.git',
    livePreview: 'https://github.com'
  },


  {
    name: 'Travel22',
    description:
      'Front end travel agency Webapp',
      stack: ['Javascript','CSS','React'],
    sourceCode: 'https://github.com/gabikohen/React-WebApp.git',
    livePreview: 'https://react-app-travel22.herokuapp.com/',
  }
]

const skills = [

  
  'JavaScript',
  'Node',
  'MySQL',
  'Sequelize',
  'Prisma',
  'HTML5',
  'CSS3',
  'Next',
  'React',
  'Redux',
  'Bootstrap',
  'Tailwindui.',
  'Material UI',
  'Git',
  'Methodology agile'


]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'gabokohen@gmail.com',
}

export { header, about, projects, skills, contact }
