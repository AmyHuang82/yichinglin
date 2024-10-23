function getCloudinaryImageName(url) {
  return decodeURI(url.split('/').pop().split('.').shift())
}

export default getCloudinaryImageName
