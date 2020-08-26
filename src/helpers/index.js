import axios from 'axios';

export const baseUrl = 'https://pic-to-code-server.herokuapp.com/';
// export const baseUrl = 'http://localhost:5001';

export const makeRequest = (image, method) => {
  axios({
    url: baseUrl,
    method: 'post',
    data: {
      image: image
    }
  })
    .then(data => method(data.data))
}

export const saveImage = (image, method) => {
  const formdata = new FormData();
  formdata.append("image", image);

  const requestOptions = {
    url: 'https://api.imgur.com/3/image',
    method: 'POST',
    headers: {
      "Authorization": "Client-ID 81c93995e07029d"
    },
    data: formdata,
  };

  axios(requestOptions)
    .then(result => makeRequest(result.data.data.link, method))
    .catch(error => console.log('error', error));
}
