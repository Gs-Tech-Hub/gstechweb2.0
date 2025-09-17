"use client"
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MdDelete } from 'react-icons/md';
import { PiWarningFill } from 'react-icons/pi';

export default function ConfirmationModal({ deleteBlog }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        deleteBlog()
    };

    return (
        <>
            {/*  */}
            <div className='cursor-pointer' onClick={handleClickOpen}><MdDelete size={25} /></div>
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
