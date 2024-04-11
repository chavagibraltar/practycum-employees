import React, { useState } from 'react';
import { FormInput, FormGroup, FormButton, Form, Container } from 'semantic-ui-react';
import { addRole } from '../services/roleService';
import { useDispatch } from 'react-redux';
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";

export default function AddRole() {

    const dispatch = useDispatch()
    const [name, setName] = useState("");

    const submit = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't have the option to edit the details again",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add it!"
        }).then((result) => {
            if (result.isConfirmed)
                dispatch(addRole(name))
            else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "The role have not yet been saved",
                    icon: "error"
                });
            }
        })
    }

    return (
        <>
        
            <h3 className='text'><b>Add New Role</b></h3>
            <Form
            >
                <FormGroup>
                    <FormInput
                        placeholder='Enter the role name'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <FormButton content='Submit' type="submit"
                        onClick={submit}
                    />
                </FormGroup>
            </Form>
        </>
    );
}