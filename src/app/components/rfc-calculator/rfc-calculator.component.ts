import { Component } from '@angular/core';
import { RFC } from 'src/app/models/RFC';

@Component({
  selector: 'app-rfc-calculator',
  templateUrl: './rfc-calculator.component.html',
  styleUrls: ['./rfc-calculator.component.scss']
})
export class RfcCalculatorComponent {
  name = '';
  a_paterno ='';
  a_materno = '';
  fechaNac: any = '';
  myRfc = new RFC(this.name,this.a_paterno,this.a_materno,this.fechaNac);
  showRFC = '';

  getValues(){
    console.log(this.fechaNac)
  }

  getRFC(){
    this.myRfc.setName(this.name);
    this.myRfc.setAPaterno(this.a_paterno);
    this.myRfc.setAMaterno(this.a_materno);
    this.myRfc.setFechaNac(this.fechaNac);
    this.showRFC=this.myRfc.getRfc();
  }

  cleanDatos(){
    this.myRfc.setName('');
    this.myRfc.setAPaterno('');
    this.myRfc.setAMaterno('');
    this.myRfc.setFechaNac('');
    this.showRFC='';
    this.name = '';
    this.a_materno = '';
    this.a_paterno = '';
    this.fechaNac = '';
  }

}
