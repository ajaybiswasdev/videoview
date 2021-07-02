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

  getDuration(e:any) {
    const duration = e.target.duration;
    console.log('duration', duration)
    this.expectedFramerate = duration;
  }
  @HostListener('document:keyup', ['$event'])
  handleKey(event: KeyboardEvent) {
    console.log('event', event)
    let d = 0;
    switch (event.key) {
      case ",": d = -5; break;  // normal
      case ".": d = +5; break;
      case "?": d = -10; break; // shift
      case ":": d = +10; break;
      case "<": d = -2; break;  // rightAlt
      case ">": d = +2; break;
      case " ": this.togglePlayback(); break;
    }

    if (d) {
      if (this.video.paused) this.video.currentTime += Math.sign(d) * 1 / this.expectedFramerate
      else this.video.currentTime += d
    }
  }
  togglePlayback() {
    console.log('ss')
    this.video.paused
      ? this.video.play()
      : this.video.pause()
  }

  @HostListener('mousemove', ['$event'])
  handleMousemove(event:MouseEvent) {
    // console.log(event)
    // console.log(`x: ${event.clientX}, y: ${event.clientY}`);
    let d = 0;
    switch (event.type) {
      case ",": d = -5; break;  // normal
      case ".": d = +5; break;
      case "?": d = -10; break; // shift
      case ":": d = +10; break;
      case "<": d = -2; break;  // rightAlt
      case ">": d = +2; break;
      case " ": this.togglePlayback(); break;
    }

    if (d) {
      if (this.video.paused) this.video.currentTime += Math.sign(d) * 1 / this.expectedFramerate
      else this.video.currentTime += d
    }
  }
}
