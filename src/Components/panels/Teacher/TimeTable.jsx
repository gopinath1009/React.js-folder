import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Timetable = () => {
    const [timetable, setTimetable] = useState({});
    const [selectedDay, setSelectedDay] = useState(new Date().getDay()); // Default to current day

    useEffect(() => {
        // Simulated timetable data for demonstration
        const staticTimetableData = {
            0: {
                "08:00 - 09:00": "Class 1",
                "09:00 - 10:00": "Class 2",
                "10:00 - 11:00": "Class 3",
                "11:00 - 12:00": "Class 4",
                "12:00 - 13:00": "Class 5",
                "13:00 - 14:00": "Class 6",
                "14:00 - 15:00": "Class 7",
                "15:00 - 16:00": "Class 8",
                // Add more time slots for Sunday as needed
            },
            1: {
                "08:00 - 09:00": "Class 1",
                "09:00 - 10:00": "Class 2",
                "10:00 - 11:00": "Class 3",
                "11:00 - 12:00": "Class 4",
                "12:00 - 13:00": "Class 5",
                "13:00 - 14:00": "Class 6",
                "14:00 - 15:00": "Class 7",
                "15:00 - 16:00": "Class 8",
                // Add more time slots for Monday as needed
            },
            2: {
                "08:00 - 09:00": "Class 1",
                "09:00 - 10:00": "Class 2",
                "10:00 - 11:00": "Class 3",
                "11:00 - 12:00": "Class 4",
                "12:00 - 13:00": "Class 5",
                "13:00 - 14:00": "Class 6",
                "14:00 - 15:00": "Class 7",
                "15:00 - 16:00": "Class 8",
                // Add more time slots for Tuesday as needed
            },
            3: {
                "08:00 - 09:00": "Class 1",
                "09:00 - 10:00": "Class 2",
                "10:00 - 11:00": "Class 3",
                "11:00 - 12:00": "Class 4",
                "12:00 - 13:00": "Class 5",
                "13:00 - 14:00": "Class 6",
                "14:00 - 15:00": "Class 7",
                "15:00 - 16:00": "Class 8",
                // Add more time slots for Wednesday as needed
            },
            4: {
                "08:00 - 09:00": "Class 1",
                "09:00 - 10:00": "Class 2",
                "10:00 - 11:00": "Class 3",
                "11:00 - 12:00": "Class 4",
                "12:00 - 13:00": "Class 5",
                "13:00 - 14:00": "Class 6",
                "14:00 - 15:00": "Class 7",
                "15:00 - 16:00": "Class 8",
                // Add more time slots for Thursday as needed
            },
            5: {
                "08:00 - 09:00": "Class 1",
                "09:00 - 10:00": "Class 2",
                "10:00 - 11:00": "Class 3",
                "11:00 - 12:00": "Class 4",
                "12:00 - 13:00": "Class 5",
                "13:00 - 14:00": "Class 6",
                "14:00 - 15:00": "Class 7",
                "15:00 - 16:00": "Class 8",
                // Add more time slots for Friday as needed
            },
            6: {
                "08:00 - 09:00": "Class 1",
                "09:00 - 10:00": "Class 2",
                "10:00 - 11:00": "Class 3",
                "11:00 - 12:00": "Class 4",
                "12:00 - 13:00": "Class 5",
                "13:00 - 14:00": "Class 6",
                "14:00 - 15:00": "Class 7",
                "15:00 - 16:00": "Class 8",
                // Add more time slots for Saturday as needed
            },
        };
        setTimetable(staticTimetableData);
    }, []);

    const days = [
        { name: 'Sunday', code: 0 },
        { name: 'Monday', code: 1 },
        { name: 'Tuesday', code: 2 },
        { name: 'Wednesday', code: 3 },
        { name: 'Thursday', code: 4 },
        { name: 'Friday', code: 5 },
        { name: 'Saturday', code: 6 },
    ];
    

    const handleDayChange = (e) => {
        setSelectedDay(parseInt(e.value));
    };

    return (
        <div>
            <h2>Teacher's Timetable</h2>
            <div>
                <label>Select Day: </label>
                <Dropdown value={selectedDay} options={days} optionLabel="name" onChange={handleDayChange} placeholder="Select a Day" />
            </div>
            <DataTable value={Object.entries(timetable[selectedDay] || {})} paginator rows={5} emptyMessage="No classes found">
                <Column field="0" header="Time Slot" />
                <Column field="1" header="Class" />
            </DataTable>
        </div>
    );
};

export default Timetable;
