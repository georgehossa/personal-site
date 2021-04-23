import React from 'react';
import Layout from '../../components/Layout';

const Projects = () => {
  const [allProjects, setAllProjects] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const request = await fetch('https://jorgehossa.netlify.app/api/projects');
      const response = await request.json();
      return setAllProjects(response);
    }
    getData();
  }, []);
  return (
    <Layout>
      <h1>Projects</h1>
    </Layout>
  )
}



export default Projects;