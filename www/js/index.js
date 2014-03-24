console.log("load");
$(function() {
   console.log("ready");
   $('#jquery-docs-link').click(function() {
      console.log("Open jQuery Demos");
      window.open('http://demos.jquerymobile.com/1.4.2/', '_blank');
   });
});

$(document).on( "mobileinit", function(){
   console.log("init");
   
});