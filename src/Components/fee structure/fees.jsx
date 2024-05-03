import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import React, { useRef } from "react";
import { Button } from 'primereact/button';
import './fees.css'





function Fees() {
    const stepperRef = useRef(null);
    return <div className='feediv'>
        <Card title="FEE STRUCTURE" className='bg-brown'>
            <p className="m-0">
                At Eagle School, we prioritize accessibility and transparency in our fees structure. Our
                 aim is to ensure that every student has the opportunity to excel academically, regardless 
                 of their financial background. We offer scholarships, financial aid, and flexible payment 
                 options to support families in meeting their educational expenses. Our administrative staff
                  are always available to provide assistance and answer any questions regarding our fees structure.<br/>
                  We understand that affordability plays a significant role in accessing education, which is why we strive 
                  to keep our fees reasonable while maintaining high standards of academic excellence and comprehensive 
                  student support services.<br/><br/>
                  <b>Please find below the fee structure for the academic year 2024 at Eagle School:</b>
            </p>
        </Card>
        <Divider layout="vertical" />
        <Card className='feep-card'>
            <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }}>
                <StepperPanel header="Pre-KG to 5th Standard:">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                            <ul>
                                <li><b>Admission Fee:</b> ₹10,000</li>
                                <li><b>Tuition Fee:</b> ₹20,000 per annum</li>
                                <li><b>Other Charges (if applicable):</b> ₹5,000 (for books and materials)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex pt-4 justify-content-end">
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                    </div>
                </StepperPanel>
                <StepperPanel header="6th to 8th Standard:">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                            <ul>
                                <li><b>Admission Fee:</b> ₹12,000</li>
                                <li><b>Tuition Fee:</b> ₹25,000 per annum</li>
                                <li><b>Other Charges (if applicable):</b> ₹7,000(for extracurricular activities)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex pt-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                    </div>
                </StepperPanel>
                <StepperPanel header="9th to 12th Standard:">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                        <ul>
                                <li><b>Admission Fee:</b> ₹15,000</li>
                                <li><b>Tuition Fee:</b> ₹30,000 per annum</li>
                                <li><b>Other Charges (if applicable):</b> ₹8,000(for laboratory  fees)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex pt-4 justify-content-start">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                    </div>
                </StepperPanel>
            </Stepper>
        </Card>
    </div>

}


export default Fees








