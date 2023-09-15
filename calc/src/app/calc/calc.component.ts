import { Component } from '@angular/core';

@Component({
  selector: 'calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  public display: string = "";
  public nmb: string = "";
  public tmp: number = 0;
  public tmpFirst: number = 0;
  public operator: string = "";

  // saves clicked number 
  public saveme(x: string) {
    this.nmb = this.nmb + x;
    this.tmp = Number(this.nmb); 
    this.display = this.display + x;

  }

  // saves operator & resets the clicked number 
  public saveop(x: string) {
    if (x == "+" || "-" || "/" || "*") {
      this.tmpFirst = this.tmp; 
      this.nmb = "";
      this.tmp = 0;
      this.operator = x;
      this.display = this.display + x;
    }
  }
  
  public result() {
    if (this.operator === "+"){
      this.tmp = this.tmpFirst + this.tmp
      this.display = String(this.tmp);
      
    } else if (this.operator === "-"){
      this.tmp = this.tmpFirst - this.tmp
      this.display = String(this.tmp);
    
    } else if (this.operator === "*"){
        this.tmp = this.tmpFirst * this.tmp
        this.display = String(this.tmp);
      
    } else if (this.operator === "/" && this.tmp != 0){
      this.tmp = this.tmpFirst / this.tmp
      this.display = String(this.tmp);

    } else this.display = "Cannot divide by zero"
    
  } 

  public delete() {
    this.display = "";
    this.tmp = 0;
    this.nmb = "";
  }

}
