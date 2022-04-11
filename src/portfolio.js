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
    'I am a Full Stack developer ',
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
  'SQL',
  'Sequelize',
  'Django',
  'React',
  'Redux',
  'HTML5',
  'CSS3',
  'Bootstrap',
  'Git',
  'Methodology agile'


]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'gabokohen@gmail.com',
}

export { header, about, projects, skills, contact }
