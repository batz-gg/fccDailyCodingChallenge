// function sendMessage(route) {
//   const distanceSum = route.reduce((a, b) => a + b);
//   const massiveLength = route.length;
//   const spendTime = distanceSum / 3e5;
//   const transmissionDelay = (massiveLength - 1) * 0.5;
//   const totalTime = spendTime + transmissionDelay;
//   return totalTime.toFixed(4);
// }

const sendMessage = route => {
  return (
    route.reduce(
      (sum, dist) => sum + dist, 0
    ) / 300000 + (route.length - 1) * 0.5
  ).toFixed(4);
}

console.log(sendMessage([802101, 725994, 112808, 3625770, 481239]))