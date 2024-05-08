const AccountManagement = ({ setShowDeleteAccountModal }) => (
    <div className='mt-16'>
        <h3 className='text-white font-Mona_Regular text-xl tracking-wide mb-6'>Account Management</h3>
        <p className="text-sm font-Mona_Regular mb-8">Remove profile information and delete your account.</p>
        <button className='pq-button-flat bg-none bg-red-600 hover:bg-none hover:bg-red-700' onClick={() => setShowDeleteAccountModal(true)}>
            Delete Account
        </button>
    </div>
);

export default AccountManagement;