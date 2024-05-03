import { Card } from "primereact/card"
import './AddTeacher.css'
// import './node_modules/primeflex/primeflex.css'
import 'primeflex/primeflex.css'


import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { Calendar } from "primereact/calendar";


import React, { useRef } from 'react';

import { Message } from 'primereact/message';


import { Toast } from 'primereact/toast';
import { InputText } from "primereact/inputtext";




function AddTeacher() {
    const [dates, setdates] = useState(null);

    const experHandle = (e) => {
        setdates(e.value);
        if (e.value && e.value.length === 2) {
            let startYear = e.value[0].getFullYear();
            let endYear = e.value[1].getFullYear();
            let years = endYear - startYear
            let startMonth = e.value[0].getMonth() + 1
            let endMonth = e.value[1].getMonth() + 1
            let months = endMonth - startMonth
            setformdata({
                ...formdata,
                experience: `${years} yrs and ${months} months`
            })
        }
    }

    const [errbrdr, seterrbrdr] = useState({
        err1: false,
        err2: false,
        err3: false,
        err4: false,
        err5: false,
        err6: false,

    })

    const toast = useRef(null);
    const showToast = (severity, detail) => {
        toast.current.show({ severity, detail });
    };
    const emailIsValid = (email) => {
        const frmnt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return frmnt.test(email);
    };

    const submitHandler = () => {

        const isError =
            formdata.firstName.trim().length === 0 ||
            formdata.experience.trim().length === 0 ||
            formdata.qualification.trim().length === 0 ||
            !emailIsValid(formdata.emailId) ||
            formdata.qualification.trim().length === 0 ||
            formdata.dob.trim().length === 0 ||
            formdata.contactNumber.primaryNumber.trim().length === 0;

        if (isError) {
            // Set error states and show error message
            seterrbrdr({
                err1: formdata.firstName.trim().length === 0,
                err2: formdata.experience.trim().length === 0,
                err3: formdata.qualification.trim().length === 0,
                err4: !emailIsValid(formdata.emailId),
                err5: formdata.contactNumber.primaryNumber.trim().length === 0,
                err6 :formdata.dob.trim().length === 0,
            });
            showToast('error', 'Please fill out all mandatory fields');
        } else {
            // All fields are filled, proceed with data submission
            axios.post('http://localhost:3000/teachers', formdata)
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


    const [formdata, setformdata] = useState({
        id: '',
        firstName: "",
        lastName: "",
        gender: "",
        qualification: "",
        address: "",
        dob: "",
        experience: "",
        status: "",
        contactNumber: {
            primaryNumber: "",
            secondaryNumber: ""
        },
        coreSubject: " ",
        emailId: "",
        maritalStatus: "",
        class: {
            standard: "",
            section: ""
        },
        salaryDetails: {
            grade: "",
            salary: ""
        },

    })
    useEffect(() => {
        axios.get('http://localhost:3000/teachers')
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
                    <label htmlFor="qualification" className="mndrybtch">Qualification</label>
                    <input id="qualification"
                        type="text"
                        onChange={handler}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                    {errbrdr.err3 && <Message severity="error" text="please fill out this field" />}
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="primaryNumber" className="mndrybtch">Contact Number</label>
                    <input id="primaryNumber"
                        name="contactNumber"
                        type="number"
                        onChange={handler2}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                    {errbrdr.err5 && <Message severity="error" text="please fill out this field" />}
                </div>
                <div className="field col-12 md:col-2">
                    <label htmlFor="dob" className="mndrybtch">Date Of Birth</label>
                    <input id="dob"
                        type="date"
                        onChange={handler}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                    {errbrdr.err6 && <Message severity="error" text="please fill out this field" />}

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
                    <label htmlFor="coreSubject">Core Subject</label>
                    <input id="coreSubject"
                        type="text"
                        onChange={handler}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div className="field col-12 md:col-4">
                    <label htmlFor="standard">Standard</label>
                    <input id="standard"
                        name="class"
                        type="text"
                        onChange={handler2}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />

                </div>
                <div className="field col-12 md:col-4">
                    <label htmlFor="section">Section</label>
                    <select id="section" onChange={handler2} className="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" style={{ appearance: 'auto' }}>
                        <option>select</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>
                    {/* <input id="section" name="class" onChange={handler2} type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" /> */}

                </div>
                <div className="field col-12">
                    <label htmlFor="address">Address</label>
                    <textarea id="address" onChange={handler} type="text" rows="4" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></textarea>
                </div>
                <div className="field col-12 md:col-6">
                    <label htmlFor="emailId" className="mndrybtch">Email Id</label>
                    <input id="emailId" onChange={handler} type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                    {errbrdr.err4 && <Message severity="error" text="please fill out this field" />}
                </div>

                {/* <div className="field col-12 md:col-3">
                    <label HTMLfor="coreSubject">Core Subject</label>
                    <input id="coreSubject" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div className="field col-12 md:col-3">
                    <label HTMLfor="experience">Experience</label>
                    <input id="experience" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />

                </div> */}
                <div className="field col-12 md:col-3">
                    <label htmlFor="maritalStatus">Marital Status</label>
                    <input id="maritalStatus" onChange={handler} type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="secondaryNumber">Secondary Contact Number</label>
                    <input id="secondaryNumber" name="contactNumber" onChange={handler2} type="number" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />

                </div>
                <div className=" field col-12 md:col-3">
                    <label htmlFor="experience" className="mndrybtch">Experience</label>
                    <Calendar value={dates}
                        onChange={experHandle}
                        id="experience"
                        className="text-base text-color surface-overlay  surface-border border-round appearance-none outline-none focus:border-primary w-full"
                        selectionMode="range" readOnlyInput hideOnRangeSelection />
                    {errbrdr.err2 && <Message severity="error" text="please fill out this field" />}
                </div>
                {/* <div className="field col-12 md:col-3">
                    <label htmlFor="experience">Experience</label>
                    <input id="experience" onChange={handler} type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div> */}
                <div className="field col-12 md:col-3">
                    <label htmlFor="status">Status</label>
                    <select id="status" onChange={handler} className="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" style={{ appearance: 'auto' }}>
                        <option>select</option>
                        <option>Active</option>
                        <option>Non Active</option>
                    </select>
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="grade">Salary Grade</label>
                    <input id="grade" name="salaryDetails" onChange={handler2} type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="salary">Salary</label>
                    <input id="salary" name="salaryDetails" onChange={handler2} type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
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
export default AddTeacher