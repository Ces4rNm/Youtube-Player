import { Component, OnInit } from '@angular/core';
import * as Plyr from 'plyr';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-plyr',
  templateUrl: './plyr.page.html',
  styleUrls: ['./plyr.page.scss'],
})
export class PlyrPage implements OnInit {

  public player;

  constructor() {
    // https://www.npmjs.com/package/plyr
    // https://github.com/smnbbrv/ngx-plyr - not working in latest version of angular and ionic
  }

  ngOnInit() {
    this.player = new Plyr('#player', {
      captions: { active: true },
      settings: ['captions', 'quality', 'speed', 'loop'],
      controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
      autoplay: true,
      youtube: { noCookie: false, rel: 0, controls: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1 }
    });
  }

  play() {
    console.log("🚀 ~ play");
    this.player.play();
    this.player.fullscreen.enter();
    const hideStatusBar = async () => {
      await StatusBar.hide();
    };
  }

  pause() {
    this.player.pause();
  }

  stop() {
    this.player.stop();
    const showStatusBar = async () => {
      await StatusBar.show();
    };
  }

  flag() {
    this.player.forward(this.player.duration / 2);
  }
}
