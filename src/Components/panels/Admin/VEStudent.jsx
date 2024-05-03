import axios from "axios"
import { Button } from "primereact/button"
// import { Calendar } from "primereact/calendar"
import { Card } from "primereact/card"
import { InputText } from "primereact/inputtext"
// import { InputText } from "primereact/inputtext"
import { Toast } from "primereact/toast"
import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"

function VEStudent() {
    const { userid, mode } = useParams();
    const [editdata, seteditdata] = useState({})
    const [data, setdata] = useState({})
    //   const [name, setname] = useState(null)


    const [btn, setbtn] = useState(false)
    const [editMode, seteditMode] = useState(false)

    useEffect(() => {
        if (mode === 'true') {
            setbtn(true);
            seteditMode(true);
        }
    }, [mode]);
    useEffect(() => {
        axios(`http://localhost:3000/students/${userid}`)
            .then((res) => {
                // setdata(res.data)
                seteditdata(res.data)
            })
    }, [])

    const handler = (e) => {
        let copydata = { ...editdata };
        copydata[e.target.id] = e.target.value
        seteditdata(copydata)
    }
    const handler2 = (e) => {
        let copydata2 = { ...editdata[e.target.name] };
        copydata2[e.target.id] = e.target.value
        seteditdata({
            ...editdata,
            [e.target.name]: copydata2
        });
    }


    const handlesumbit = () => {
        axios.put(`http://localhost:3000/students/${userid}`, editdata)
            .then((res) => {
                showToast('success', 'Your Data is resubmmited.');
                seteditMode(false);
                setbtn(false);
            })
    }

    const toast = useRef(null);
    const showToast = (severity, detail) => {
        toast.current.show({ severity, detail });
    };

    return <>
        <Toast ref={toast} />
        <Card title={`ID NO: ${editdata.id}`} className="formcrd">

            <div className="formgrid grid">
                <div className="field col-12 md:col-6 ">
                    <label htmlFor="firstName" className="mndrybtch">First name</label>
                    <input id="firstName"
                        type="text"
                        disabled={!editMode} value={editdata.firstName || ''}
                        onChange={handler}
                        className=" p-invalid mr-2 text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                    {/* {errbrdr.err1 && <Message severity="error" text="please fill out this field" />} */}
                </div>
                <div className="field col-12 md:col-6">
                    <label htmlFor="lastName">Last name</label>
                    <input id="lastName"
                        disabled={!editMode} value={editdata.lastName || ''}
                        type="text"
                        onChange={handler}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div className="field col-12 md:col-4">
                    <label htmlFor="dob" className="mndrybtch">Date Of Birth</label>
                    <input id="dob"
                        disabled={!editMode} value={editdata.dob || ''}
                        type="date"
                        onChange={handler}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                    {/* {errbrdr.err2 && <Message severity="error" text="please fill out this field" />} */}
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="age">AGE</label>
                    <input id="age"
                        disabled={!editMode} value={editdata.age || ''}
                        type="number"
                        onChange={handler}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div className="field col-12 md:col-2">
                    <label htmlFor="bloodGroup">Blood Group</label>
                    <input id="bloodGroup"
                        disabled={!editMode} value={editdata.bloodGroup || ''}
                        type="text"
                        onChange={handler}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="gender">Gender</label>
                    <select id="gender"
                        disabled={!editMode} value={editdata.gender || ''}
                        onChange={handler} className="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" style={{ appearance: 'auto' }}>
                        <option>male</option>
                        <option>female</option>
                    </select>
                </div>
                <div className="field col-12 md:col-4">
                    <label htmlFor="standard">Standard</label>
                    <input id="standard"
                        disabled={!editMode} value={editdata.standard || ''}
                        name="class"
                        type="text"
                        onChange={handler}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />

                </div>
                <div className="field col-12 md:col-4">
                    <label htmlFor="section">Section</label>
                    <select id="section" disabled={!editMode} value={editdata.section || ''} onChange={handler} className="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" style={{ appearance: 'auto' }}>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>
                </div>
                <div className="field col-12 md:col-4">
                    <label htmlFor="interests">Area of Interests</label>
                    <input id="interests"
                        disabled={!editMode} value={editdata.interests || ''}
                        type="text"
                        onChange={handler}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div className="field col-12 md:col-6 ">
                    <label htmlFor="fatherName" className="mndrybtch">Father name</label>
                    <input id="fatherName"
                        disabled={!editMode} value={editdata.fatherName || ''}
                        type="text"
                        onChange={handler}
                        className=" p-invalid mr-2 text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                    {/* {errbrdr.err3 && <Message severity="error" text="please fill out this field" />} */}
                </div>
                <div className="field col-12 md:col-6 ">
                    <label htmlFor="motherName" className="mndrybtch">Mother Name</label>
                    <input id="motherName"
                        disabled={!editMode} value={editdata.motherName || ''}
                        type="text"
                        onChange={handler}
                        className=" p-invalid mr-2 text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                    {/* {errbrdr.err4 && <Message severity="error" text="please fill out this field" />} */}
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="father">Father occupation</label>
                    <input id="father" disabled={!editMode} value={editdata.occupation?.father || ''} name="occupation" onChange={handler2} type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="mother">Mother occupation</label>
                    <input id="mother" disabled={!editMode} value={editdata.occupation?.mother || ''} name="occupation" onChange={handler2} type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="email" className="mndrybtch">Email Id</label>
                    <input id="email" disabled={!editMode} value={editdata.contact?.email || ''} name="contact" onChange={handler2} type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                    {/* {errbrdr.err5 && <Message severity="error" text="please fill out this field" />} */}
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="mobile" className="mndrybtch">Contact Number</label>
                    <input id="mobile" disabled={!editMode} value={editdata.contact?.mobile || ''} name="contact" type="number" onChange={handler2} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
                    {/* {errbrdr.err6 && <Message severity="error" text="please fill out this field" />} */}
                </div>
                <div className="field col-12">
                    <label htmlFor="address" className="mndrybtch">Address</label>
                    <textarea id="address" disabled={!editMode} value={editdata.address || ''} onChange={handler} type="text" rows="4" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></textarea>
                    {/* {errbrdr.err7 && <Message severity="error" text="please fill out this field" />} */}
                </div>
                <div className="md:col-6 text-center">
                    <a href="../Admin-panel"><Button label="GO BACK" severity="secondary" className='font-bold' icon="pi pi-arrow-circle-left" /></a>
                </div>
                {btn && <div className="md:col-6 text-center">
                    <Button label="SUBMMIT" severity="success" onClick={handlesumbit} className='font-bold' icon="pi pi-check-circle" />
                </div>}
            </div>


        </Card>



    </>
}


export default VEStudent