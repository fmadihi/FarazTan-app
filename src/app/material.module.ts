import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from 'ngx-flexible-layout';
@NgModule({
  imports: [MatSlideToggleModule,MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule,FlexLayoutModule,MatButtonModule],
  exports: [MatSlideToggleModule,MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule,FlexLayoutModule,MatButtonModule],
})
export class MaterialModule {}
