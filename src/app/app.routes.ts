import { Routes } from '@angular/router';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';

export const routes: Routes = [
    {path:'',component:WellcomeComponent},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'trainig',component:TrainingComponent}
];
