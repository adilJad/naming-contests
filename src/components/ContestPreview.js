import React from 'react';

const ContestPreview = (contest) => {
    return (
        <div className='ContestPreview'>
            <h3>{contest.categoryName}</h3>
            <div>
                {contest.contestName}
            </div>
        </div>
    )
}

export default ContestPreview;