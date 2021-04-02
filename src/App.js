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

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleSortDept() {
    if (!sort) {
      setEmployees(employees.sort((a, b) => (a.department > b.department) ? 1 : -1));
    } else {
      setEmployees(employees.sort((a, b) => (a.department, b.department) ? -1 : 1));
      setSort(false);
    }
  } 

  const employeeLowerCase = data.filter(
    employee => employee.last_name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  
}