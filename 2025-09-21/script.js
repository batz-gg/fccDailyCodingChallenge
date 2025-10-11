function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  const storageUnit = {
    "B" : 1,
    "KB" : 1e3,
    "MB" : 1e6,
    "GB" : 1e9,
    "TB" : 1e12
  };
  if (!storageUnit[videoUnit] || videoUnit === "TB") {
      return "Invalid video unit";
  }

  if (!storageUnit[driveUnit] || driveUnit === "B" || driveUnit === "KB" || driveUnit === "MB") {
      return "Invalid drive unit";
  }

  let totalVideoSize = 1;
  let totalDriveSize = 1;
  const videoSizeInBytes = videoSize * storageUnit[videoUnit];
  const driveSizeInBytes = driveSize * storageUnit[driveUnit];
  return Math.floor(driveSizeInBytes / videoSizeInBytes);
}

console.log(numberOfVideos(500, "MB", 100, "GB"))