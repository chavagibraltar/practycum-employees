import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useEffect, useState, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { getEmployees, addEmployee, deleteEmployee, setCurrentEmployee } from "../services/employeesService";
import AddEditEmployee from './addEditEmployee';
import Excel from '../excel';
import PrintButton from '../print';
//mui
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
//swal
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Icon } from "semantic-ui-react";




export default function Employees() {

    document.title = 'Employees';
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const employees = useSelector(state => state.employees.employees);
    const rows = employees;
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'tz', headerName: 'TZ', width: 130 },
        { field: 'startDate', headerName: 'Start Date', width: 130,type: 'Date', valueFormatter: params =>  dayjs(params?.value).format("YYYY-MM-DD")},
        {
            field: "delete",
            headerName: "",
            width: 100,
            renderCell: (params) => {               const { row } = params;
                return (
                    <Button
                        variant="outlined"
                        size="small"
                        color="error"
                        onClick={() => {
                            Swal.fire({
                                title: "Are you sure?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, delete it!"
                            }).then((result) => {
                                if (result.isConfirmed)
                                    dispatch(deleteEmployee(row?.id));
                                else if (
                                    result.dismiss === Swal.DismissReason.cancel
                                ) {
                                    swalWithBootstrapButtons.fire({
                                        title: "Cancelled",
                                        text: "Your employee details are safe :)",
                                        icon: "error"
                                    });
                                }
                            })
                        }}
                    >
                        <DeleteIcon />
                    </Button>
                );
            },
        },
        {
            field: "edit",
            headerName: "",
            width: 100,
            renderCell: (params) => {
                const { row } = params;
                return (
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                            dispatch(setCurrentEmployee(row.id,()=> navigate('/editEmployee')))
                        }}
                    >
                        <EditIcon />
                    </Button>
                );
            },
        },
    ];
    
    return (
        <>
            <PrintButton />
            <Excel />
            <Button variant="outlined"
                onClick={(e) => { navigate('/addEmployee'); }}
                icon="add user"
            >
                <Icon name="add user" />
                <b className="text">Add New Employee</b>
            </Button>
            <br />
            <div style={{ height: 640, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[10, 20]}
                    checkboxSelection
                />
            </div>
        </>
    );
}