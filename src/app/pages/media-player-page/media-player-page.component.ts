import { Component, OnInit } from '@angular/core';

declare var bitmovin: any;
declare var UIManager : any;
declare var SpatialNavigation: any;


@Component({
  selector: 'app-media-player-page',
  templateUrl: './media-player-page.component.html',
  styleUrls: ['./media-player-page.component.scss']
})
export class MediaPlayerPageComponent implements OnInit {

  player: any;

  constructor() { }

  ngOnInit(): void {

    // document.addEventListener('keydown', (event: any) => {
    //   if ([37, 38, 39, 40].includes(event.keyCode)) {
    //     console.log(event)
    //     // Prevent the default behavior
    //     event.preventDefault();
    //   }
    // });


    let conf = {
      key: '222da2d4-3d15-443c-be18-c394f6741cc0',
      analytics: {
        key: 'ac949bb4-a6a4-462d-852c-cbe510b4db60',
        title: 'Test',
        videoId: 'wizard-Test-1700662316246',
      },
      "playback": {
        "autoplay": true
      },
      ui: false
    };
  
    let source = {
      title: 'Test',
      hls: 'https://streams.bitmovin.com/clf0fj9872vgg0q11dtg/manifest.m3u8',
    };

    
  
    this.player = new bitmovin.player.Player(document.getElementById('player'), conf);
    const myUiManager = new bitmovin.playerui.UIFactory.buildDefaultTvUI(this.player);

   

    console.log(this.player);
    this.player.load(source).then(this.onLoadVideoSource.bind(this, this.player)).catch(() => {
      console.log('Error while loading source:');

    });


  }

  onLoadVideoSource(player: any) {
    console.log('Successfully loaded Source Config!');
    
    // const seekBar = new bitmovin.playerui.SeekBar({ keyStepIncrements: {upDown: 10}, vertical: true });
    // console.log(seekBar)

    
    // let bitmovinUiManager = new bitmovin.playerui.UIFactory.buildDefaultTvUI(this.player);
    // bitmovinUiManager.release();
    // document.removeEventListener('keydown', bitmovinUiManager.focusVisibilityTracker.eventHandlerMap.keydown, !0)
    // document.removeEventListener('keydown', bitmovinUiManager.currentUi.spatialNavigation.handleKeyEvent, !0)

    // console.log(bitmovinUiManager)
    SpatialNavigation.focus('app');
    this.setFocusOnSeekbar();
  }


  setFocusOnSeekbar() {
    let seekBar = document.getElementsByClassName('bmpui-ui-seekbar')[0];
    seekBar.setAttribute('tabindex', '-1')
    seekBar.setAttribute('data-sn-left', '')
    seekBar.setAttribute('data-sn-right', '')
    

    seekBar.addEventListener('keydown', (e: any) => {
      console.log(e.keyCode)
      e.preventDefault();
      // e.stopPropagation();
      // this.player.pasue();
      if(e.keyCode == 39) {
        this.player.pause();
        this.player.seek(this.player.getCurrentTime() + 10)
      } else if(e.keyCode == 37) {
        this.player.pause();
        this.player.seek(this.player.getCurrentTime() - 10)
      } else if(e.keyCode == 38 || e.keyCode == 40) {
        // e.stopPropagation();
      } else if (e.keyCode == 13) {
        if(this.player.isPlaying()) {
          this.player.pause();
        } else {
          this.player.play();
        }
      }
    })
    // console.log()
  }

}
