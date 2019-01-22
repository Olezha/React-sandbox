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
        const {src, alt} = this.props;

        return (
            <div>
                <img src={src} alt={alt} style={{width: '49%'}}/>
                <div className={className} style={{position: 'relative', width: '49%', float: 'right'}}>
                    <div className="loadingPlaceholder">Loading ...</div>
                    <img src={src} alt={alt} onLoad={this.onLoad}
                         style={{width: '100%'}} className={className}/>
                </div>
            </div>
        )
    };
}

export default Image;
