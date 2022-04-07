var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(arr) {

  var monitorsList = [];

  for (var i = 0; i < monitorsListArray.length; i++) {
    monitorsList.push([monitorsListArray[i], i + 1]);
  }

  return monitorsList;
}

myMonitorsFunction(monitorsListArray);

module.exports = myMonitorsFunction;