"use client"
import Link from "next/link";
import { Button } from "react-bootstrap";
import CustomPlan from "./Plans/CustomPlan";
import useAuth from "../common/hooks/useAuth";
import React, { useEffect, useState } from "react";
import Container from "../components/Ui/Container";
import PlanWith5Dollar from "./Plans/PlanWith5Dollar";
import PlanWith10Dollar from "./Plans/PlanWith10Dollar";
import PlanWith50Dollar from "./Plans/PlanWith50Dollar";
import PlanWith70Dollar from "./Plans/PlanWith70Dollar";
import PageHeader from "../components/layout/PageHeader";

const Pricing = () => {
    const { isLoggedIn } = useAuth();
    const [loading, setLoading] = useState(false);
    const [activeTabs, setActiveTabs] = useState(1);
    const [lastSubscriptionID, setLastSubscriptionID] = useState('');

    useEffect(() => {
        setLastSubscriptionID(localStorage.getItem('subscriptionID'))
    })

    async function suspendSubscription() {
        setLoading(true)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic " + btoa("ATfgMsiPU5M2q5T7pJqUWPPn3Ibg8dNbTG8gwMZV6tNjarP8VUPIRjjT_fsQMsPGJE94dRj-NfVrTKij:ENFP3NsdNAY0aH6f5JV9_wKY7MBx1IpZoiuus0ACjtb1kT7YlWvKZmbOzKdD1oWserteAsz9QQtqLMsk"));
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        var urlencoded = new URLSearchParams();
        urlencoded.append("grant_type", "client_credentials");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded
        };
        fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", requestOptions)
            .then((response) => response.json())
            .then(result => {
                fetch(`https://api-m.sandbox.paypal.com/v1/billing/subscriptions/${lastSubscriptionID}/cancel`, {
                    body: JSON.stringify({
                        reason: "Customer-requested pause"
                    }),
                    headers: {
                        Authorization: `Bearer ${result.access_token}`,
                        "Content-Type": "application/json"
                    },
                    method: "POST"
                }).then(() => (localStorage.setItem('subscriptionID', ''), setLastSubscriptionID(''), setLoading(false), alert("Subscription Cancelled Successfully!")))
            }
            )
            .catch(error => (setLoading(false), alert(error)));
    }

    return (
        <main className="pricing-plan">
            <PageHeader title="Pricing" />
            <Container>
                <div className="pt-28 pb-10 text-center justify-center">
                    <div className="text-center mb-10">
                        <h3 className="heading pb-6">our pricing plan</h3>
                        <p className="text">AI image generators, often referred to as generative models or generative adversarial network are AI systems that can generate.</p>
                    </div>
                    <div className="row p-3 mb-4 border rounded" style={{ maxWidth: '450px', margin: 'auto' }}>
                        <div className={`col-6 fs-4 py-2 px-5 ${activeTabs === 1 ? 'border' : ''} rounded`} style={{ background: `${activeTabs === 1 ? '#FBFBFB' : ''}`, cursor: 'pointer' }} onClick={() => setActiveTabs(1)}>
                            Monthly
                        </div>
                        <div className={`col-6 fs-4 py-2 px-5 ${activeTabs === 2 ? 'border' : ''} rounded`} style={{ background: `${activeTabs === 2 ? '#FBFBFB' : ''}`, cursor: 'pointer' }} onClick={() => setActiveTabs(2)}>
                            Yearly
                        </div>
                    </div>
                    {activeTabs === 1 ?
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            <PlanWith5Dollar />
                            <PlanWith10Dollar />
                            <CustomPlan />
                        </div>
                        :
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            <PlanWith50Dollar />
                            <PlanWith70Dollar />
                            <CustomPlan />
                        </div>
                    }
                </div>
                {isLoggedIn ? (
                    <>
                        {loading ?
                            <div style={{ margin: 'auto', width: '30px' }}>
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            :
                            <>
                                {(lastSubscriptionID !== '') ?
                                    <div style={{ margin: 'auto', width: '300px' }}>
                                        <Button className="pq-button-flat w-100 mb-4" onClick={() => suspendSubscription()}>Cancel Last Subscription with ID: {lastSubscriptionID}</Button>
                                    </div>
                                    :
                                    <></>
                                }
                            </>
                        }
                    </>
                ) : (
                    <></>
                )}
                <div className="text-center pb-28">
                    <small className="text text-sm">Note: We're pleased to inform you that we currently accept PayPal transactions.</small>
                </div>
            </Container>
        </main >
    )
};

export default Pricing;

