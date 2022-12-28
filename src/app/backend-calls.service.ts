import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoDto } from './video-dto';

@Injectable({
  providedIn: 'root'
})
export class BackendCallsService {

  private BASEURL = "http://localhost:8080";
  isLogin: boolean = false;

  constructor(private httpClient: HttpClient) {
  }

  uploadVideo(endPoint: string, body: any): Observable<any> {
    return this.httpClient.post(`${this.BASEURL}${endPoint}`, body);
  }


  getVideo(videoId: string): Observable<VideoDto> {
    return this.httpClient.get<VideoDto>(`${this.BASEURL}${videoId}`);
  }


  getAllVideos(endPoint: string): Observable<any> {
    return this.httpClient.get(`${this.BASEURL}${endPoint}`);
  }

  Post(endPoint: string, body: object): Observable<any> {
    return this.httpClient.post(`${this.BASEURL}${endPoint}`, body);
  }
}
