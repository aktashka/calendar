import React, { useState } from 'react';
import './modal.scss'
import Modal from "react-modal";
import Datetime from 'react-datetime';


function ModalWindow({ isOpen, onClose, onEventAdded }) {

    const [title, setTitle] = useState('')
    const [end, setEnd] = useState(new Date())
    const [start, setStart] = useState(new Date())


    const onSubmit = (event) => {
        event.preventDefault();

        onEventAdded({
            title,
            start,
            end
        })
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <div className='modal__wrapper'>
                <form onSubmit={onSubmit} action="">
                    <input className='input' type="text" placeholder='Title' onChange={e => setTitle(e.target.value)} />

                    <div>
                        <label>Start date</label>
                        <Datetime  value={start} onChange={date => setStart(date)} />
                    </div>
                    <div>
                        <label>End date</label>
                        <Datetime className='input' value={end} onChange={date => setEnd(date)} />
                    </div>

                    <button className='btn'>Add Event</button>
                </form>
            </div>
        </Modal>
    );
}

export default ModalWindow;