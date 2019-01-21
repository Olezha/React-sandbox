import React, {Component} from 'react';

class Image extends Component {

    state = {
        loaded: false
    };

    onLoad = () => {
        console.log('loaded');
        this.setState(() => ({ loaded: true }));
    };

    render() {
        let className = `${this.state.loaded ? 'imgLoaded' : 'imgLoading'}`;
        const {src, width, height, alt} = this.props;

        return (
            <img src={src} alt={alt}
                 style={{width: width + 'px', height: height + 'px'}}
                 onLoad={this.onLoad}
                 className={className} />
        )
    };
}

export default Image;
