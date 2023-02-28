import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-valve1',
  templateUrl: './valve1.component.html',
  styleUrls: ['./valve1.component.css']
})
export class Valve1Component {
  @Input() open = false;
}
