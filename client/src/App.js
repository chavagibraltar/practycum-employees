// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Employees from './components/employees/employees';
// import AddEmployee from './components/employees/addEmployee';
import AddEditEmployee from './components/employees/addEditEmployee';
import HomePage from './components/homePage';
import Archiv from './components/archiv/archiv';
import Roles from './components/roles/roles';
import AddRole from './components/roles/addRole';

//mui
import '@fontsource/inter';
import AddEdit from './components/employees/addEditEmployee';

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <br />
        <Header></Header>
        {/* <AddEdit></AddEdit> */}
      </header>
      <body className="body">

        <Routes>
          <Route path="/" element={< HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/addEmployee" element={<AddEditEmployee />} />
          <Route path="/editEmployee" element={<AddEditEmployee />} />
          <Route path="/archiv" element={<Archiv />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/addRole" element={<AddRole />} />
        </Routes>
      </body>
      {/* <Employees />
        <AddEmployee /> */}
      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}

// export default App;

