const LoginInfo = ({ user, setShowPasswordUpdateModal }) => (
    <div className='mt-6'>
        <h3 className="text-white font-Mona_Regular text-xl tracking-wide mb-6">Login info</h3>

        <table className="table-auto border-0">
            <tbody>
                <tr>
                    <td className='text-base text-gray-400 text-start border-0 p-2'>Username</td>
                    <td className='text-base text-white p-2 text-start border-0'>{user?.username}</td>
                    <td className="p-0 text-start border-0"></td>
                </tr>
                <tr>
                    <td className='text-base text-gray-400 text-start border-0 p-2'>Email</td>
                    <td className='text-base text-white p-2 text-start border-0'>{user?.email}</td>
                    <td className="p-0 text-start border-0"></td>
                </tr>
                <tr>
                    <td className='text-base text-gray-400 text-start border-0 p-2'>Password</td>
                    <td className='text-base text-white p-2 text-start border-0'>**************</td>
                    <td className="p-0 text-start border-0">
                        <button className='text-white underline text-xs' onClick={() => setShowPasswordUpdateModal(true)}>
                            Edit
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default LoginInfo;