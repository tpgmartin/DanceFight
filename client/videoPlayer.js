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

onYouTubeIframeAPIReady = function () {
    for (var i=1; i<Groups.length+1; i++) {
        window['preloading' + i] = false;
        window['player' + i] = new YT.Player("player" + i, {
            height: "360", 
            width: "100%", 
            videoId: Groups[i-1].url.split('/').slice(-1)[0],
            events: {
              'onReady': onPlayerReady
            }

        });
    }
};

YT.load();

Template.videoPlayer.helpers({
	groups: Groups
});

Template.videoPlayer.events({
  "click button#play": function () {
    playVideo();
    $('#play').css('display', 'none');
    $('#pause').css('display', 'inherit');
  },

  "click button#pause": function () {
    pauseVideo();
    $('#pause').css('display', 'none');
    $('#play').css('display', 'inherit');
  },
 
 "click button.vote": function (ev) {
	alert('Voted for : Video ' + this.id);
	}

});

// helpers
function playVideo() {
  player1.playVideo();
  player2.playVideo(); 
}

function pauseVideo() {
  player1.pauseVideo();
  player2.pauseVideo();
}

function onPlayerReady(event) {
  // var videos = $('.video');
  // for (var i=0; i<videos.length; i++) {
  //   window['preloading' + 1] = true;
  //   window['player' + i].seekTo(0);
  //   window['player' + i].pauseVideo();
  // }
  preloading1 = true; 
  preloading2 = true; 
  player1.seekTo(0);
  player2.seekTo(0);
  player1.pauseVideo();
  player2.pauseVideo();
}