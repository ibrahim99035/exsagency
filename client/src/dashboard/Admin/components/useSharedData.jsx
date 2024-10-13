import { useState } from 'react';

const useSharedData = () => {
    const [Flag, setFlag] = useState(null);
    return { Flag, setFlag };
};

export default useSharedData;