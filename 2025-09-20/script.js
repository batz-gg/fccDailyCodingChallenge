function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
  const storageUnit = {
    "B" : 1,
    "KB" : 1e3,
    "MB" : 1e6,
    "GB" : 1e9
  }
  const convertedDrive = driveSizeGb * 1e9;
  let totalFileSize = 1;
  for (const key in storageUnit) {
    if (key == fileUnit){
      totalFileSize = storageUnit[key] * fileSize;
    }
  }

  return Math.floor(convertedDrive / totalFileSize);
}

console.log(numberOfFiles(500, "KB", 1))