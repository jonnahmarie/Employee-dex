import React, {useState} from 'react';
import CardList from './components/CardList';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import Nav from './components/Nav';
import data from './data/employeeData.json';

function App() {
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ sort, setSort ] = useState(false);
  const [ employees, setEmployees ] = useState(data);

  const excludeColumns = ["id", "image", "title", "department", "email", "phone"];

  function handleSearchTerm(value) {
    setSearchTerm(value);
    filterData(value);
  }

  function filterData(value) {
    const lowercasedValue = value.toLowerCase().trim;
    if (lowercasedValue === "") {
      setEmployees(data);
    } else {
      const filteredData = dataList.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue));
      });
      setEmployees(filteredData);
    }
  }

  function handleSortDept() {
    if (!sort) {
      setEmployees(employees.sort((a, b) => (a.department > b.department) ? 1 : -1));
    } else {
      setEmployees(employees.sort((a, b) => (a.department, b.department) ? -1 : 1));
      setSort(false);
    }
  } 

  const filteredEmployees = data.filter(employee => employee.last_name.toLowerCase().startsWith(searchTerm.toLowerCase()));

  return (
    <div>
      <Header />
        <Layout>
          <h1>
            Employee Directory
          </h1>
          <Nav 
            onSearch={handleSearchTerm}
            searchTerm={searchTerm}
            handleSortDept={handleSortDept}
          />
          <CardList data={filteredEmployees}/>
        </Layout>
      <Footer />
    </div>
  )
  
}