import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainMenu } from '../models/menu';
@Injectable({
  providedIn: 'root'
})
export class MainMenuService {
  url: string = '../assets/menu.json';
  constructor(public http: HttpClient) { 
    
  }

  getMainMenu(){
    return this.http.get<MainMenu>(this.url);
  }
}
