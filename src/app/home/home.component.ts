import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { BackendCallsService } from '../backend-calls.service';
import { VideoDto } from '../video-dto';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  videos: VideoDto[] = [];
  constructor(private router: Router, private videoService: BackendCallsService) {
    this.videoService.getAllVideos("/api/videos/all").subscribe(res => {
      this.videos = res.data;
    },
    err=> console.log(err)
    )
  }

  GoToSingle(id: string) {
    this.router.navigateByUrl(`videos/${id}`);
  }


}
