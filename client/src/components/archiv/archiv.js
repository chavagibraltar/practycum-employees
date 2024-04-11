import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteArchivEmployee } from "../services/employeesService";
import Excel from '../excel';
import PrintButton from '../print';
//mui
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
//samentic-ui
import { Icon } from "semantic-ui-react";
//swal
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Archiv() {

    document.title = 'Archives';
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const employeesArchiv = useSelector(state => state.employees.employeesArchiv);
    const rows = employeesArchiv;
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'tz', headerName: 'TZ', width: 130 },
        { field: 'startDate', headerName: 'Start Date', width: 130 },
        {
            field: "Restore",
            headerName: "",
            width: 100,
            renderCell: (params) => {
                const { row } = params;
                return (
                    <Button
                        variant="outlined"
                        size="small"
                        color="error"
                        onClick={() => {
                            Swal.fire({
                                title: "Are you sure?",
                                text: "The employee you selected will be restored in the system!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, restore it!"
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    dispatch(deleteArchivEmployee(row?.id));
                                }
                                else if (
                                    result.dismiss === Swal.DismissReason.cancel
                                ) {
                                    swalWithBootstrapButtons.fire({
                                        title: "Cancelled",
                                        text: "Employee details are archived",
                                        icon: "error"
                                    });
                                }
                            })
                        }}
                    >
                        <Icon name=
                            "redo" />
                    </Button>
                );
            },
        },
    ];

    return (
        <>
            <PrintButton />
            <Excel />
            {/* <Button variant="outlined"
                onClick={(e) => { navigate('/addEmployee'); }}
            >
                <b className="text">Add New Employee</b>
            </Button> */}
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