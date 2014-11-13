// Want to autoplay videos on load and automatically pause as screen loads
// Add in play/pause button to add usability 

Template.videoPlayer.events({
  "click": function (ev) {
     $("#loading").css("display", "none");
     
     if ( $("button").hasClass("play") ) { 
       $('button').addClass('pause').removeClass('play');
       $('.video').each(function(){
          this.src += "&autoplay=1";
          ev.preventDefault();
       });
     } else {
       $('button').addClass('play').removeClass('pause');
       $('.video').each(function(){
          // Replace this 
          this.src.replace("&autoplay=1","");
          ev.preventDefault();
        });
     }
  }
});