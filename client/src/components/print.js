import { useSelector } from "react-redux";
import React, { useState } from "react";
import { Icon, Modal, Select, Input } from "semantic-ui-react";
import { Button } from '@mui/material';


// import React from 'react';
// import { Button, Icon } from 'semantic-ui-react';

const PrintButton2 = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <Button icon labelPosition='left' variant="outlined" onClick={handlePrint}>
            <Icon name='print' className="text" />
            <b>print</b>
        </Button>
    );
};

export default PrintButton2;


//     const [open, setOpen] = useState(false);
//     const [selectedPrinter, setSelectedPrinter] = useState("");
//     const [numberOfCopies, setNumberOfCopies] = useState(1);
//     const employeess = useSelector(state => state.employees.employees);

//     const handlePrint = () => {
//         // קבלת רשימת המדפסות הזמינות
//         const printers = getPrinters();

//         // פתיחת חלון הדפסה
//         const printWindow = window.open('', 'PRINT');

//         // הדפסת כותרת
//         printWindow.document.write(`<h1>רשימת עובדים</h1>`);

//         // הדפסת כל עובד
//         employees.forEach(employee => {
//             printWindow.document.write(`
//         <div>
//           <h2>${employee.name}</h2>
//           <p>${employee.email}</p>
//           <p>${employee.jobTitle}</p>
//         </div>
//       `);
//         });

//         // הדפסה (לא נתמך בכל הדפדפנים)
//         printWindow.print();

//         // סגירת חלון הדפסה
//         printWindow.close();

//         setOpen(false);
//     };

//     return (
//         <div>
//             <Button onClick={() => setOpen(true)}>
//                 <Icon name="print" />
//                 הדפס רשימה
//             </Button>
//             <Modal open={open} onClose={() => setOpen(false)}>
//                 <Modal.Header>הדפס רשימת עובדים</Modal.Header>
//                 <Modal.Content>
//                     <p>האם אתה בטוח שברצונך להדפיס את רשימת העובדים?</p>
//                     <Select
//                         options={printers.map(printer => ({ key: printer.name, value: printer.name, text: printer.name }))}
//                         value={selectedPrinter}
//                         onChange={(e, { value }) => setSelectedPrinter(value)}
//                     />
//                     <Input
//                         type="number"
//                         min={1}
//                         value={numberOfCopies}
//                         onChange={(e) => setNumberOfCopies(e.target.value)}
//                     />
//                 </Modal.Content>
//                 <Modal.Actions>
//                     <Button onClick={handlePrint}>הדפס</Button>
//                     <Button onClick={() => setOpen(false)}>ביטול</Button>
//                 </Modal.Actions>
//             </Modal>
//         </div>
//     );
// }

// export default PrintButton;


// // function PrintButton() {
// export default function PrintButton() {

//     const [open, setOpen] = useState(false);

//     const employees = useSelector(state => state.employees.employees);
//     const handlePrint = () => {
//         // הדפס את רשימת העובדים
//         // ...
//         // קבלת רשימת העובדים (השתמש בקוד שלך)


//         // פתיחת חלון הדפסה
//         const printWindow = window.open('', 'PRINT');

//         // הדפסת כותרת
//         printWindow.document.write(`<h1>רשימת עובדים</h1>`);

//         // הדפסת כל עובד
//         employees.forEach(employee => {
//             printWindow.document.write(`
//                 <div>
//                     <h2>${employee.firstName}</h2>
//                     <p>${employee.firstName}</p>
//                     <p>${employee.tz}</p>
//                 </div>
//             `);
//         });

//         // סגירת חלון הדפסה
//         // printWindow.close();
//         setOpen(false);
//     };

//     return (
//         <div>
//             <Button onClick={() => setOpen(true)}>
//                 <Icon name="print" />
//                 הדפס רשימה
//             </Button>
//             <Modal open={open} onClose={() => setOpen(false)}>
//                 <Modal.Header>הדפס רשימת עובדים</Modal.Header>
//                 <Modal.Content>
//                     <p>האם אתה בטוח שברצונך להדפיס את רשימת העובדים?</p>
//                 </Modal.Content>
//                 <Modal.Actions>
//                     <Button onClick={handlePrint}>הדפס</Button>
//                     <Button onClick={() => setOpen(false)}>ביטול</Button>
//                 </Modal.Actions>
//             </Modal>
//         </div>
//     );
// }

