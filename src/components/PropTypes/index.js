import React from 'react';
import PropTypes from 'prop-types';

const CompWithPropTypes = (props) => {

    console.log(props);

    return (
        <div>
            <h2>I have a props</h2>
            <div>
                {
                    props.children
                }
            </div>
        </div>
    );
};

// github.com/facebook/prop-types
CompWithPropTypes.propTypes = {
    children: PropTypes.element.isRequired,
    stringProp: PropTypes.string,
    somethingTrue: PropTypes.bool.isRequired,
    arrayProp: PropTypes.array,
    action: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['Foo', 'Bar']).isRequired,
    ReactEl: PropTypes.element,
    user: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
    }),
    someStuff: PropTypes.any
};

export default CompWithPropTypes;
