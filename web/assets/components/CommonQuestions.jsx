import React from 'react';

const CommonQuestions = ({showQuestion, index, toggleQlist}) => {
    return (
        <div 
        className={"cq" + (showQuestion.open ? 'open' : '')}
        key={index} 
        onClick = {()=>toggleQlist(index)}>
            <div className='cq-question'>
                {showQuestion.question}
            </div>
            <div className='cq-answer'>
                {showQuestion.answer}
            </div>
            
        </div>
    );
};

export default CommonQuestions;