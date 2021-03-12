import styled from 'styled-components';
import Layout from '../components/Layout';
import Avatar from '../components/Avatar';
import Contact from '../components/Contact'


const Home = () => (
  <Layout>
    <Avatar size='200'/>
    <h1>Jorge Ossa</h1>
    <h3>Frontend Developer</h3>
    <Contact text='Keep in contact' linkedin github twitter />
  </Layout>
)

export default Home;