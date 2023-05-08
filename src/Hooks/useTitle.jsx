import { useEffect } from 'react';

const useTitle = (title) => {
    return (
        useEffect(() => {
            document.title = `${title}-Watch-Resale`;
        }, [title])
    );
};

export default useTitle;