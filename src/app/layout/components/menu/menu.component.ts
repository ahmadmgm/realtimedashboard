import { Component } from '@angular/core';
import { MainMenuService } from './services/main-menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers:[MainMenuService]
})
export class MenuComponent {
  hideMenu:boolean=false;
  mainMenuList:any;
  constructor(private menuService:MainMenuService){
    this.menuService.getMainMenu().subscribe((menuItem)=>{
      this.mainMenuList = menuItem;
    })
  }
  showHideMenu(){
    this.hideMenu=this.hideMenu==true?false:true;
  }
}
