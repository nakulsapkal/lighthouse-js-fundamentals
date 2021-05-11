/*const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
];
let appropriateStation = [];
const chooseStations = function(stations) {
    for (let locations = 0; locations < stations.length; locations++) {
        let venueType = "";
        let capacity = "";
        for (let j = 0; j < locations.length; j++) {
            if (locations[j] >= "20") {
                capacity = locations[j];
            }
            if (locations[j] === "school" || locations[j] === "community center") {
                venueType = locations[j];
            }
            if ((venueType === "school" || venueType === "community center") && (capacity === "20")) {
            appropriateStation.push(locations[j]);
        }

        }
    }
    return appropriateStation;
}
*/
const stations = [
    ['A', 10, 'school'],
    ['B', 9, 'restaurant'],
    ['C', 21, 'community centre'],
    ['D', 15, 'school'],
    ['E', 50, 'restaurant'],
    ['F', 20, 'school'],
    ['G', 40, 'community centre'],
    ['H', 50, 'school'],
];
/*[
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];*/
let appropriateStation = [];
const chooseStations = function(stations) {
    for (let station of stations) {
        //let capacity = station[1];
        //let venueType = station[2];
        if ((station[2] === "school" || station[2] === "community centre") && (station[1] >= "20")) {
            appropriateStation.push(station[0]);
        }
    }
    return appropriateStation;
}
console.log(chooseStations(stations));






/*const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
let appropriateStation = [];
const chooseStations = function(stations) {
  for (let locations = 0; locations < stations.length; locations++) {
      let venueType = "";
      let capacity = "";
      for (let j = 0; j < locations.length; j++) {
          if (locations[j] === "20") {
              capacity = locations[j];
          }
          if (locations[j] === "school" || locations[j] === "community center") {
              venueType = locations[j];
          }
      }
      if ((venueType === "school" || venueType === "community center") && (capacity === "20")) {
          appropriateStation = locations[j];
      }
  }
  return appropriateStation;
}

console.log(chooseStations(stations));*/