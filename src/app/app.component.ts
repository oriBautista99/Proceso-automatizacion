import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'HMI-Parcial2';
  paso=0;
  setInter:any;
  activeStart = false;


  start(){
    let step = 0;
    this.activeStart = true;
    this.setInter = setInterval(() => {
      step++;
      this.paso = step;
      if(step == 5){
        step = 0;
        this.paso = 0;
      }
    }, 4000);
  }

  end(){
    this.paso = 0;
    this.activeStart = false;
    clearInterval(this.setInter);
  }
}
