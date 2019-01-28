import React from 'react';
import PropTypes from 'prop-types';

// github.com/facebook/prop-types

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

CompWithPropTypes.propTypes = {
    children: PropTypes.element.isRequired
};

export default CompWithPropTypes;
