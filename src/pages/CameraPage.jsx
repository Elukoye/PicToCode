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
      <Link to="/" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 border border-teal-700 rounded">
        Go back!
      </Link>
      <section className="camera-container mt-5">
				<div class="grid grid-cols-2 gap-4">
					<div class=" ">
						<Camera
							// className="camera-container"
							isImageMirror={false}
							onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
						/>
					</div>
					<div class=" bg-gray-100 p-3"> 
						<h3 class="mb-4"> You can copy your code below</h3>
						{
							text
								? (
									<div >
										{text}
									</div>
								) : null
						}
					</div>
			</div>
      </section>
    </>
  );
};

export default CameraPage;

