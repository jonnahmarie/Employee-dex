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
  // const [ role, setRole ] = useState(data.employees);

  const handleSearchTerm = value => {
    setSearchTerm(value);
    // filteredEmployees(value);
  };

  const handleSortName = (event) => {
    event.stopPropagation();
    if (!sort) {
      setEmployees(dataset.sort((a, b) => (a.last_name > b.last_name) ? 1 : -1));
      setSort(true);
    } else {
      setEmployees(dataset.sort((a, b) => (a.last_name > b.last_name) ? -1 : 1));
      setSort(false);
    };
  };

  // const filteredEmployees = (value) => {
  //   const lowercasedValue = value.toLowerCase().trim();
  //   const splitRoles = data.employees.title.toLowerCase().split(' ');
  //   const allRoles = Object.values(splitRoles).flat();
  //   const filteredRoles = [...new Set(allRoles)];

  //   if (lowercasedValue === "") {
  //     setRole(filteredRoles)
  //   } else {
  //     const filterData = role.filter(employee => filteredRoles.toLowerCase().startsWith(lowercasedValue));
  //     setRole(filterData);
  //   }
  // }

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
              handleSortName={handleSortName}
            />
            <EmployeeCardList data={data}/>
          </Layout>
      </Container>
      <Footer />
    </div>
  )
}

export default App;