import { formatDate } from "@/utils/helpers";
import Link from "next/link";

const Subscription = ({ subscriptionDetails, minimumCreditLimit }) => (
    <div className='mt-16'>
        <h3 className="text-white font-Mona_Regular text-xl tracking-wide mb-6">Subscription</h3>
        <div className="grid grid-cols-2 gap-5">
            {subscriptionDetails ? (
                <>
                    <div className='bg-sky-700 rounded-lg p-6 min-h-40'>
                        <div className='flex items-center justify-between mb-4'>
                            <span>
                                <h3 className='m-0 text-white font-Mona_Bold tracking-wider text-base'>{subscriptionDetails?.credits} Credits Left</h3>
                                <p className='m-0'>{subscriptionDetails?.email}</p>
                            </span>
                            {subscriptionDetails?.credits <= minimumCreditLimit && <Link href="/pricing" className='inline-block text-white bg-sky-950 text-xs p-2 rounded-md tracking-wide active:scale-95'>Add Credit</Link>}
                        </div>

                        <div className='flex justify-start'>
                            <div className='status'>
                                <h6 className="text-xs text-gray-500">Billing Price</h6>
                                <p className="text-white text-xs">${subscriptionDetails?.amount}</p>
                            </div>
                            <div className='status'>
                                <h6 className="text-xs text-gray-500">Payment at</h6>
                                <p className="text-white text-xs">{formatDate(new Date(subscriptionDetails?.createdAt))}</p>
                            </div>
                            <div className='status'>
                                <h6 className="text-xs text-gray-500">Status</h6>
                                <p className='text-white text-xs'>{subscriptionDetails?.status}</p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className='bg-sky-700 rounded-lg p-6 min-h-40'>
                        <div className='flex align-items-center justify-content-between mb-4'>
                            <span>
                                <h3 className='m-0 text-white font-Mona_Bold tracking-wider text-base'>{subscriptionDetails?.credits} Credits Left</h3>
                                <p className='m-0'>{subscriptionDetails?.email}</p>
                            </span>
                            <Link href="/pricing" className='inline-block text-white bg-sky-950 text-xs p-2 rounded-md tracking-wide active:scale-95'>Add Credit</Link>
                        </div>

                        <h2 className="text-white text-xl tracking-wider font-Mona_Bold">No Current Plan</h2>
                        <p className='m-0 text-white text-xs tracking-wider'>No plan currently selected</p>
                    </div>
                </>
            )}
        </div>

    </div>
);

export default Subscription;