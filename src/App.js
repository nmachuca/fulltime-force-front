import React from 'react';
import { Header } from './components/Header';
import { Table } from './components/Table';
import { Footer } from './components/Footer';
import env from "react-dotenv";


function App() {

  const [repository, repositorySet] = React.useState([]);
  const [repositorySelected, repositorySelectedSet] = React.useState("0");
  const [commitList, commitListSet] = React.useState([]);

  React.useEffect(() => {
    fetch( env.BASE_API_URL + 'api/repos').then(response => response.json()).then(response => repositorySet(response.data.repositories));
  }, []);

  React.useEffect(() => {
    if (repositorySelected > 0) {
      fetch(env.BASE_API_URL + 'api/commits/' + repositorySelected).then(response => response.json()).then(response => commitListSet(response.data.commits));
    }
  }, [repositorySelected])

  return (
    <div>
      <Header />
      <section className='selector-section'>
        <div className='selector-container'>
          <select onChange={(e) => repositorySelectedSet(e.target.value)}>
            <option value="0">Seleccione un repositorio</option>
            {repository.map((a) => <option value={a.id} key={a.id}>{a.full_name}</option>)}
          </select>
        </div>
      </section>
      <section className='table-section'>
        <Table commitList={commitList}/>
      </section>
      <Footer />
    </div>
  );
}

export default App;
