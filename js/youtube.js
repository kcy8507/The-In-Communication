// 2. This code loads the IFrame Player API code asynchronously.
let tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // div id="player"
  new YT.Player("player", {
    videoId: "cbO8Gk2ItmU", //최초 재생 유튜브 영상 아이디
    // videoId: 'nWuFq41CdX0',
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "cbO8Gk2ItmU",
      // playlist: 'nWuFq41CdX0',
    },
    events: {
      onReady: function (event) {
        event.target.mute(); //음소거
      },
    },
  });
}
