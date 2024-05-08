import React from 'react'
import Modal from './Modal'

const ConfirmationModal = ({ show, onClose, title, content, handleConfirm, isDeleting }) => {
  return (
    <Modal className='confirmation-modal' show={show} onClose={onClose}>
      <h2>{title}</h2>
      <p>{content}</p>
      <div className='modal-footer'>
        <button className='btn' onClick={onClose}>Cancel</button>
        <button className='btn' onClick={handleConfirm} disabled={isDeleting}>{isDeleting ? 'Deleting...' : 'Delete'}</button>
      </div>
      
    </Modal>
  )
}

export default ConfirmationModal