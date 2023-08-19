import { Component } from '@angular/core';

@Component({
  selector: 'calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  public writeme: string = "";
  public tmp: number = 0;

  public saveme(x: string) {
    if (x == "+") {
      this.tmp = this.tmp + Number(this.writeme);
      this.writeme = "";
      return;
    }
    this.writeme = this.writeme + x;
  }

  public delete() {
    this.writeme = "";
  }

  public result() {
    this.tmp = this.tmp + Number(this.writeme);
    this.writeme = String(this.tmp);
  }
}
