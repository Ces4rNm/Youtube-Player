import { AfterViewInit, Component } from '@angular/core';

import YouTubePlayer from 'youtube-player';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  player: any;
  videoId: string = 'O4qq18_PFFI';
  stopped: boolean = true;

  constructor() {
    // https://www.npmjs.com/package/youtube-player
   }

  ngAfterViewInit() {
    if (this.player == undefined) {
      this.player = YouTubePlayer('youTube-player', { playerVars: { cc_load_policy: 1, autoplay: 1, controls: 1, enablejsapi: 1, iv_load_policy: 3, modestbranding: 1, showinfo: 0, rel: 0, autohide: 0, fs: 1, disablekb: 0, playsinline: 1 }});
      this.play();
    }
  }

  play() {
    if (this.stopped) {
      this.player.loadVideoById(this.videoId).then(() => {
        this.player.playVideo();
        this.stopped = false;
      });
      this.player.on('stateChange', (event) => {
        console.log("🚀 ~ event", event)
        // event.data
      });
    }
  }

  stop() {
    if (!this.stopped) {
      this.player.stopVideo().then(() => {
        this.stopped = true;
      })
    }
  }

  middle() {
    this.player.getDuration().then((duration) => {
      console.log("🚀 ~ duration", duration);
      this.player.seekTo(duration * 0.5, true);
    })
    this.player.getVideoLoadedFraction().then((loaded) => {
      console.log("🚀 ~ loadedFraction", loaded)
    })
  }

}
