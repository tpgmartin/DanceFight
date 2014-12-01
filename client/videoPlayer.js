Groups = [ {
    title: 'Video1',
    id: '1',
    url: 'https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=0&enablejsapi=1&html5=1&controls=0&showinfo=0&rel=0'
  },
  {
    title: 'Video2',
	id: '2',
    url: 'http://www.youtube.com/embed/W7qWa52k-nE?autoplay=0&enablejsapi=1&html5=1&controls=0&showinfo=0&rel=0'
}
];

Template.videoPlayer.helpers({
	groups: Groups
});

Template.videoPlayer.events({
  "click button#play": function () {
    player1.playVideo();
    player2.playVideo();
    $('#play').css('display', 'none');
    $('#pause').css('display', 'inherit');
  },

  "click button#pause": function () {
    player1.pauseVideo();
    player2.pauseVideo();
    $('#pause').css('display', 'none');
    $('#play').css('display', 'inherit');
  },
 
 "click button.vote": function (ev) {
	alert('Voted for : Video ' + this.id);
	}

});