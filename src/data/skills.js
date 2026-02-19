export const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'HTML', level: 'Advanced', icon: 'html' },
      { name: 'CSS', level: 'Advanced', icon: 'css' },
      { name: 'JavaScript', level: 'Advanced', icon: 'js' },
      { name: 'Java', level: 'Advanced', icon: 'java' },
      { name: 'Python', level: 'Intermediate', icon: 'python' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'React.js', level: 'Intermediate', icon: 'react' },
      { name: 'Node.js', level: 'Intermediate', icon: 'node' },
      { name: 'Express', level: 'Intermediate', icon: 'express' },
      { name: 'REST APIs', level: 'Intermediate', icon: 'api' },
    ],
  },
  {
    category: 'Tools & Other',
    items: [
      { name: 'GitHub', level: 'Advanced', icon: 'github' },
      { name: 'VS Code', level: 'Advanced', icon: 'vscode' },
      { name: 'Figma', level: 'Beginner', icon: 'figma' },
      { name: 'Jira', level: 'Beginner', icon: 'jira' },
    ],
  },
]

export const levelToPercent = {
  Beginner: 40,
  Intermediate: 70,
  Advanced: 90,
}
