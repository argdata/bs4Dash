$(function() {
  // handle shinyapps.io: we need to extract the worker id and
  // paste it in the url so that the apps works correctly
  // get the shiny app.io workerId
  var workerId = $('base').attr('href');
  // ensure that this code does not run on shiny server/pro and locally
  if (typeof workerId != "undefined") {
    // get the initial page url
    var url = window.location.href;
    // replace the url by the url for shinyapp.io
    window.location.replace(url + workerId);
  }
});