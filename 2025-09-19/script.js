function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {

  return Math.floor(hardDriveSizeGb*1000/photoSizeMb);
}

console.log(numberOfPhotos(1, 1));