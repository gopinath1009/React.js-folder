import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import './TeacherPanel.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

function ParentPanel() {
    const { id } = useParams();
    const [studentdata, setstudentdata] = useState({});
    const [editmode, seteditmode] = useState(false);
    const [subBtn, setsubBtn] = useState(false);
    const [data, setdata] = useState([]);
    const [names, setnames] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:3000/students')
    //         .then((res) => {
    //             setdata(res.data);
    //             const filteredNames = res.data.filter((ele) => (
    //                 teacherData.class?.standard === ele.standard && teacherData.class?.section === ele.section
    //             ));
    //             setnames(filteredNames);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching student data:', error);
    //         });
    // }, [teacherData.class, id]);










    const handleedit = () => {
        seteditmode(true)
        setsubBtn(true)
    }
    const handlesubit = () => {
        seteditmode(false)
        setsubBtn(false)
        axios.put(`http://localhost:3000/students/${id}`, studentdata)
            .then((res) => {
                alert('data updated')
            })

    }

    useEffect(() => {
        axios.get(`http://localhost:3000/students/${id}`)
            .then((res) => {
                setstudentdata(res.data);
            })
            .catch((error) => {
                console.error('Error fetching teacher data:', error);
            });
    }, [id]);


    const handler = (e) => {
        let copydata = { ...studentdata };
        copydata[e.target.id] = e.target.value
        setstudentdata(copydata)
    }
    const handler2 = (e) => {
        let copydata2 = { ...studentdata[e.target.name] };
        copydata2[e.target.id] = e.target.value
        setstudentdata({
            ...studentdata,
            [e.target.name]: copydata2
        });
    }


    return (
        <div className="card">
            <Card title={`ID ${studentdata.id}`} className='head'>Hi, {studentdata.firstName} welcome back</Card>
            <div className='table'>
                <table className="timetable">
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>{studentdata.id}</td>
                        </tr>
                        <tr>
                            <td>First Name</td>
                            <td>{studentdata.firstName}</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>{studentdata.lastName}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{studentdata.gender}</td>
                        </tr>
                        <tr>
                            <td>Date Of Birth</td>
                            <td>{studentdata.dob}</td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>{studentdata.age}</td>
                        </tr>

                        <tr>
                            <td>Blood Group</td>
                            <td>{studentdata.bloodGroup}</td>
                        </tr>
                        <tr>
                            <td>Standard</td>
                            <td>{studentdata.standard}</td>
                        </tr>
                        <tr>
                            <td>Section</td>
                            <td>{studentdata.section}</td>
                        </tr>
                        <tr>
                            <td>Interest</td>
                            <td>{studentdata.interests}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="timetable">
                    <tbody>
                        
                        <tr>
                            <td>Father Name</td>
                            <td>{studentdata.fatherName}</td>
                        </tr>
                        <tr>
                            <td>Mother Name</td>
                            <td>{studentdata.motherName}</td>
                        </tr>
                        <tr>
                            <td>Father Occupation</td>
                            <td>{studentdata.occupation?.father}
                                {editmode && <input id="father" name='occupation'
                                    // disabled
                                    value={studentdata.occupation?.father}
                                    type="text"
                                    onChange={handler2}

                                    className="bginptxt text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />}
                            </td>
                        </tr>
                        <tr>
                            <td>Mother Occupation</td>
                            <td>{studentdata.occupation?.mother}
                                {editmode && <input id="mother" name='occupation'
                                    // disabled
                                    value={studentdata.occupation?.mother}
                                    type="text"
                                    onChange={handler2}

                                    className="bginptxt text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />}
                            </td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{studentdata.address}
                                {editmode && <input id="address"
                                    // disabled
                                    value={studentdata.address}
                                    type="text"
                                    onChange={handler}

                                    className="bginptxt text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />}
                            </td>
                        </tr>
                        <tr>
                            <td>Mobile No</td>
                            <td>{studentdata.contact?.mobile}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{studentdata.contact?.email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="formgrid grid">

                <div className="md:col-6 text-center">
                    <Button label="Edit" onClick={handleedit} severity="secondary" className='font-bold' icon="pi pi-pencil" />
                </div>
                {subBtn && <div className="md:col-6 text-center">
                    <Button label="SUBMMIT" severity="success" onClick={handlesubit} className='font-bold' icon="pi pi-check-circle" />
                </div>}
            </div>
            
            




        </div >
    );
}

export default ParentPanel;
