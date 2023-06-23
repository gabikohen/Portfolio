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
    'Software Developer | Project Manager | Business Strategist | Sales Enthusiast',
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
    description: 'E-commerce of sneakers',
    stack: ['Node.js', 'MySQL', 'HTML', 'CSS', 'EJS'],
    livePreview: 'https://sportshoes.onrender.com/',
  },

 
  {
    name: 'OneReach',
    description: 'Software Developer',
    stack: ['Javascript', 'CSS', 'HTML', 'UX', 'GPT-3'],
    livePreview: 'https://my-stg.onereach.ai/',
  },
]

const skills = [
  'Node',
  'SQL',
  'React',
  'Bootstrap',
  'Git',
  'GPT3',
  'Methodology agile',
  'Sales',
  'Product development',
  'Problem solving',
  'Project management',
  'Critical thinking',
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'gabokohen@gmail.com',
}

export { header, about, projects, skills, contact }
