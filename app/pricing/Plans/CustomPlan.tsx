import Link from "next/link";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import useAuth from "@/app/common/hooks/useAuth";
import { PayPalButton } from "react-paypal-button-v2";

const creditsPerUnit = +process.env.NEXT_PUBLIC_CREDITS_PER_UNIT;
const CustomPlan = () => {
    const { isLoggedIn } = useAuth();
    const [customPrice, setcustomPrice] = useState(15);
    const inputStyle = { width: `calc(${customPrice.toString().length}ch)` };

    return (
        <div className="bg-gray-50 pb-12 rounded-xl">
            <div className="bg-dark p-8 relative font-Mona_Bold rounded-lg">
                <span className="mb-4 capitalize block text-white text-2xl font-Mona_Medium">Custom</span>
                <div className="bg-slate-900 flex items-end justify-center border-1 border-solid border-gray-200 max-w-max m-auto rounded-lg py-1 px-2">
                    <div className="text-white font-Mona_Regular text-4xl leading-normal">$</div>
                    <input className="bg-transparent border-none outline-none text-white text-4xl mx-1 font-Mona_Medium px-0" type="number" value={customPrice} onChange={e => setcustomPrice(Number(e.target.value))} style={inputStyle} placeholder="0.00" />
                    <p className="text-white font-Mona_Bold text-base">/ {customPrice * creditsPerUnit} Credit</p>
                </div>
            </div>
            <ul className="p-8 space-y-3">
                <li className="flex items-center justify-between">
                    <span className="text">Max Image Resolution: 1024x1024</span>
                    <FaCheck />
                </li>
                <li className="flex items-center justify-between">
                    <span className="text">Custom Images Per Request</span>
                    <FaCheck />
                </li>
                <li className="flex items-center justify-between">
                    <span className="text">Fast Processing Generations</span>
                    <FaCheck />
                </li>
                <li className="flex items-center justify-between">
                    <span className="text">Commercial License</span>
                    <FaCheck />
                </li>
            </ul>
            <div className="px-4">
                {isLoggedIn ? (
                    <div className="px-4">
                        <PayPalButton amount={customPrice} onSuccess={(details) => alert("Payment Successfully, OrderId: " + details.id)} options={{ clientId: `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}` }} />
                    </div>
                ) : (
                    <div className="flex justify-center"><Link href="/auth/signin" className="pq-button-flat w-fit">Login Now</Link></div>
                )}
            </div>
        </div>
    )
};

export default CustomPlan;

