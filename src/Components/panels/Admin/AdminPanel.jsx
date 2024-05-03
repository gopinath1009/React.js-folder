
import { Card } from 'primereact/card';
import './AdminPanel.css'
// import '../../Addpage/AddTeacher.jsx'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


import { Button } from 'primereact/button';
import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { ProductService } from './service/ProductService';
import { Toast } from 'primereact/toast';
// import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import axios from 'axios';
import { Skeleton } from 'primereact/skeleton';
import ViewTeacherModal from './VETeacher';
import { Link, useNavigate } from 'react-router-dom';



function Adminpanel() {
    const [data, setdata] = useState([])
    const [shade, setshade] = useState(true)
    const [globalFilter, setGlobalFilter] = useState(null);
    const [data2, setdata2] = useState([])
    const [shade2, setshade2] = useState(true)
    const [globalFilter2, setGlobalFilter2] = useState(null);



    useEffect(() => {
        axios.get('http://localhost:3000/teachers')
            .then((res) => {
                setdata(res.data)
                setshade(false)
            })

    }, [])
    useEffect(() => {
        axios.get('http://localhost:3000/students')
            .then((res) => {
                setdata2(res.data)
                setshade2(false)
            })

    }, [])
    
    const butn = (rowData) => {
        const handleDelete = (rowData) => {
            axios.delete(`http://localhost:3000/teachers/${rowData.id}`)
                .then(() => {
                    showToast('success', 'successfully deleted');
                })
                .catch((error) => {
                    showToast('error', 'Failed to delete');
                })
        }
        return <>
            <Toast ref={toast} />
            <Link to={`/View/${rowData.id}/false`} ><Button type="button" icon="pi pi-eye" rounded className='actbtn' /></Link>
            <Link to={`/View/${rowData.id}/true`} ><Button type="button" icon="pi pi-pencil" severity="warning" rounded className='actbtn' /></Link>
            {/* <Button type="button"  icon="pi pi-pencil" severity="warning" rounded className='actbtn' /> */}
            <Button type="button" icon="pi pi-trash" onClick={handleDelete} severity="danger" rounded className='actbtn' />
        </>
    }
    // student...
    const butn2 = (rowData) => {
        const handleDelete2 = (rowData) => {
            axios.delete(`http://localhost:3000/students/${rowData.id}`)
                .then(() => {
                    showToast('success', 'successfully deleted');
                })
                .catch((error) => {
                    showToast('error', 'Failed to delete');
                })
        }
        return <>
            <Toast ref={toast} />
            <Link to={`/View/student/${rowData.id}/false`} ><Button type="button" icon="pi pi-eye" rounded className='actbtn' /></Link>
            <Link to={`/View/student/${rowData.id}/true`} ><Button type="button" icon="pi pi-pencil" severity="warning" rounded className='actbtn' /></Link>
            {/* <Button type="button"  icon="pi pi-pencil" severity="warning" rounded className='actbtn' /> */}
            <Button type="button" icon="pi pi-trash" onClick={handleDelete2} severity="danger" rounded className='actbtn' />
        </>
    }
    const rightToolbarTemplate = () => {
        return (
            <div className="p-toolbar-group-right">
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
                <Button icon="pi pi-search" className="p-button-warning" />
            </div>
        );
    };
    // student....
    const rightToolbarTemplate2 = () => {
        return (
            <div className="p-toolbar-group-right">
                <InputText type="search" onInput={(e) => setGlobalFilter2(e.target.value)} placeholder="Search..." />
                <Button icon="pi pi-search" className="p-button-warning" />
            </div>
        );
    };
    // student...
    const leftToolbarTemplate2 = () => {
        return <>
            <a href="../Add-page-student" target="_blank">
                <Button label="ADD Student" className='addbtn font-bold' icon="pi pi-plus" />
            </a>
        </>
    }
    const leftToolbarTemplate = () => {
        return <>
            <a href="../Add-page-teacher" target="_blank">
                <Button label="ADD Teacher" className='addbtn font-bold' icon="pi pi-plus" />
            </a>
        </>
    }

    const toast = useRef(null);
    const showToast = (severity, detail) => {
        toast.current.show({ severity, detail });
    };

    return <div>

        <Card className='board'>
            Hi Admin, welcome Back
        </Card>
        <Card title="Here, Teacher Report" className='tble'>
            <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>
            <DataTable className='p-datatable-striped' globalFilter={globalFilter} value={data} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column body={(rowData) => butn(rowData)} header="Actions" style={{ minWidth: '12rem' }}></Column>
                <Column field="status" header="status" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="firstName" header="Name" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="gender" header="Gender" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="qualification" header="qualification" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="coreSubject" header="core Subject" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="class.standard" header="standard" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="class.section" header="section" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="maritalStatus" header="marital Status" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="address" header="address" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="contactNumber.primaryNumber" header="contact Number" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="contactNumber.secondaryNumber" header="contact Number" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="emailId" header="emailId" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="salaryDetails.salary" header="salary Details" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="salaryDetails.grade" header="salary Grade" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="experience" header="experience" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>    
            </DataTable>
        </Card>




        
        <Card title="Here, Student Report" className='tble'>
            <Toolbar className="mb-4" left={leftToolbarTemplate2} right={rightToolbarTemplate2}></Toolbar>
            <DataTable className='p-datatable-striped' globalFilter={globalFilter2} value={data2} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column body={(rowData) => butn2(rowData)} header="Actions" style={{ minWidth: '12rem' }}></Column>
                {/* <Column field="status" header="status" style={{ width: '25%' }} body={shade && <Skeleton />}></Column> */}
                <Column field="firstName" header="Name" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="gender" header="Gender" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="dob" header="DOB" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="age" header="AGE" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="standard" header="standard" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="section" header="section" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="bloodGroup" header="Blood Group" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="interests" header="Interests" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="fatherName" header="Father Name" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="motherName" header="Mother Name" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="occupation.father" header="Father Occupation" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="occupation.mother" header="Mother Occupation" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="contact.mobile" header="Mobile Number" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>
                <Column field="contact.email" header="Email Id" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>    
                <Column field="address" header="Address" style={{ width: '25%' }} body={shade && <Skeleton />}></Column>    
            </DataTable>
        </Card>

        
        {/* <Card title="Here, Student Report" className='tble'>
            <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>
            <DataTable ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"  header={header}>
                <Column selectionMode="multiple" exportable={false}></Column>
                <Column field="code" header="Code" sortable style={{ minWidth: '12rem' }}></Column>
                <Column field="name" header="Name" sortable style={{ minWidth: '16rem' }}></Column>
                <Column field="image" header="Image" body={imageBodyTemplate}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column>
                <Column field="category" header="Category" sortable style={{ minWidth: '10rem' }}></Column>
                <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
            </DataTable>

        </Card> */}




    </div>

}
export default Adminpanel