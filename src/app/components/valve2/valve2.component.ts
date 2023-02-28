import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-valve2',
  templateUrl: './valve2.component.html',
  styleUrls: ['./valve2.component.css']
})
export class Valve2Component {
  @Input() open = false;
}
