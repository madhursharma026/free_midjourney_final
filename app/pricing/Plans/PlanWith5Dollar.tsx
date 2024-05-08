import Link from "next/link";
import { useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import useAuth from "@/app/common/hooks/useAuth";

export default function PlanWith5Dollar() {
    const { isLoggedIn } = useAuth();
    const creditsPerUnit = +process.env.NEXT_PUBLIC_CREDITS_PER_UNIT;
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&vault=true&intent=subscription`;
        script.setAttribute('data-sdk-integration-source', 'button-factory');
        script.addEventListener('load', () => {
            window.paypal.Buttons({
                style: {
                    shape: 'rect',
                    color: 'gold',
                    layout: 'vertical',
                    label: 'subscribe'
                },
                createSubscription: function (data, actions) {
                    return actions.subscription.create({
                        /* Creates the subscription */
                        plan_id: `${process.env.NEXT_PUBLIC_PLAN_ID_OF_5_DOLLAR}`
                    });
                },
                onApprove: function (data, actions) {
                    localStorage.setItem('subscriptionID', data.subscriptionID)
                }
            }).render(`#paypal-button-container-${process.env.NEXT_PUBLIC_PLAN_ID_OF_5_DOLLAR}`);
        });
        document.body.appendChild(script);
    }, []);

    return (
        <div className="bg-gray-50 pb-12 rounded-xl">
            <div className="bg-dark p-8 relative font-Mona_Bold rounded-lg">
                <span className="mb-4 capitalize block text-white text-2xl font-Mona_Medium">Basic</span>
                <div className="flex items-end space-x-2 justify-center">
                    <h2 className="heading text-white font-Mona_Regular">$5.00</h2>
                    <p className="text-base inline-block text-white capitalize">/ {5 * creditsPerUnit} Credit</p>
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
            {isLoggedIn ? (
                <div className="px-4">
                    <div id={`paypal-button-container-${process.env.NEXT_PUBLIC_PLAN_ID_OF_5_DOLLAR}`}></div>
                </div>
            ) : (
                <div className="flex justify-center"><Link href="/auth/signin" className="pq-button-flat w-fit">Login Now</Link></div>
            )}
        </div>
    );
}

