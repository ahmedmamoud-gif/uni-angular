import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendCallsService } from '../backend-calls.service';
import { VideoDto } from '../video-dto';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  video: VideoDto | undefined;
  constructor(private activated: ActivatedRoute, private videoService: BackendCallsService) {
    const id = this.activated.snapshot.paramMap.get("videoId");
    this.videoService.getVideo(`/api/videos/${id}`).subscribe(
      res => this.video = res,
      err => console.log(err)
    )
   }
  ngOnInit(): void {
  }

}
