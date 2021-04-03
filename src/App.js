import React, {useState} from 'react';
import EmployeeCardList from './components/EmployeeCardList';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import Nav from './components/Nav';
import data from './data/employeeData.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ sort, setSort ] = useState(false);
  const [ name, setName ] = useState(data);
  // const [ employees, setEmployees ] = useState(data);

  const handleSearchTerm = event => {
    setSearchTerm(event.target.value)
  };

  const handleSortName = () => {
    console.log("clicked");
    if (!sort) {
      setName(name.sort((a, b) => (a.last_name > b.last_name) ? 1 : -1));
      setSort(true);
    } else {
      setName(name.sort((a, b) => (a.last_name > b.last_name) ? -1 : 1));
      setSort(false);
    };
  };

  return (
    <div style={{backgroundColor: "#f7f7f7"}}>
      <Header />
      <Container>
        <Layout>
            <h1 className="mb-5 text-center display-4">
              Scranton Branch - Employee Directory
            </h1>
            <Nav 
              onSearch={handleSearchTerm}
              searchTerm={searchTerm}
              handleSortDept={handleSortName}
            />
            <EmployeeCardList data={data}/>
          </Layout>
      </Container>
      <Footer />
    </div>
  )
}

export default App;