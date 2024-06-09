import React from 'react';


const TotallCts = ({ className, result, unit }) => {

    return (
        <div className={className}>
            <p className='result'>{result}</p>
            <span className='unit'>{unit}</span>
        </div>
    );
};

export default TotallCts;