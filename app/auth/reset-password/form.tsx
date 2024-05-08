"use client";
import React, { useState } from "react";
import Auth from "@/assets/images/auth.png";
import Image from "next/image";
import Email from "@/assets/images/email.svg";
import Link from "next/link";
import { sendForgotPasswordLink } from "@/utils/api";
import toast from "react-hot-toast";
import Loader from "@/app/components/common/Loader";
import Container from "@/app/components/Ui/Container";

const Form = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setSubmitting] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        setSubmitting(true);
        try {
            const { data } = await sendForgotPasswordLink({ email })
            setEmail('');
            toast.success(data?.message);
        } catch (error) {
            setError(error?.response?.data?.error || 'Failed to send forgot password link!');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="signin-page bg-dark-2 pt-36">
            <Container>
                <div className="grid grid-cols-2 p-20 items-center">
                    <div>
                        <h2 className="text-white mb-5 text-2xl font-Mona_Medium tracking-widest leading-relaxed">
                            Start Designing Brilliance: <br /> Log In Free Midjourney
                        </h2>
                        <Image src={Auth} width="auto" height="auto" alt="auth" />
                    </div>

                    <div className="p-10">
                        <form onSubmit={handleSubmit} className="space-y-3">
                            {error && <div role="alert" className="rounded border-s-4 border-red-500 bg-red-50 p-4 mb-4">
                                <div className="flex items-center gap-2 text-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                        clipRule="evenodd"
                                    />
                                    </svg>

                                    <strong className="block font-medium">{error}</strong>
                                </div>
                            </div>}

                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    placeholder="Enter your registered email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="input-style"
                                />
                                <Image className="absolute top-1/2 -translate-y-1/2 left-4" src={Email} width="auto" height="auto" alt="name" />
                            </div>

                            <button type="submit" disabled={isSubmitting} className="pq-button-flat w-full">
                                {isSubmitting ? <Loader /> : "Continue"}
                            </button>
                            <p className="text-center pt-1 my-2 text-gray-200 text-xs tracking-wider">
                                <Link href="/auth/signin" className="text-blue-300 underline">Back to Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Form;
