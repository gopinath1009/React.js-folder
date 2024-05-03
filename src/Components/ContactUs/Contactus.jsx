
import { Card } from 'primereact/card'
import scl_logo from '../../assets/school-logo.jpg'


import 'primeicons/primeicons.css';
import './Contactus.css'




function ContactUs() {
    return <div className='flex prntdiv'>
        <Card className='crdiv'>
            <div className='imgdiv'><img src={scl_logo} alt="" className='sclimg' /><span></span></div>
            <div className='sclnme'>Eagle School</div>
            <h1 className='h1tag'>Contact Us</h1>
            <div className='email'><span className="pi pi-envelope email1"></span> :<a href=" eagle@gmail.com"></a> eagle@gmail.com</div>
            <div className='email'><span className="pi pi-phone email1"></span> :<a href=" 9947798457"></a> 9947798457 <br />044-747727</div>
            <div className='email'><span className="pi pi-map-marker email1"></span> :<a href=" 9947798457"></a> cambridge,<br />london,Calgary,<br />AB T2G 4V1</div>
            <p className='size'>Bow Valley College is situated in Treaty 7 territory. We honour the territories and Peoples of the Blackfoot Confederacy: which includes the Siksika, Kainai,
                Piikani, and Amskapi Piikani (Blackfeet) First Nations; as well as the Îyâxe Nakoda: which includes the Goodstoney, Chiniki, and Bearspaw First Nations; and
                the Tsuut’ina First Nation. We also recognize the connection and autonomy of the Métis Nation of Alberta within the historical Northwest Métis homeland.</p>
            <div className='flex'>
                <div className='iconssdiv'><i className='pi pi-facebook iconss'></i></div>
                <div className='iconssdiv'><i className='pi pi-twitter iconss'></i></div>
                <div className='iconssdiv'><i className='pi pi-instagram iconss'></i></div>
                <div className='iconssdiv'><i className='pi pi-linkedin iconss'></i></div>
            </div>
        </Card>
        <Card className='crddiv2'>
            <iframe 
            title='Google Map'
            width='100%'
            height='400'
            style={{border:0}}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.226866413712!2d-75.16621078465958!3d39.953697679423726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c5ee266feb3f%3A0xe71e64cf74a44479!2sPhiladelphia%2C%20PA%2C%20USA!5e0!3m2!1sen!2sin!4v1616702040817!5m2!1sen!2sin" 
            frameborder="0"
            allowFullScreen=''
            aria-hidden='false'
            tabIndex='0'
            


            ></iframe>

        </Card>


    </div>
}
export default ContactUs