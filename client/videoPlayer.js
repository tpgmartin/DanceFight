// Want to autoplay videos on load and automatically pause as screen loads
// Add in play/pause button to add usability 
Groups = [ {
    title: 'Video 1',
    id: '1',
    url: 'https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&controls=0&showinfo=0&rel=0'
  },
  {
    title: 'Video2',
	id: '2',
    url: 'http://www.youtube.com/embed/W7qWa52k-nE?enablejsapi=1&controls=0&showinfo=0&rel=0'
}
];



Template.videoPlayer.helpers({
	groups: Groups
});

Template.videoPlayer.events({
  "click button.play": function (ev) {
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
  },
 
 "click button.vote": function (ev) {
	alert('Voted for : Video ' + this.id);
	}

});