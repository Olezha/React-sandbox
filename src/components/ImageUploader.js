import React, {Component} from 'react';

class ImageUploader extends Component {

    state = {
        image: 'https://via.placeholder.com/150'
    };

    imageSelected = e => {
        this.setState({
            image: URL.createObjectURL(e.target.files[0])
        })
    };

    render = () => {
        let {image} = this.state;

        return (
            <div>
                <h2>Image Uploader</h2>

                <img src={image} style={{width: '150px'}} alt="image"/>

                <form>
                    <div className="form-group">
                        <label htmlFor="formControlImage">Select image to upload:</label>
                        <input type="file" accept="image/*"
                               id="formControlImage" className="form-control-file"
                               onChange={this.imageSelected}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default ImageUploader;
