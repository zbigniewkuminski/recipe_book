import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  password = 'masło';
  passwordHidden = true;
  justArray = [];
  
  btnClick() {
    this.passwordHidden = !this.passwordHidden;
    this.justArray.push(this.justArray.length + 1 +' ' + new Date());
  }
}
