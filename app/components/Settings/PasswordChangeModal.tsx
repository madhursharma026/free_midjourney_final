import Modal from '../common/Modal';

const PasswordChangeModal = ({ handlePasswordUpdate, isUpdatingPassword, setShowPasswordUpdateModal, showPasswordUpdateModal }) => (
    <Modal className='password-change-modal' title="Password Change" show={showPasswordUpdateModal} onClose={() => setShowPasswordUpdateModal(false)}>
        <form onSubmit={handlePasswordUpdate} className='space-y-3'>
            <input type='password' name="oldPassword" className='bg-gray-50 w-full p-2 rounded-md border-1 border-gray-400 outline-none active:border-gray-700 focus:border-gray-700' placeholder='Current Password' />
            <input type='password' name="newPassword" className='bg-gray-50 w-full p-2 rounded-md border-1 border-gray-400 outline-none active:border-gray-700 focus:border-gray-700' placeholder='New Password' />
            <input type='password' name="confirmPassword" className='bg-gray-50 w-full p-2 rounded-md border-1 border-gray-400 outline-none active:border-gray-700 focus:border-gray-700' placeholder='Confirm Password' />
            <button className='pq-button-flat' disabled={isUpdatingPassword}>
                {isUpdatingPassword ? "Updating..." : "Update"}
            </button>
        </form>
    </Modal>
);

export default PasswordChangeModal;