import React from 'react';
import Layout from '../../components/Layout';

const Projects = () => {
  const [allProjects, setAllProjects] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      // const request = await fetch('http://localhost:3000/api/projects');
      const request = await fetch('https://jorgehossa.netlify.app/api/projects');
      const response = await request.json();
      return setAllProjects(response);
    }
    getData();
  }, []);
  return (
    <Layout>
      <h1>Projects</h1>
      { allProjects.map(project => (<div key={project.id}>{project.name}</div>))}
    </Layout>
  )
}



export default Projects;