import React, {Component} from 'react';

class Image extends Component {

    state = {
        loaded: false
    };

    onLoad = () => {
        console.log('loaded');
        this.setState(() => ({loaded: true}));
    };

    render() {
        let className = `${this.state.loaded ? 'imgLoaded' : 'imgLoading'}`;
        const {src, width, height, alt} = this.props;

        return (
            <div>
                <img src={src} alt={alt}
                     style={{width: '49%'}}/>
                <img src={src} alt={alt}
                     style={{width: '49%', float: 'right'}}
                     onLoad={this.onLoad}
                     className={className}/>
            </div>
        )
    };
}

export default Image;
