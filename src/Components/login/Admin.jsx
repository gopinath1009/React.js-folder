
import { Button } from 'primereact/button';

import "primeflex/primeflex.css";

import { InputText } from 'primereact/inputtext';

import 'primeicons/primeicons.css';
import { useEffect, useRef, useState } from 'react';
import './Admin.css'




import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';



import { useNavigate } from 'react-router-dom'

import { Message } from 'primereact/message';
import axios from 'axios';
import { Toast } from 'primereact/toast';
        


function Adminlogin() {
    const [data,setdata] = useState(null)
    const [IdValue,setIdValue] = useState('')
    const [dobValue,setdobValue] = useState('')
    const navigate = useNavigate()


    useEffect(()=>{
        axios.get('http://localhost:3000/teachers')
        .then((res)=>{
            setdata(res.data)
        })
    },[])

    const handle = (e)=>{
        setIdValue(e.target.value)
    }
    const handle2 = (e)=>{
        setdobValue(e.target.value)
    }

    const HadleAllow = ()=>{
        const ans = data.find((ele)=>
            ele.id === IdValue  && ele.dob === dobValue && ele.coreSubject === 'admin'
        )
        if (ans){
            navigate('/Admin-panel')
        }
        else{
            console.log('err')
            showToast('error', 'please enter the valid credential ');

        }

    }
    const toast = useRef(null);
    const showToast = (severity, detail) => {
        toast.current.show({ severity, detail });
    };


    return <div>
        <Toast ref={toast} />
        <div className="flex align-items-center justify-content-center">
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                <div className="text-center mb-5">
                    <div className="text-900 text-3xl font-medium mb-3">Welcome Back Admin</div>
                    <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer"> Admin login!</a>
                </div>

                <div>
                    <label htmlFor="Admin Id" className="block text-900 font-medium mb-2">Admin Id</label>
                    <InputText id="Admin Id" type="number" placeholder="Admin Id" className="w-full mb-3" value={IdValue} onChange={handle} />
                    {/* <label className='err'>{errmssg}</label> */}
                    {/* <Message text="Username is required" /> */}


                    <label htmlFor="DOB" className="block text-900 font-medium mb-2">Date of Birth</label>
                    <InputText id="DOB" type="date" placeholder="DOB" className="w-full mb-3" value={dobValue} onChange={handle2} />
                    {/* <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon /> */}
                    {/* <label className='err'>{errmssg2}</label> */}

                    <div className="flex align-items-center justify-content-between mb-6">
                    </div>

                    
                    <Button label="Login" severity="success" icon="pi pi-sign-in" className="w-full" onClick={HadleAllow} />
                </div>

            </div>
        </div>
    </div>
}
export default Adminlogin