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
    'Frontend  | Project Manager | Data scientist | Machine learning',
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
    description: 'Chat Bots',
    stack: ['Javascript', 'CSS', 'HTML', 'UX', 'GPT-3'],
    livePreview: 'https://chat.staging.onereach.ai/03-jCoqDQhulcbPf6K5MIA/03vdqqk?loader=auto',
  },

  {
    name: 'Capital CAI',
    description: 'Finance',
    stack: ['React','Tailwind'],
    livePreview: 'https://capitalcai.com/',
  },


]

const skills = [
  'Python',
  'Pandas',
  'Scikit-learn',
  'SQL',
  'React',
  'tailwind',
  'Git',  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'gabokohen@gmail.com',
}

export { header, about, projects, skills, contact }
