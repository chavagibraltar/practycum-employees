import axios from "axios";
import * as actionType from '../store/action';
import Swal from "sweetalert2";

export const getRoles = () => {
    return dispatch => {
        axios.get(`https://localhost:7029/api/Role`)
            .then(res => {
                dispatch({ type: actionType.SET_ROLES, payload: res.data })
            }).catch(err => console.log(err));
    };
};

export const addRole = (data) => {
    console.log("addRole service - date: ",data)
    return dispatch => {
        axios.post(`https://localhost:7029/api/Role`, {name:"aa"})
            .then(res => {
                dispatch({ type: actionType.ADD_ROLE, payload: res.data })
                Swal.fire({
                    title: "Added!!",
                    text: "The Role has been added.",
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