import React, {Component} from 'react';

class Child extends Component {

    render = () => {
        let {children} = this.props;
        console.log('Count of children: ', React.Children.count(children));
        // console.log('Only one child: ', React.Children.only(children));
        return (
            <div>
                {
                    React.Children.map(children, (childrenItem => {
                        if (React.isValidElement(childrenItem)) {
                            console.log('Valid component: ', childrenItem);
                            return childrenItem;
                        }
                        else
                            console.warn('Invalid component', childrenItem);
                    }))
                }
            </div>
        );
    }
}

export default Child;
