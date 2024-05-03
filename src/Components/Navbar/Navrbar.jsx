import './Navbar.css'
import scl_logo from '../../assets/school-logo.jpg'
import { Button } from 'primereact/button';



// import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"



import { Link } from 'react-router-dom';

import { Dropdown } from 'primereact/dropdown';
import { FloatLabel } from 'primereact/floatlabel';
import { useState } from 'react';
// import Admin from '../login/Admin';



function Navbar() {
    // const redirect = '/login'
    const [login,setlogin] = useState(false)
    
    function handle(){
        setlogin(!login)
    }

    return <div className='NavbarPrnt'>
        <div className='imgdiv'><img src={scl_logo} alt="" className='sclimg' /></div>
        <div className='sclnme'>Eagle School</div>
        <div className='ullist'>
            <ul className='ulname'>
                <Link className='linkbtn' to='/'><li>Home</li></Link>
                <Link className='linkbtn' to='/about'><li>About</li></Link>
                <Link className='linkbtn' to='/contact'><li>Contact Us</li></Link>
                <Button label="LOGIN" severity="info" outlined onClick={handle}/>
                {/* <FloatLabel>
                    <Dropdown inputId="LOGIN" value={selectedrole} onChange={handler} options={role} optionLabel="name" className="w-full" />
                    <label htmlFor="LOGIN">Login</label>
                </FloatLabel> */}
               
                {login && <div className='smlpage'>
                    <a href='../admin' target="_blank" rel="noopener noreferrer" className="p-button font-bold btnbtch">
                         Admin 
                    </a>
                    <a href="../teacher" target="_blank" rel="noopener noreferrer" className="p-button font-bold btnbtch">
                        Teacher
                    </a>
                    <a href="../parent" target="_blank" rel="noopener noreferrer" className="p-button font-bold btnbtch">
                        Parent
                    </a>

                </div>}

            </ul>


        </div>


    </div>

}

export default Navbar