!(function() {
    var oldLoadAp = window.onload;
    window.onload = function () {
      oldLoadAp && oldLoadAp();
  
      new APlayer({
        container: document.getElementById('aplayer'),
        //lrcType: 3,
        fixed: true,
        autoplay: false,
        loop: 'all',
        order: 'random',
        theme: '#b7daff',
        preload: 'none',
        audio: [
          {
            name: '物凄いスペースシャトルでこいしが物凄いうた',
            artist: 'ななひら',
            url: '/songs/物凄いスペースシャトルでこいしが物凄いうた.mp3',
            cover: 'https://gitee.com/Trotyl15/blogImage/raw/master/img/8211596578227_.pic.jpg',
            //lrc: '/songs/物凄いスペースシャトルでこいしが物凄いうた.lrc'
          },
          {
            name: 'トルコ行進曲 - オワタ＼(^o^)',
            artist: '96猫',
            url: '/songs/トルコ行進曲 - オワタ＼(^o^).mp3',
            cover: 'https://cdn.jsdelivr.net/gh/Trotyl15/blogImg/img/others/96%E7%8C%AB%20-%20%E3%83%88%E3%83%AB%E3%82%B3%E8%A1%8C%E9%80%B2%E6%9B%B2%20-%20%E3%82%AA%E3%83%AF%E3%82%BF%EF%BC%BC(%5Eo%5E).jpg',
            //lrc: '/songs/トルコ行進曲 - オワタ＼(^o^).lrc'
          }



        ]
      });
    }
  

    
  })();
