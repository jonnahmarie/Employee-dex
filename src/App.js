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
  const [ dataset, setEmployees ] = useState(data);

  const handleSearchTerm = event => {
    setSearchTerm(event.target.value);
  };
  
  const handleSortFirstName = (event) => {
    event.stopPropagation();
    if (!sort) {
      setEmployees(dataset.sort((a, b) => (a.name > b.name) ? 1 : -1));
      setSort(true);
    } else {
      setEmployees(dataset.sort((a, b) => (a.name > b.className) ? -1 : 1));
      setSort(false);
    };
  };

  const handleSortLastName = (event) => {
    event.stopPropagation();
    if (!sort) {
      setEmployees(dataset.sort((a, b) => (a.name.split(' ')[1] > b.name.split(' ')[1]) ? 1 : -1));
      setSort(true);
    } else {
      setEmployees(dataset.sort((a, b) => (a.name.split(' ')[1] > b.name.split(' ')[1]) ? -1 : 1));
      setSort(false);
    };
  };

  const filteredEmployees =  dataset.filter(employee => employee.title.toLowerCase().includes(searchTerm.toLowerCase()))

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
              handleSortFirstName={handleSortFirstName}
              handleSortLastName={handleSortLastName}
            />
            <EmployeeCardList data={filteredEmployees}/>
          </Layout>
      </Container>
      <Footer />
    </div>
  )
}

export default App;