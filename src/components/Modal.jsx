"use client"
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MdDelete } from 'react-icons/md';
import { PiWarningFill } from 'react-icons/pi';

export default function ConfirmationModal({ deleteProject, btn }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        deleteProject()
    };

    return (
        <>
            {
                btn === true ?
                    <button onClick={handleClickOpen} className={`px-4 py-1.5 cursor-pointer bg-[black] hover:bg-[#232121] font-bold text-white rounded-md focus:outline-none focus:ring-offset-2 `}>Delete</button>
                    :
                    <div className='cursor-pointer' onClick={handleClickOpen}><MdDelete size={25} /></div>
            }
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <PiWarningFill className='mx-[auto]' size={66} color='#f62222' />
                    <div className='font-bold text-[1.5rem] text-center'>{"Confirm Your action"}</div>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" className='text-[1.2rem]'>
                        Your about to delete this blog please confirm your action
                    </DialogContentText>
                </DialogContent>
                <DialogActions >
                    <div className='cursor-pointer pb-[1rem] mr-[1rem] text-black font-bold' onClick={() => setOpen(false)}>Cancel</div>
                    <div className='cursor-pointer pb-[1rem] mr-[1rem] text-black font-bold' onClick={handleClose}>Delete</div>
                </DialogActions>
            </Dialog>
        </>
    );
}
