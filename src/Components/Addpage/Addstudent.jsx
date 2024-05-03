import { Card } from "primereact/card"
import './AddTeacher.css'
import 'primeflex/primeflex.css'
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { Calendar } from "primereact/calendar";
import React, { useRef } from 'react'
import { Message } from 'primereact/message';
import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";




function AddStudent() {


    const [formdata, setformdata] = useState({

        id: '',
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        age: '',
        standard: '',
        section: '',
        bloodGroup: '',
        interests: '',
        fatherName: '',
        motherName: '',
        occupation: {
            father: '',
            mother: ''
        },
        contact: {
            mobile: '',
            email: ''
        },
        address: '',


    })

    useEffect(() => {
        axios.get('http://localhost:3000/students')
            .then((res) => {
                let predata = (res.data)
                let prelastdata = predata[predata.length - 1]
                let lastId = prelastdata.id

                let newId = String(parseInt(lastId) + 1).padStart(3, '0');

                setformdata({
                    ...formdata,
                    id: newId
                })
            })

    }, [])


    const handler = (e) => {
        let copydata = { ...formdata };
        copydata[e.target.id] = e.target.value
        setformdata(copydata)
    }
    const handler2 = (e) => {
        let copydata2 = { ...formdata[e.target.name] };
        copydata2[e.target.id] = e.target.value
        setformdata({
            ...formdata,
            [e.target.name]: copydata2
        });
    }


    const emailIsValid = (email) => {
        const frmnt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return frmnt.test(email);
    };
    const [errbrdr, seterrbrdr] = useState({
        err1: false,
        err2: false,
        err3: false,
        err4: false,
        err5: false,
        err6: false,
        err7: false,

    })
    const submitHandler = () => {

        const isError =
            formdata.firstName.trim().length === 0 ||
            formdata.dob.trim().length === 0 ||
            formdata.fatherName.trim().length === 0 ||
            formdata.motherName.trim().length === 0 ||
            !emailIsValid(formdata.contact.email) ||
            formdata.contact.mobile.trim().length === 0 ||
            formdata.address.trim().length === 0;

        if (isError) {
            // Set error states and show error message
            seterrbrdr({
                err1: formdata.firstName.trim().length === 0,
                err2: formdata.dob.trim().length === 0,
                err3: formdata.fatherName.trim().length === 0,
                err4: formdata.motherName.trim().length === 0,
                err5: !emailIsValid(formdata.contact.email),
                err6: formdata.contact.mobile.trim().length === 0,
                err7: formdata.address.trim().length === 0,
            });
            showToast('error', 'Please fill out all mandatory fields');
        } else {
            // All fields are filled, proceed with data submission
            axios.post('http://localhost:3000/students', formdata)
                .then((response) => {
                    showToast('success', 'Data submitted successfully');
                    setTimeout(() => {
                        window.location.reload();
                    }, 5000);
                })
                .catch((error) => {
                    showToast('error', 'Error submitting data. Please try again later.');
                });
        }
    };





    const toast = useRef(null);
    const showToast = (severity, detail) => {
        toast.current.show({ severity, detail });
    };
    return <div>
        <Toast ref={toast} />
        <Card title={`ID NO: ${formdata.id}`} className="formcrd">

            <div className="formgrid grid">
                <div className="field col-12 md:col-6 ">
                    <label htmlFor="firstName" className="mndrybtch">First name</label>
                    <InputText id="firstName"
                        type="text"
                        onChange={handler}
                        className=" p-invalid mr-2 text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                    {errbrdr.err1 && <Message severity="error" text="please fill out this field" />}
                </div>
                <div className="field col-12 md:col-6">
                    <label htmlFor="lastName">Last name</label>
                    <input id="lastName"
                        type="text"
                        onChange={handler}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div className="field col-12 md:col-4">
                    <label htmlFor="dob" className="mndrybtch">Date Of Birth</label>
                    <input id="dob"
                        type="date"
                        onChange={handler}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                    {errbrdr.err2 && <Message severity="error" text="please fill out this field" />}
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="age">AGE</label>
                    <input id="age"
                        type="number"
                        onChange={handler}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div className="field col-12 md:col-2">
                    <label htmlFor="bloodGroup">Blood Group</label>
                    <input id="bloodGroup"
                        type="text"
                        onChange={handler}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" onChange={handler} className="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" style={{ appearance: 'auto' }}>
                        <option>select</option>
                        <option>male</option>
                        <option>female</option>
                    </select>
                </div>
                <div className="field col-12 md:col-4">
                    <label htmlFor="standard">Standard</label>
                    <input id="standard"
                        name="class"
                        type="text"
                        onChange={handler}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />

                </div>
                <div className="field col-12 md:col-4">
                    <label htmlFor="section">Section</label>
                    <select id="section" onChange={handler} className="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" style={{ appearance: 'auto' }}>
                        <option>select</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>
                </div>
                <div className="field col-12 md:col-4">
                    <label htmlFor="interests">Area of Interests</label>
                    <input id="interests"
                        type="text"
                        onChange={handler}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div className="field col-12 md:col-6 ">
                    <label htmlFor="fatherName" className="mndrybtch">Father name</label>
                    <InputText id="fatherName"
                        type="text"
                        onChange={handler}
                        className=" p-invalid mr-2 text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                    {errbrdr.err3 && <Message severity="error" text="please fill out this field" />}
                </div>
                <div className="field col-12 md:col-6 ">
                    <label htmlFor="motherName" className="mndrybtch">Mother Name</label>
                    <InputText id="motherName"
                        type="text"
                        onChange={handler}
                        className=" p-invalid mr-2 text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                    {errbrdr.err4 && <Message severity="error" text="please fill out this field" />}
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="father">Father occupation</label>
                    <input id="father" name="occupation" onChange={handler2} type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="mother">Mother occupation</label>
                    <input id="mother" name="occupation" onChange={handler2} type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="email" className="mndrybtch">Email Id</label>
                    <input id="email" name="contact" onChange={handler2} type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                    {errbrdr.err5 && <Message severity="error" text="please fill out this field" />}
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="mobile" className="mndrybtch">Contact Number</label>
                    <input id="mobile" name="contact" type="number" onChange={handler2} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                    {errbrdr.err6 && <Message severity="error" text="please fill out this field" />}
                </div>
                <div className="field col-12">
                    <label htmlFor="address" className="mndrybtch">Address</label>
                    <textarea id="address" onChange={handler} type="text" rows="4" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></textarea>
                    {errbrdr.err7 && <Message severity="error" text="please fill out this field" />}
                </div>
                <div className="md:col-6 text-center">
                    <a href="../Admin-panel"><Button label="GO BACK" severity="secondary" className='font-bold' icon="pi pi-arrow-circle-left" /></a>
                </div>
                <div className="md:col-6 text-center">
                    <Button label="SUBMIT"
                        severity="success"
                        onClick={submitHandler}
                        className='font-bold' icon="pi pi-check-circle" />
                </div>
            </div>


        </Card>
    </div>


}
export default AddStudent
