import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import { BackendCallsService } from '../backend-calls.service';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})

export class UploadVideoComponent  {

   @ViewChild('uploadFile', { static: true })browseFiles: ElementRef<HTMLInputElement> | undefined;

  fileUploaded: boolean = false;
  file: any;

  constructor(private videoService: BackendCallsService, private router: Router) {
  }

  HandleVideo(e:any) {
    this.file = e.target.files[0];
    this.fileUploaded = true;
}

  uploadVideo() {
    if (this.file !== undefined) {
      let formData = new FormData();
      formData.append("file", this.file);
      this.videoService.uploadVideo("/api/videos/upload", formData).subscribe(res => {
        this.router.navigateByUrl("");
      },
      err=> console.log(err)
      )
    }
  }
  HandleClick() {
    this.browseFiles?.nativeElement?.click();
  }
}
