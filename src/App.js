import './App.scss';
import Layout from "./Layouts/layout";
import Hero from "./Pages/hero";
import Modal from 'react-modal';


Modal.setAppElement('#root');

function App() {
  return (
    <Layout>
      <Hero/>
    </Layout>
  );
}

export default App;
