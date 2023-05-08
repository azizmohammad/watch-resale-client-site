import { useEffect, useState } from 'react';

const useUser = () => {
    const [auth, setAuth] = useState({})
    useEffect(() => {
        let data = localStorage.getItem('auth')
        data = JSON.parse(data);
        setAuth(data)
    }, []);

    return auth;
};

export default useUser;