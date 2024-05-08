"use client";

import { updateForgotPassword, verifyForgotPasswordToken } from '@/utils/api'
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useLayoutEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import toast from 'react-hot-toast'
import Auth from "@/assets/images/auth.png";

const PasswordChange = () => {
    const params = useSearchParams();
    const router = useRouter();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
    const token = params.get('access_token');

    const handlePasswordUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const newPassword = formData.get('newPassword');
        const confirmPassword = formData.get('confirmPassword');
        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }
        setIsUpdatingPassword(true);
        try {
            const response = await updateForgotPassword({
                new_password: newPassword,
                confirm_password: confirmPassword,
                token
            })
            toast.success(response.data.message);
            router.replace('/auth/signin');
        } catch (error) {
            toast.error(error.response.data.error);
        } finally {
            setIsUpdatingPassword(false);
        }
    }
    
    const verifyToken = async (token: string) => {
        try {
            await verifyForgotPasswordToken(token);
        } catch (error) {
            console.log('error', error)
            setError(error?.response?.data?.error || 'Failed to verify link');
        } finally {
            setIsLoading(false);
        }
    }

    useLayoutEffect(() => {
        if (token) {
            verifyToken(token)
        }
    }, [token]);

  return (
    <>
        {!isLoading && (error ? <p>{error}</p> : (
        <div className="signin-page layout-page">
            <Container>
                <div className="auth-wrapper pb-0">
                    <Row>
                        <Col md={6}>
                            <Image src={Auth} width="auto" height="auto" alt="auth" />
                        </Col>

                        <Col md={6} className="align-self-center">
                            <form onSubmit={handlePasswordUpdate}>
                                <input type='password' name="newPassword" className='mb-3' placeholder='New Password' />
                                <input type='password' name="confirmPassword" className='mb-4' placeholder='Confirm Password' />
                                <button className='pq-button' disabled={isUpdatingPassword}>{isUpdatingPassword ? "Updating..." : "Update"}</button>
                            </form> 
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
        ))}
    </>
  )
}

export default PasswordChange