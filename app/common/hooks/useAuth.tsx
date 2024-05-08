"use client"

import { getCookie, getCookies, hasCookie } from "cookies-next";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsLoggedIn(hasCookie('jwt-token'))
    }, [pathname]);
    
    return { isLoggedIn };
}

export default useAuth;