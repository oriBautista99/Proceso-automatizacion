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


  start(){
    let step = 0;
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
    clearInterval(this.setInter);
  }
}
