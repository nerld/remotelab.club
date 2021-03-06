// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require dataTables/jquery.dataTables
//= require dataTables/bootstrap/3/jquery.dataTables.bootstrap
//= require parsley
//= require turbolinks
//= require bootstrap-sprockets
//= require Chart
//= require bootstrap-slider
//= require_tree .


console.log('Khanh is awesome!')


function updateChartData(chart, slaveId, pin) {
  console.log(chart)

  console.log()
  $.ajax({
    url: '/api/get_chart_data',
    data: {slave_id: slaveId, pin: pin},
    success: function(data) {
      chart.datasets[0].points.value = data.data;
      chart.datasets[0].label.value = data.label;
      chart.update();
      console.log(chart)
    }
  })
}
