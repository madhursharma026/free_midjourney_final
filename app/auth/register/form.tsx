"use client";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Auth from "@/assets/images/auth.png";
import Image from "next/image";
import Username from "@/assets/images/username.svg";
import Email from "@/assets/images/email.svg";
import Password from "@/assets/images/password.svg";
import Link from "next/link";
import Loader from "@/app/components/common/Loader";
import { userContext } from "@/app/components/UserContextProvider";
import { GoogleLogin } from '@react-oauth/google';
import Container from "@/app/components/Ui/Container";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [loader, setLoader] = useState(false)
  const { register } = useContext(userContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement> | null, token = null) => {
    event?.preventDefault();
    setError("");
    setLoader(true);
 
    const { success, error } = await register({ email, username, password, token })
 
    if (success) {
      router.replace('/')
    } else {
      setError(error);
      setLoader(false);
    }
  };

  return (
    <div className="signin-page bg-dark-2 pt-36">
      <Container>
        <div className="p-12">
          <div className="grid grid-cols-2">
            <div>
              <h2 className="text-white mb-5 text-2xl font-Mona_Medium tracking-widest leading-relaxed">
                Join the Artistic Revolution: <br />
                Log In to Free Midjourney
              </h2>
              <Image src={Auth} width="auto" height="auto" alt="auth" />
            </div>

            <div className="p-10">
              <span className="w-full inline-block"><GoogleLogin
                onSuccess={response => handleSubmit(null, response.credential)}
                onError={() => {
                  console.log('Login Failed');
                }}
              /></span>
              
              <div className="relative flex py-6 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-sm">Or sign in with email</span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>

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
                    type="text"
                    id="text"
                    value={username}
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="input-style"
                  />
                  <Image className="absolute top-1/2 -translate-y-1/2 left-4" src={Username} width="auto" height="auto" alt="name" />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input-style"
                  />
                  <Image className="absolute top-1/2 -translate-y-1/2 left-4" src={Email} width="auto" height="auto" alt="email" />
                </div>

                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="input-style"
                  />
                  <Image
                    className="absolute top-1/2 -translate-y-1/2 left-4"
                    src={Password}
                    width="auto"
                    height="auto"
                    alt="password"
                  />
                </div>
                <button type="submit" className="mt-4 pq-button-flat w-full">
                {loader ? <Loader /> : "Sign Up"}
                </button>
                <p className="text-center pt-1 my-2 text-gray-200 text-xs tracking-wider">
                  Already have an Account?
                  <Link href="/auth/signin" className="text-blue-300 underline"> Sign in here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
