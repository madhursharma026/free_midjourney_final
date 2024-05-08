import Modal from '../common/Modal';

const DeleteAccountModal = ({ handleDeleteAccount, isDeletingAccount, setShowDeleteAccountModal, showDeleteAccountModal }) => (
    <Modal className='min-w-3xl' title="Delete Account!" show={showDeleteAccountModal} onClose={() => setShowDeleteAccountModal(false)}>
        <form onSubmit={handleDeleteAccount} className='space-y-3'>
            <input name="confirm" className='placeholder:text-sm bg-gray-50 w-full p-2 rounded-md border-1 border-gray-400 outline-none active:border-gray-700 focus:border-gray-700' placeholder='type CONFIRM DELETE to confirm' />
            <button className='inline-block text-red-600 font-Mona_Bold text-base' disabled={isDeletingAccount}>
                {isDeletingAccount ? "Deleting..." : "Delete"}
            </button>
        </form>
    </Modal>
);

export default DeleteAccountModal;