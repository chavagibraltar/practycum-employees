// import logo from './logo.svg';
import React, { useState } from "react";
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

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

export default function App() {

  const [mode, setMode] = React.useState('light');
const theme = React.useMemo(
  () =>
    createTheme({
      palette: {
        mode,
      },
    }),
  [mode],
);

const toggleColorMode = () => {
  setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
}


  return (
    <div className={"App "+theme.palette.mode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <header className="App-header">
        <br />
        <Header></Header>
        {/* <AddEdit></AddEdit> */}
      </header>
      <body className="body">
      <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
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
      </ThemeProvider>
    </div>
  );
}

// export default App;

