jQuery(function($) {    
  
    $('#background-video').YTPlayer({
      fitToBackground: true,
      videoId: 'taVry9IQUjE',
      pauseOnScroll: false,  
      playerVars: {
        modestbranding: 1,
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        showinfo: 0,
        branding: 1        
      },    
      callback: function() {
        videoCallbackEvents();
      }
    });

    $('#gdl-video').YTPlayer({
      fitToBackground: false,
      videoId: 'weg7HV3uUSk',
      pauseOnScroll: false,
      mute: false,
      playerVars: {
        mute: 0,
        modestbranding: 0,
        autoplay: 0,
        controls: 1,
        showinfo: 1,
        branding: 0,
        rel: 0,
        autohide: 0
      }
    });

    $('#moco-video').YTPlayer({
      fitToBackground: false,
      videoId: 'k1hX5FKec_o',
      pauseOnScroll: false,
      mute: false,
      playerVars: {
        mute: 0,
        modestbranding: 0,
        autoplay: 0,
        controls: 1,
        showinfo: 1,
        branding: 0,
        rel: 0,
        autohide: 0
      }
    });

    $('#pcg-video').YTPlayer({
      fitToBackground: false,
      videoId: 'qiNinGf8c8A',
      pauseOnScroll: false,
      mute: false,
      playerVars: {
        mute: 0,
        modestbranding: 0,
        autoplay: 0,
        controls: 1,
        showinfo: 1,
        branding: 0,
        rel: 0,
        autohide: 0
      }
    });

    $('#iggi-video').YTPlayer({
      fitToBackground: false,
      videoId: 'taVry9IQUjE',
      pauseOnScroll: false,
      mute: false,
      playerVars: {
        modestbranding: 0,
        autoplay: 0,
        controls: 1,
        showinfo: 1,
        branding: 0,
        rel: 0,
        autohide: 0
      }
    });
    
    var videoCallbackEvents = function() {
      var player = $('#background-video').data('ytPlayer').player;
    
      player.addEventListener('onStateChange', function(event){
          console.log("Player State Change", event);

          // OnStateChange Data
          if (event.data === 0) {          
              console.log('video ended');
          }
          else if (event.data === 2) {          
            console.log('paused');
          }
      });
    }
  });