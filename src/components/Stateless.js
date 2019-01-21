import React from 'react';

const Stateless = ({title, sound, error}) => {
    /**
     * Ф-ция принимает props и делает деструктуризацию в title, sound и error
     */

    const doMyStateLessStuff = () => {
        if (title === 'Dog')
            console.log('I\'m a', title, 'and i\'m a', sound);
        else
            console.log('I\'m a', title, 'and i say', sound);
    };

    return (
        <div>
            <h4>Hello, I'm a stateless component.</h4>
            {
                error === true ? <span>Error </span> : <span>Everything fine </span>
            }
            <button onClick={doMyStateLessStuff} className="btn btn-outline-warning btn-sm">Who are you?</button>
        </div>
    )
};

Stateless.defaultProps = {
    title: 'some animal'
};

export default Stateless
