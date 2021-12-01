google.charts.load("visualization", "1", { packages: ["corechart"] });
google.charts.setOnLoadCallback(init);
function drawChart(myID, titler, known, unknown) {
  var data = google.visualization.arrayToDataTable([
    ['Knowledge', ''],
    ['Known', known],
    ['Unknown', unknown],
    ['Known', known],
    ['Unknown', unknown]
  ]);
  var options = {
    title: titler,
    pieHole: 0.7,
    colors: ['#000000', 'red', 'white'],
    pieSliceText: 'none',
    legend: { position: 'none' },
    tooltip: { text: 'percentage' },
    tooltip: { textStyle: { fontSize: 12 } },
    type:'function'
  };

  var chart = new google.visualization.PieChart(document.getElementById(myID));
  chart.draw(data, options);
}
function init() {
  drawChart('donutchart1', '', 5, 6.5, 0);
  drawChart('donutchart2', 'Javascript', 4, 6);
}
