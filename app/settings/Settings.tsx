'use client';

import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import LoginInfoSection from '../components/Settings/LoginInfo';
import SubscriptionSection from '../components/Settings/Subscription';
import BillingHistorySection from '../components/Settings/BillingHistory';
import AccountManagementSection from '../components/Settings/AccountManagement';
import PasswordChangeModal from '../components/Settings/PasswordChangeModal';
import DeleteAccountModal from '../components/Settings/DeleteAccountModal';
import { deleteAccount, getCurrentSubscriptionDetails, getOrders, updatePassword } from '@/utils/api';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { userContext } from '../components/UserContextProvider';
import Container from '../components/Ui/Container';

const minimumCreditLimit = process.env.NEXT_PUBLIC_MINIMUM_CREDIT_LIMIT;

const Settings = () => {
    const [showPasswordUpdateModal, setShowPasswordUpdateModal] = useState(false);
    const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);
    const [orders, setOrders] = useState([]);
    const [subscriptionDetails, setSubscriptionDetails] = useState(null);
    const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
    const [isDeletingAccount, setIsDeletingAccount] = useState(false);
    const router = useRouter();
    const { user } = useContext(userContext)

    const handlePasswordUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const oldPassword = formData.get('oldPassword')?.toString();
        const newPassword = formData.get('newPassword')?.toString();
        const confirmPassword = formData.get('confirmPassword')?.toString();

        if(!oldPassword || !newPassword || !confirmPassword) {
            toast.error("All fields are required!");
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        if (newPassword.length < 8) {
            toast.error("Password must be at least 8 characters long!");
            return;
        }

        setIsUpdatingPassword(true);
        try {
            const response = await updatePassword({
                "old_password": oldPassword,
                "new_password": newPassword,
                "confirm_new_password": confirmPassword
            })
            setShowPasswordUpdateModal(false);
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response.data.error);
        } finally {
            setIsUpdatingPassword(false);
        }
    }

    const handleDeleteAccount = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const confirm = formData.get('confirm');

        if (confirm !== "CONFIRM DELETE") {
            toast.error("Please confirm to delete your account!");
            return;
        }

        setIsDeletingAccount(true);
        try {
            const response = await deleteAccount({
                confirm
            })
            setShowDeleteAccountModal(false);
            toast.success(response.data.message);
            router.push("/auth/signin");
        } catch (error) {
            toast.error(error.response.data.error);
        } finally {
            setIsDeletingAccount(false);
        }
    }

    const fetchOrders = async () => {
        try {
            const { data } = await getOrders();
            setOrders(data.orders);
            console.log(data.orders)
        } catch (error) {
            toast.error(error.response.data.error);
            console.error(error);
        }
    }

    const fetchCurrentSubscription = async () => {
        try {
            const { data } = await getCurrentSubscriptionDetails();
            if (data?.success && data?.subscription) setSubscriptionDetails(data.subscription);
        } catch (error) {
            toast.error(error.response.data.error);
            console.error(error);
        }
    }

    useEffect(() => {
        if (user?.email) {
            fetchOrders();
            fetchCurrentSubscription();
        }
    }, [user?.email])

    return (
        <>
            <div className='account-settings bg-dark-2 py-48    '>
                <Container>
                    <h1 className='text-4xl font-Mona_Medium m-0 text-white'>Account Settings</h1>
                    
                    <LoginInfoSection user={user} setShowPasswordUpdateModal={setShowPasswordUpdateModal} />

                    <SubscriptionSection subscriptionDetails={subscriptionDetails} minimumCreditLimit={minimumCreditLimit} />

                    <BillingHistorySection orders={orders} />

                    <AccountManagementSection setShowDeleteAccountModal={setShowDeleteAccountModal} />
                </Container>
            </div>
            <PasswordChangeModal handlePasswordUpdate={handlePasswordUpdate} isUpdatingPassword={isUpdatingPassword} setShowPasswordUpdateModal={setShowPasswordUpdateModal} showPasswordUpdateModal={showPasswordUpdateModal} />
            <DeleteAccountModal handleDeleteAccount={handleDeleteAccount} isDeletingAccount={isDeletingAccount} setShowDeleteAccountModal={setShowDeleteAccountModal} showDeleteAccountModal={showDeleteAccountModal} />
        </>
    );
};

export default Settings;