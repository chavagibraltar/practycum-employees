import axios from "axios";
import * as actionType from '../store/action'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const getEmployees = () => {
    return dispatch => {
        axios.get(`https://localhost:7029/api/Employee`)
            .then(res => {
                dispatch({ type: actionType.SET_EMPLOYEES, payload: res.data })
            }).catch(err => console.log(err));
    };
};

export const addEmployee = (data) => {
    return dispatch => {
        axios.post(`https://localhost:7029/api/Employee`, data)
            .then(res => {
                dispatch({ type: actionType.ADD_EMPLOYEE, payload: res.data })
                Swal.fire({
                    title: "Added!!",
                    text: "The Employee has been added.",
                    icon: "success"
                });
            }).catch(err => {
                console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            });
    };
};

export const deleteEmployee = (id) => {
    return dispatch => {
        axios.delete(`https://localhost:7029/api/Employee/${id}`)
            .then(() => {
                dispatch({ type: actionType.DELETE_EMPLOYEE, payload: id })
                dispatch(getEmployees())
                Swal.fire({
                    title: "Deleted!",
                    text: "The Employee has been deleted.",
                    icon: "success"
                });
            }).catch(err => {
                console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            });
    };
};

export const editEmployee = (data, id) => {
    return dispatch => {
        axios.put(`https://localhost:7029/api/Employee/${id}`, data)
            .then(res => {
                dispatch({ type: actionType.EDIT_EMPLOYEE, payload: res.data })
                Swal.fire({
                    title: "Updated!!",
                    text: "The Employee has been updated.",
                    icon: "success"
                });
                dispatch(deleteCurrentEmployee());
            }).catch(err => {
                console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            });
    };
}
//current
export const setCurrentEmployee = (id,callBack) => {
    return dispatch => {
        axios.get(`https://localhost:7029/api/Employee/${id}`)
            .then(res => {
                dispatch({ type: actionType.SET_CURRENT_EMPLOYEE, payload: res.data })
                callBack();
            }).catch(err => console.log(err));
    };
}

export const deleteCurrentEmployee = (id) => {
    return dispatch => {

        dispatch({ type: actionType.DELETE_CURRENT_EMPLOYEE })
        dispatch(getArchivEmployees);
    };
}

//Archiv
export const getArchivEmployees = () => {
    return dispatch => {
        axios.get(`https://localhost:7029/api/Employee`)
            .then(res => {
                dispatch({ type: actionType.SET_EMPLOYEES_ARCHIV, payload: res.data })
            }).catch(err => console.log(err));
    };
};

export const deleteArchivEmployee = (id) => {
    return dispatch => {
        axios.delete(`https://localhost:7029/api/employee/archiv/${id}`)
            .then(() => {
                dispatch({ type: actionType.DELETE_EMPLOYEE_ARCHIV, payload: id })
                // dispatch(getEmployees())
                dispatch(getArchivEmployees())
                Swal.fire({
                    title: "Restoerd!",
                    text: "The Employee's Desails has been Restoerd.",
                    icon: "success"
                });
            }).catch(err => {
                console.log(err);
                dispatch(getArchivEmployees())
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            });
    };
};