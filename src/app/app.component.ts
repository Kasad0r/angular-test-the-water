import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logButtonClick: Date[] = [];
  showParagraph = false;

  onClickSecretPassBtn(): void {
    this.showParagraph = !this.showParagraph;
    /*    let num = this.logButtonClick[this.logButtonClick.length - 1];
        this.logButtonClick[this.logButtonClick.length] = ++num;*/
    this.logButtonClick.push(new Date());
  }

}
