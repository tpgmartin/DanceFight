Template.videoPlayer.events({
  "click": function () {
     $("#loading").css("display", "none");
     if ( $("button").hasClass("play") ) { 
       $('button').addClass('pause').removeClass('play');
     } else {
       $('button').addClass('play').removeClass('pause');
     }
  }
});