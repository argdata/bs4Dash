$(function () {
  
  // Make the dashboard widgets sortable Using jquery UI
  $('.connectedSortable').sortable({
    placeholder         : 'sort-highlight',
    connectWith         : '.connectedSortable',
    handle              : '.card-header, .nav-tabs',
    forcePlaceholderSize: true,
    zIndex              : 999999
  });
  $('.connectedSortable .card-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move');

  //// function to get the index of an element in a list
  //function getIndex(elem) {
  //  var $t = $(elem);
  //  return $t.parent().index();
  //}
  // select all nav items links that have not the has-treeview class
  //var $tabs = $( " #mymenu li.nav-item:not(.has-treeview) a" );
  var $tabs = $("#mymenu a[data-toggle='tab']");
  var $selectedTab = $tabs.filter(".active.show");
  //var $selectedTabLink = $selectedTab.attr("id");
  //var $index = getIndex($selectedTab);
  //var $indexPane = $index - 1;
  
  
  if ($selectedTab.length === 0) {
    // If no tab starts selected, use the first one, if present
    $('#mymenu .nav-item:eq(0) a').tab('show');
    $('.container-fluid.tab-pane:eq(0)').addClass('active show');
  } //else {
    //$("#mymenu .nav-item:eq(" + $indexPane + ") a").tab("show");
    //$(".tab-pane:eq(" + $indexPane + ")").addClass('active show');
  //}
  
  // handle shinyapps.io, RStudio connect and shiny server pro: 
  // we need to extract the worker id and
  // paste it in the url so that the apps works correctly
  
  // get the  workerId
  //var workerId = $('base').attr('href');
  //var tablink = $('#mymenu .nav-item:eq(0) a').attr('href');
  //// ensure that this code does not run on shiny server open source and locally
  //if (typeof workerId != 'undefined') {
  //  // get the initial page url
  //  // replace the url by the url for shinyapp.io
  //  window.location.replace(
  //    window.location.protocol + "//" + 
  //    window.location.host + "/" + workerId + 
  //    "/" + tablink
  //  );
  //}
  
});