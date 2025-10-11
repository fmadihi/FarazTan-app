import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { FormsModule, NgForm } from "@angular/forms";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [MaterialModule, FormsModule,NgIf],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  onSubmit(form:NgForm){
    console.log(form)
  }
}
