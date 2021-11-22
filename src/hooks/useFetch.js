import { useEffect, useRef, useState } from 'react';

const API = import.meta.env.VITE_API;

const useFetch = (condition, endpoint) => {
    const isMounted = useRef(true);

    const [state, setState] = useState({
        data: null,
        error: null,
        loading: condition
    });

    useEffect(() => {
        return () => (isMounted.current = false);
    }, []);

    useEffect(() => {
        const executeRequest = async () => {
            try {
                const req = await fetch(API + endpoint);
                const res = await req.json();

                if(isMounted.current && res.response === 'error') {
                    setState({
                        data: null,
                        error: 'Por favor, hable con el administrador.',
                        loading: false
                    });
                }
                
                if(isMounted.current && res.response === 'success') {
                    setState({
                        data: res.results,
                        error: null,
                        loading: false
                    });
                }
            } catch(err) {
                // console.log(err);
                
                setState({
                    data: null,
                    error: 'Por favor, hable con el administrador.',
                    loading: false
                });
            }
        };

        if(condition)
            executeRequest();
    }, [condition, endpoint]);

    return state;
};

export default useFetch;
