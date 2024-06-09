import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-bar-widget',
  templateUrl: './single-bar-widget.component.html',
  styleUrls: ['./single-bar-widget.component.scss']
})
export class SingleBarWidgetComponent {
  @Input() siteName:string='site';
  @Input() bluePer:number=0;
  @Input() redPer:number=0;
  @Input() orangePer:number=0;
}
