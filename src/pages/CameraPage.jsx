import React from 'react';
import { Link } from 'react-router-dom';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { saveImage } from '../helpers/';

const CameraPage = ({ text, setText }) => {
  // const history = useHistory();

  const handleTakePhoto = (dataUri) => {
    const image = dataUri.replace(/^data:image\/\w+;base64,/, '');
    saveImage(image, setText);
  }
  return (
    <>
      <Link to="/">
        Go back!
      </Link>
      <section className="camera-container">

        <Camera
          // className="camera-container"
          isImageMirror={false}
          onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
        />

        {
          text
            ? (
              <div className="text-div">
                {text}
              </div>
            ) : null
        }
      </section>
    </>
  );
};

export default CameraPage;
