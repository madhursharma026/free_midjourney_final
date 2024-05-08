import { formatDate } from "@/utils/helpers";

const BillingHistory = ({ orders }) => (
    <div className='mt-16'>
        <h3 className="text-white font-Mona_Regular text-xl tracking-wide mb-6">Billing History</h3>
        <div className='divider'></div>
        {orders?.length ?
            <table className="table-auto border-0">
                <thead>
                    <tr>
                        <th className="text-base text-gray-400 text-start border-0 p-2">Order ID</th>
                        <th className="text-base text-gray-400 text-start border-0 p-2">Credits</th>
                        <th className="text-base text-gray-400 text-start border-0 p-2">Amount</th>
                        <th className="text-base text-gray-400 text-start border-0 p-2">Status</th>
                        <th className="text-base text-gray-400 text-start border-0 p-2">Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td className='text-base text-white p-2 text-start border-0'>{order.id}</td>
                            <td className='text-base text-white p-2 text-start border-0'>{order.credits}</td>
                            <td className='text-base text-white p-2 text-start border-0'>{order.amount}</td>
                            <td className='text-base text-white p-2 text-start border-0'>{order.status}</td>
                            <td className='text-base text-white p-2 text-start border-0'>{formatDate(new Date(order.createdAt))}</td>
                        </tr>
                    ))}
                </tbody>
            </table> : <p className="text-gray-400">No Data found...</p>}
    </div>
);

export default BillingHistory;