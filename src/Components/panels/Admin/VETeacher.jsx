

import axios from "axios"
import { Button } from "primereact/button"
import { Calendar } from "primereact/calendar"
import { Card } from "primereact/card"
import { InputText } from "primereact/inputtext"
import { Toast } from "primereact/toast"
import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"


function VETeacher() {
  const { userid,mode } = useParams();
  const [editdata, seteditdata] = useState({})
  const [data, setdata] = useState({})
  const [name, setname] = useState(null)


  const [btn, setbtn] = useState(false)
  const [editMode, seteditMode] = useState(false)

  useEffect(() => {
    if (mode === 'true') {
      setbtn(true);
      seteditMode(true);
    }
  }, [mode]);
  
  const handlesumbit = () => {
    axios.put(`http://localhost:3000/teachers/${userid}`, editdata)
    .then((res)=>{
      showToast('success', 'Your Data is resubmmited.');
      seteditMode(false);
      setbtn(false);
    })
  }
      


  
  

  useEffect(() => {
        axios(`http://localhost:3000/teachers/${userid}`)
          .then((res) => {
            setdata(res.data)
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

    const toast = useRef(null);
    const showToast = (severity, detail) => {
        toast.current.show({ severity, detail });
    };

    return <div>
        <Toast ref={toast} />
      <Card title={`ID NO: ${editdata.id}`} className="formcrd">
        <div className="formgrid grid">
          <div className="field col-12 md:col-6 ">
            <label htmlFor="firstName" >First name</label>
            <input id="firstName" type="text" onChange={handler}
              disabled={!editMode} value={editdata.firstName || ''} className="  text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
          </div>
          <div className="field col-12 md:col-6">
            <label htmlFor="lastName">Last name</label>
            <input id="lastName" type="text" onChange={handler} disabled={!editMode} value={editdata.lastName || ''} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
          </div>
          <div className="field col-12 md:col-4">
            <label htmlFor="qualification" >Qualification</label>
            <input id="qualification" type="text" onChange={handler} disabled={!editMode} value={editdata.qualification || ''} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
          </div>
          <div className="field col-12 md:col-3">
            <label htmlFor="primaryNumber">Contact Number</label>
            <input id="primaryNumber" type="number" name="contactNumber" onChange={handler2} disabled={!editMode}
              value={editdata.contactNumber?.primaryNumber || ''}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
          </div>
          <div className="field col-12 md:col-2">
            <label htmlFor="dob">Date Of Birth</label>
            <input id="dob" type="date" onChange={handler} value={editdata.dob || ''} disabled={!editMode} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
          </div>
          <div className="field col-12 md:col-3">
            <label htmlFor="gender">Gender</label>
            <select id="gender" disabled={!editMode} onChange={handler} value={editdata.gender || ''} className="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" style={{ appearance: 'auto' }} >
              <option>select</option>
              <option>male</option>
              <option>female</option>
            </select>
          </div>
          <div className="field col-12 md:col-4">
            <label htmlFor="coreSubject">Core Subject</label>
            <input id="coreSubject" disabled={!editMode} onChange={handler} value={editdata.coreSubject || ''} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
          </div>
          <div className="field col-12 md:col-4">
            <label htmlFor="standard">Standard</label>
            <input id="standard" disabled={!editMode}
              value={editdata.class?.standard || ''}
              name="class" onChange={handler2}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
          </div>
          <div className="field col-12 md:col-4">
            <label htmlFor="section">Section</label>
            <input id="section" disabled={!editMode}
              value={editdata.class?.section || ''}
              name="class" onChange={handler2}
              className="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" style={{ appearance: 'auto' }} />
          </div>
          <div className="field col-12">
            <label htmlFor="address">Address</label>
            <textarea id="address" disabled={!editMode} onChange={handler} value={editdata.address || ''} type="text" rows="4" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></textarea>
          </div>
          <div className="field col-12 md:col-6">
            <label htmlFor="emailId">Email Id</label>
            <input id="emailId" disabled={!editMode} onChange={handler} value={editdata.emailId || ''} type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
          </div>
          <div className="field col-12 md:col-3">
            <label htmlFor="maritalStatus">Marital Status</label>
            <select id="maritalStatus" disabled={!editMode} onChange={handler} value={editdata.maritalStatus || ''} type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" >
              <option >select</option>
              <option >married</option>
              <option >unmarried</option>
            </select>
          </div>
          <div className="field col-12 md:col-3">
            <label htmlFor="secondaryNumber">Secondary Contact Number</label>
            <input id="secondaryNumber" disabled={!editMode}
              value={editdata.contactNumber?.secondaryNumber || ''}
              name="contactNumber" type="number" onChange={handler2}
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
          </div>
          <div className=" field col-12 md:col-3">
            <label htmlFor="experience">Experience</label>
            <input id="experience" disabled={!editMode} onChange={handler} value={editdata.experience || ''} className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
            {/* className="text-base text-color surface-overlay  surface-border border-round appearance-none outline-none focus:border-primary w-full" selectionMode="range" readOnlyInput hideOnRangeSelection /> */}
          </div>
          <div className="field col-12 md:col-3">
            <label htmlFor="status">Status</label>
            <select id="status" disabled={!editMode} onChange={handler} value={editdata.status || ''} className="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" style={{ appearance: 'auto' }} >
              <option>active</option>
              <option>Non active</option>
            </select>
          </div>
          <div className="field col-12 md:col-3">
            <label htmlFor="grade">Salary Grade</label>
            <input id="grade" disabled={!editMode} name="salaryDetails" onChange={handler2}
              value={editdata.salaryDetails?.grade || ''}
              type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
          </div>
          <div className="field col-12 md:col-3">
            <label htmlFor="salary">Salary</label>
            <input id="salary" disabled={!editMode} name="salaryDetails" onChange={handler2}
              value={editdata.salaryDetails?.salary || ''}
              type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />
          </div>
          <div className="md:col-6 text-center">
            <a href="../Admin-panel"><Button label="GO BACK" severity="secondary" className='font-bold' icon="pi pi-arrow-circle-left" /></a>
          </div>
          {btn && <div className="md:col-6 text-center">
            <Button label="SUBMMIT" severity="success" onClick={handlesumbit} className='font-bold' icon="pi pi-check-circle" />
          </div>}
        </div>


      </Card>

    </div>
  }

  export default VETeacher