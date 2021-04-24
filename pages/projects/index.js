import React from 'react';
import Layout from '../../components/Layout';
import { projects } from '../../data';
import ProjectCard from '../../components/ProjectCard'

const Projects = ({ projectsList }) => {
  const [allProjects, setAllProjects] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      // const request = await fetch('http://localhost:3000/api/projects');
      const request = await fetch('https://jorgehossa.netlify.app/api/projects');
      const response = await request.json();
      return setAllProjects(response);
    }
    // getData();
  }, []);
  return (
    <Layout>
      <h1>Projects</h1>
      {/* { allProjects.map(project => (<div key={project.id}>{project.name}</div>))} */}
      <div>
        { projectsList.map(project => (<ProjectCard key={project.id} project={project} />))}
      </div>
    </Layout>
  )
}
export async function getStaticProps(context) {
  return {
    props: { ...context.props, projectsList: projects },
  }
}



export default Projects;