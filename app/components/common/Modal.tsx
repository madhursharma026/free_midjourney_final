import React from 'react'

// import { Modal as BModal } from 'react-bootstrap'

// const Modal = ({show, onClose, children, title="", className=''}) => {
    
//   return (
//     <BModal show={show} className={className} centered onHide={onClose}>
//         {title && (
//           <BModal.Header>
//             <BModal.Title>{title}</BModal.Title>
//         </BModal.Header>
//         )}
//         <BModal.Body>
//             {children}
//         </BModal.Body>
//     </BModal>
//   )
// }

const Modal = ({show, onClose, children, title="", className=''}) => {

  return (
    <div className={`fixed inset-0 z-50 overflow-auto flex items-center justify-center ${show ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"} transition-opacity duration-300`}>
      <div onClick={onClose} className="modal-overlay absolute inset-0 bg-black opacity-50 z-[9]"></div>

      <div className={`modal-container bg-white mx-auto rounded shadow-lg z-50 overflow-y-auto relative ${className}`}>
        <div className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center p-3 text-white text-sm z-50" onClick={onClose}>
          <svg
            className="fill-current text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M18 1.8L16.2 0 9 7.2 1.8 0 0 1.8 7.2 9 0 16.2 1.8 18 9 10.8l7.2 7.2 1.8-1.8L10.8 9 18 1.8z"
            />
          </svg>
        </div>

        <div className={`modal-content py-4 text-left px-6`}>
          {title && (<div className='text-xl font-Mona_Bold tracking-wider mb-3'>{title}</div>)}
          <div className=''>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal