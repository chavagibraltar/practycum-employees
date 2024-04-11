import * as React from 'react';

import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Icon, Menu, MenuItem } from "semantic-ui-react";

import { getArchivEmployees, getEmployees } from './services/employeesService';
import { getRoles } from './services/roleService';
import { useDispatch } from 'react-redux';


export default function Header() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation()
    const [activeItem, setActiveItem] = useState();

    useEffect(() => {
        dispatch(getEmployees());
    }, [dispatch])

    useEffect(() => {
        dispatch(getRoles());
    }, [dispatch])

    useEffect(() => {
        dispatch(getArchivEmployees());
    }, [dispatch])

    const changeMenu = (name) => {
        setActiveItem(name)
        navigate(name)
    }

    useEffect(() => {
        setActiveItem(location.pathname.substring(1))
    }, [location])

    return <>
        <h1>Satisfied Employees, Successful Business!</h1>
        <Menu attached='top ' tabular secondary pointing className='sticky menu' id="header">
            <MenuItem className='menuItem'
                name='homepage'
                active={activeItem === 'homepage'}
                onClick={(e, data) => { changeMenu(data.name) }}
            >
                <Link to={"/homepage"} className="color textO" id="menu-item">
                    <Icon name="home" />
                    Home Page
                </Link>
            </MenuItem>

            <MenuItem
                name='employees'
                active={activeItem === 'employees'}
                onClick={(e, data) => { changeMenu(data.name) }}
            >
                <Link to={'/employees'} className="color text" id="menu-item">
                    <Icon name="users" />
                    Employees
                </Link>
            </MenuItem>

            <MenuItem
                name='addEmployee'
                active={activeItem === 'addEmployee'}
                onClick={(e, data) => { changeMenu(data.name) }}
            >
                <Link to={'/addEmployee'} className="color text" id="menu-item">
                    <Icon name="add user" />
                    Add Employee
                </Link>
            </MenuItem>

            <MenuItem
                name='roles'
                active={activeItem === 'roles'}
                onClick={(e, data) => { changeMenu(data.name) }}
            >
                <Link to={'/roles'} className="color text" id="menu-item" >
                    <Icon name="suitcase" />
                    Roles
                </Link>
            </MenuItem>

            {/* <MenuItem
                name='addRole'
                active={activeItem === 'addRole'}
                onClick={(e, data) => { changeMenu(data.name) }}
            >
                <Link to={'/addRole'} className="color text" id="menu-item">Add Role</Link>
            </MenuItem> */}

            <MenuItem
                name='archiv'
                active={activeItem === 'archiv'}
                onClick={(e, data) => { changeMenu(data.name) }}
            >
                <Link to={'/archiv'} className="color text" id="menu-item">
                    <Icon name="archive" />
                    Archives
                </Link>
            </MenuItem>

        </Menu >
    </>
}