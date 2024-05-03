
import './About.css'
import { Card } from 'primereact/card';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Fees from '../fee structure/fees';






function About() {

    return <div>

        <Card title="About Us" className='abtcrd'>
            <Card className='bg-y'><p>Welcome to Eagle School, a premier institution dedicated to fostering academic excellence, character development, and holistic growth.
                Situated in the vibrant city of Chennai, Eagle School has been a beacon of education since its establishment in 2024. With a commitment to
                nurturing future leaders and global citizens, we provide a dynamic learning environment where students are empowered to excel and make a positive
                impact on society.</p></Card>
            <Accordion activeIndex={0} className=''>
                <AccordionTab header="Facilities and Resources" className='crdcntnt'>
                    <p className="m-0 prcrdcntpta">
                        Our state-of-the-art campus features modern classrooms, well-equipped laboratories, a comprehensive library, and expansive sports
                        facilities to support the holistic development of our students. We believe in providing a stimulating environment where students can
                        explore their passions and pursue excellence in all areas of their lives.
                    </p>
                </AccordionTab>
                <AccordionTab header="Curriculum" className='crdcntnt'>
                    <p className="m-0">
                        Eagle School offers a rigorous academic curriculum that is enriched with opportunities for hands-on learning, critical thinking, and
                        creative expression. Our comprehensive program includes a wide range of subjects, extracurricular activities, and leadership development
                        initiatives to prepare students for success in the 21st century.
                    </p>
                </AccordionTab>
                <AccordionTab header="Community Involvement" className='crdcntnt'>
                    <p className="m-0">
                        As an integral part of the Chennai community, Eagle School actively engages in various outreach programs, social initiatives, and
                        environmental conservation efforts. Through partnerships with local organizations and community service projects, we instill in our
                        students a sense of responsibility, empathy, and global citizenship.
                    </p>
                </AccordionTab>
                <AccordionTab header="Sports" className='crdcntnt' >
                    <p className="m-0">
                        At Eagle School in Chennai, we are proud of our commitment to athletic excellence. Our comprehensive sports program offers students
                        the opportunity to participate in a variety of sports, from basketball to cricket, swimming to badminton. With state-of-the-art
                        facilities and dedicated coaching staff, we aim to not only develop skilled athletes but also instill values of sportsmanship, teamwork,
                        and resilience. Whether competing at local tournaments or representing the school on a national level, our students consistently demonstrate
                        their dedication and passion for sports, bringing honor to our institution and fostering a strong sense of school pride.

                    </p>
                </AccordionTab>
            </Accordion>
        </Card>

        {/* FEE STRUCTURE */}
        <Fees/>

        









    </div>
}

export default About