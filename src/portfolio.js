const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'GK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Gabriel Kohen',
  role: '',
  description:
    'Product Owner || Project Manager || Software Developer || Business Developer ',
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
 
  },

 
  {
    name: 'Travel22',
    description:
      'Front-End travel agency Webapp',
      stack: ['Javascript','CSS','React'],
    livePreview: 'https://react-app-travel22.herokuapp.com/',
  },
  {
  name: 'OneReach',
  description:
    'Software Developer',
    stack: ['Javascript','CSS','HTML','UX','GPT-3'],
  livePreview: 'https://my-stg.onereach.ai/',
  }
]

const skills = [

  
  'JavaScript',
  'Node',
  'SQL',
  'Sequelize',
  'Django',
  'React',
  'Redux',
  'HTML5',
  'CSS3',
  'Bootstrap',
  'Git',
  'Methodology agile',
   'GPT3'


]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'gabokohen@gmail.com',
}

export { header, about, projects, skills, contact }
