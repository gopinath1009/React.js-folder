import React, { useState, useEffect } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

const Navbar2 = () => {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
        },
        {
            label: 'About',
            icon: 'pi pi-fw pi-info',
        },
        {
            label: 'Services',
            icon: 'pi pi-fw pi-cog',
        },
    ];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const startTemplate = (
        <div>
            <img alt="logo" src="logo.png" height="40" className="p-mr-2" />
            {!isMobile && <Menubar model={items} />}
        </div>
    );

    const endTemplate = (
        <div>
            {isMobile ? (
                <Button icon="pi pi-bars" className="p-button-rounded p-button-outlined p-button-sm p-mr-2" />
            ) : (
                <Button label="Login" className="p-button-sm p-mr-2" />
            )}
        </div>
    );

    return (
        <div>
            <div className="bglit">
                <Menubar start={startTemplate} end={endTemplate} />
            </div>
        </div>
    );
};

export default Navbar2;
