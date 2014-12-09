// Easiest solution:
// * Choose two videos from groups at random,
// * Only every refer to two players: player1, platyer2,
// 

Groups = [ {
    title: 'Video1',
    id: '1',
    url: 'https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=0&enablejsapi=1&html5=1&controls=0&showinfo=0&rel=0'
  },
  {
    title: 'Video2',
    id: '5',
    url: 'http://www.youtube.com/embed/nhxvgpTl7BU?autoplay=0&enablejsapi=1&html5=1&controls=0&showinfo=0&rel=0'
}
];

onYouTubeIframeAPIReady = function () {
  videos = Groups, selected_videos = [];
  var range1 = videos.pop(videos[Math.floor(Math.random() * videos.length)]);
  var range2 = videos.pop(videos[Math.floor(Math.random() * videos.length)]);
  selected_videos.push(range1);
  selected_videos.push(range2);
  console.log(Groups);
  console.log(videos);
  console.log(selected_videos);
  for (var i=1; i<selected_videos.length+1; i++) {
      window['preloading' + i] = false;
      window['player' + i] = new YT.Player("player" + i, {
          height: "360", 
          width: "100%", 
          videoId: selected_videos[i-1].url.split('/').slice(-1)[0],
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
  "click button#play": function (ev) {
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
  if (player1) {
    player1.playVideo();    
  } else if (player2) {
    player2.playVideo();     
  }
}

function pauseVideo() {
  if (player1) {
    player1.pauseVideo();    
  } else if (player2) {
    player2.pauseVideo();     
  }
}

function onPlayerReady(event) {
  if (player1) {
    preloading1 = true; 
    player1.seekTo(0);
    player1.pauseVideo();
  } else if (player2) {
    preloading2 = true; 
    player2.seekTo(0);
    player2.pauseVideo();
  }
}