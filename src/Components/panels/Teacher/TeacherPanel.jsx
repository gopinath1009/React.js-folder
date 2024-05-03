import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './TeacherPanel.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import Timetable from './TimeTable';
        


function TeacherPanel() {
    const { id } = useParams();
    const [teacherData, setTeacherData] = useState({});
    const [editmode, seteditmode] = useState(false);
    const [subBtn, setsubBtn] = useState(false);
    const [data, setdata] = useState([]);
    const [names, setnames] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/students')
            .then((res) => {
                setdata(res.data);
                const filteredNames = res.data.filter((ele) => (
                    teacherData.class?.standard === ele.standard && teacherData.class?.section === ele.section
                ));
                setnames(filteredNames);
            })
            .catch((error) => {
                console.error('Error fetching student data:', error);
            });
    }, [teacherData.class, id]);


    const [present, setpresent] = useState(false);

    const handleCheckboxChange = (e) => {
        setpresent(e.target.value)
    };


    const attnd = () => {

        return (
            <div >

                <input type="checkbox" 
                value={present}
                onChange={handleCheckboxChange}
                />

                {/* <TriStateCheckbox variant="filled"
                 value={present}
                  onChange={handleCheckboxChange} /> */}

               

            </div>
        );

    }





    const handleedit = () => {
        seteditmode(true)
        setsubBtn(true)
    }
    const handlesubit = () => {
        seteditmode(false)
        setsubBtn(false)
        axios.put(`http://localhost:3000/teachers/${id}`, teacherData)
            .then((res) => {
                alert('data updated')
            })

    }

    useEffect(() => {
        axios.get(`http://localhost:3000/teachers/${id}`)
            .then((res) => {
                setTeacherData(res.data);
            })
            .catch((error) => {
                console.error('Error fetching teacher data:', error);
            });
    }, [id]);


    const handler = (e) => {
        let copydata = { ...teacherData };
        copydata[e.target.id] = e.target.value
        setTeacherData(copydata)
    }
    const handler2 = (e) => {
        let copydata2 = { ...teacherData[e.target.name] };
        copydata2[e.target.id] = e.target.value
        setTeacherData({
            ...teacherData,
            [e.target.name]: copydata2
        });
    }


    return (
        <div className="card">
            <Card title={`ID ${teacherData.id}`} className='head'>Hi, {teacherData.firstName} welcome back</Card>
            <div className='table'>
                <table className="timetable">
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>{teacherData.id}</td>
                        </tr>
                        <tr>
                            <td>First Name</td>
                            <td>{teacherData.firstName}</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>{teacherData.lastName}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{teacherData.gender}</td>
                        </tr>
                        <tr>
                            <td>Qualification</td>
                            <td>{teacherData.qualification}</td>
                        </tr>
                        <tr>
                            <td>Email ID</td>
                            <td>{teacherData.emailId}</td>
                        </tr>

                        <tr>
                            <td>Date of Birth</td>
                            <td>{teacherData.dob}</td>
                        </tr>
                        <tr>
                            <td>Core Subject</td>
                            <td>{teacherData.coreSubject}</td>
                        </tr>
                        <tr>
                            <td>Standard</td>
                            <td>{teacherData.class?.standard}</td>
                        </tr>
                        <tr>
                            <td>Section</td>
                            <td>{teacherData.class?.section}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="timetable">
                    <tbody>
                        <tr>
                            <td>Primary Contact Number</td>
                            <td>{teacherData.contactNumber?.primaryNumber}
                                {editmode && <input id="primaryNumber" name='contactNumber'
                                    // disabled
                                    value={teacherData.contactNumber?.primaryNumber}
                                    type="text"
                                    onChange={handler2}

                                    className="bginptxt text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />}
                            </td>
                        </tr>
                        <tr>
                            <td>Secondary Contact Number</td>
                            <td>{teacherData.contactNumber?.secondaryNumber}
                                {editmode && <input id="secondaryNumber" name='contactNumber'
                                    // disabled
                                    value={teacherData.contactNumber?.secondaryNumber}
                                    type="text"
                                    onChange={handler2}

                                    className="bginptxt text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />}

                            </td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{teacherData.address}
                                {editmode && <input id="address"
                                    // disabled
                                    value={teacherData.address}
                                    type="text"
                                    onChange={handler}

                                    className="bginptxt text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />}
                            </td>
                        </tr>
                        <tr>
                            <td>Experience</td>
                            <td>{teacherData.experience}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>{teacherData.status}</td>
                        </tr>
                        <tr>
                            <td>Marital Status</td>
                            <td>{teacherData.maritalStatus}
                                {editmode && <input id="maritalStatus"
                                    // disabled
                                    value={teacherData.maritalStatus}
                                    type="text"
                                    onChange={handler}

                                    className="bginptxt text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full" />}

                            </td>
                        </tr>

                        <tr>
                            <td>Grade</td>
                            <td>{teacherData.salaryDetails?.grade}</td>
                        </tr>
                        <tr>
                            <td>Salary</td>
                            <td>{teacherData.salaryDetails?.salary}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="formgrid grid">

                <div className="md:col-6 text-center classbtn">
                    <Button label="Edit" onClick={handleedit} severity="secondary" className='font-bold' icon="pi pi-pencil" />
                </div>
                {subBtn && <div className="md:col-6 text-center">
                    <Button label="SUBMIT" severity="success" onClick={handlesubit} className='font-bold' icon="pi pi-check-circle" />
                </div>}
            </div>
            <Timetable className=' crdattnd' />

            <div>
                <Card title='Student Attendance' className='crdattnd' >

                    <DataTable value={names} tableStyle={{ minWidth: '30rem' }}>

                        <Column field="id" header="Student Id"></Column>
                        <Column field="standard" header="Standard"></Column>
                        <Column field="section" header="Section"></Column>
                        <Column field="firstName" header="NAME"></Column>
                        <Column body={attnd} header="ATTENDANCE"></Column>
                    </DataTable>
                    <h3>Total Present : 3</h3>
                    <Button label="SUBMIT" severity="success"  className='font-bold' icon="pi pi-check-circle" />

                    
                </Card>
            </div>





        </div >
    );
}

export default TeacherPanel;


// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import './TeacherPanel.css';
// import { Card } from 'primereact/card';
// import { Button } from 'primereact/button';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { TriStateCheckbox } from 'primereact/tristatecheckbox';

// function TeacherPanel() {
//     const { id } = useParams();
//     const [teacherData, setTeacherData] = useState({});
//     const [students, setStudents] = useState([]);

//     useEffect(() => {
//         axios.get(`http://localhost:3000/teachers/${id}`)
//             .then((res) => {
//                 setTeacherData(res.data);
//                 axios.get('http://localhost:3000/students')
//                     .then((res) => {
//                         const filteredStudents = res.data.filter((student) => (
//                             teacherData.class?.standard === student.standard && teacherData.class?.section === student.section
//                         ));
//                         // Initialize attendance state for each student
//                         const studentsWithAttendance = filteredStudents.map((student) => ({
//                             ...student,
//                             attendance: null // Initialize with null value
//                         }));
//                         setStudents(studentsWithAttendance);
//                     })
//                     .catch((error) => {
//                         console.error('Error fetching student data:', error);
//                     });
//             })
//             .catch((error) => {
//                 console.error('Error fetching teacher data:', error);
//             });
//     }, [id, teacherData.class]);

//     const handleCheckboxChange = (index, value) => {
//         setStudents((prevStudents) => {
//             const updatedStudents = [...prevStudents]; // Create a copy of the previous students array
//             const studentToUpdate = updatedStudents[index]; // Get the student at the specified index
//             if (studentToUpdate) { // Check if the student exists
//                 studentToUpdate.attendance = value; // Update the attendance property of the student
//             }
//             return updatedStudents; // Return the updated array
//         });
//     };
    
//     const attnd = (rowData, rowIndex) => {
//         return (
//             <div>
//                 <TriStateCheckbox
//                     variant="filled"
//                     value={students[rowIndex]?.attendance ?? null} // Use optional chaining and nullish coalescing operator
//                     onChange={(e) => handleCheckboxChange(rowIndex, e.value)} // Pass rowIndex to identify the student
//                 />
//             </div>
//         );
//     };
    

//     return (
//         <div className="card">
//             <Card title={`ID ${teacherData.id}`} className='head'>Hi, {teacherData.firstName} welcome back</Card>
//             <div>
//                 <Card title='Student Attendance' className='crdattnd' >
//                     {students.length > 0 && (
//                         <DataTable value={students} tableStyle={{ minWidth: '30rem' }}>
//                             <Column field="id" header="Student Id"></Column>
//                             <Column field="standard" header="Standard"></Column>
//                             <Column field="section" header="Section"></Column>
//                             <Column field="firstName" header="NAME"></Column>
//                             <Column body={attnd} header="ATTENDANCE"></Column>
//                         </DataTable>
//                     )}
//                     <h3>Total Present : 3</h3>
//                     <Button label="SUBMIT" severity="success" className='font-bold' icon="pi pi-check-circle" />
//                 </Card>
//             </div>
//         </div>
//     );
// }

// export default TeacherPanel;







