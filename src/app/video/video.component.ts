import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.sass']
})
export class VideoComponent implements OnInit {


  video: any;
  expectedFramerate = 30;
  keyvalue: any;
  constructor() { }

  ngOnInit(): void {
    this.video = document.querySelector('#yourVideo');
    const vid = document.getElementById('yourVideo');
    // const dr = this.video.get(0).duration;
    console.log(vid)
  }

  getDuration(e: any) {
    const duration = e.target.duration;
    console.log('duration', duration)
    this.expectedFramerate = duration;
  }
  plusClickFunc(e: string) {

    this.handleButtonsFunc(e);
  }

  handleButtonsFunc(event: any) {
    console.log('event', event)
    let d = 0;
    switch (event) {
      case "minus": d = -2; break;
      case "plus": d = +2; break;
      case " ": this.togglePlayback(); break;
    }
    if (d) {
      if (this.video.paused) this.video.currentTime += Math.sign(d) * 1 / 29.97
      else this.video.currentTime += d;
    }
    console.log('Button currentTime', this.video.currentTime)
  }
  @HostListener('document:keyup', ['$event'])
  handleArrowKeyFunc(event: KeyboardEvent) {
    console.log('event.key', event.key)
    let d = 0;
    switch (event.key) {

      case "ArrowLeft": d = -2; break;
      case "ArrowRight": d = +2; break;
      case " ": this.togglePlayback(); break;
    }

    if (d) {
      if (this.video.paused) this.video.currentTime += Math.sign(d) * 1 / 29.97
      else this.video.currentTime += d
    }
    console.log('Key currentTime', this.video.currentTime)
  }


  @HostListener('mousemove', ['$event'])
  handleMousemoveFunc(event: MouseEvent) {
    let d = 0;
    switch (event.type) {
      case " ": this.togglePlayback(); break;
    }

    if (d) {
      if (this.video.paused) this.video.currentTime += Math.sign(d) * 1 / 29.97
      else this.video.currentTime += d
    }
  }
  togglePlayback() {
    this.video.paused
      ? this.video.play()
      : this.video.pause()
  }
}
