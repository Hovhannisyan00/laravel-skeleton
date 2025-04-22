import { useEffect } from 'react';

const CardComponent = () => {
    useEffect(() => {
        console.log('Component mounted.');
    }, []);

    return (
        <div className="card">
            <div className="card-header">React</div>
            <div className="card-body">
                Hello From Core Team. :)
            </div>
        </div>
    );
};

export default CardComponent;
