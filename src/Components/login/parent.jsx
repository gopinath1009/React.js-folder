
import { Button } from 'primereact/button';

import "primeflex/primeflex.css";

import { InputText } from 'primereact/inputtext';

import 'primeicons/primeicons.css';
import { Toast } from 'primereact/toast';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
        
        

function Parentlogin() {
    const [data,setdata] = useState(null)
    const [IdValue,setIdValue] = useState('')
    const [dobValue,setdobValue] = useState('')
    const navigate = useNavigate()


    useEffect(()=>{
        axios.get('http://localhost:3000/students')
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
            ele.id === IdValue  && ele.dob === dobValue
        )
        if (ans){
            navigate(`/parent-panel/${ans.id}`)

            showToast('error', 'Error submitting data. Please try again later.');
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
                    {/* <img src="/demo/images/blocks/logos/hyper.svg" alt="hyper" height={50} className="mb-3" /> */}
                    <div className="text-900 text-3xl font-medium mb-3">Welcome Back Parent</div>
                    {/* <span className="text-600 font-medium line-height-3">Don't have an account?</span> */}
                    <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer"> Parent login!</a>
                </div>

                <div>
                    <label htmlFor="Student Id" className="block text-900 font-medium mb-2">Student Id</label>
                    <InputText id="Student Id"  value={IdValue}  onChange={handle} type="number" placeholder="Student Id" className="w-full mb-3" />

                    <label htmlFor="DOB" className="block text-900 font-medium mb-2">Date of Birth</label>
                    <InputText id="DOB" value={dobValue} onChange={handle2} type="date"  placeholder="DOB" className="w-full mb-3" />

                    <div className="flex align-items-center justify-content-between mb-6">
                        {/* <div className="flex align-items-center">
                            <Checkbox id="rememberme" onChange={e => setChecked(e.checked)} checked={checked} className="mr-2" />
                            <label htmlFor="rememberme">Remember me</label>
                        </div> */}
                        {/* <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a> */}
                    </div>

                    <Button label="Login" severity='success' onClick={HadleAllow} icon="pi pi-sign-in" className="w-full" />
                </div>
            </div>
        </div>

    </div>
}
export default Parentlogin