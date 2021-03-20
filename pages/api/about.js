export default function(req, res) {
  const info = {
    name: 'Jorge Ossa',
    role: 'Frontend Developer',
    avatar: 'https://avatars.githubusercontent.com/u/3743350?v=4',
    contact: [
      {
        name: 'twitter',
        url: 'http://www.twitter.com/georgehossa/',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/jorgehossa/',
      },
      {
        name: 'github',
        url: 'https://github.com/georgehossa/',
      },
  ],
  description: 'A passionate designer and web developer, solving problems, and detail attention oriented.',
  projects: '/api/projects',
  }
  res.json(info);
}