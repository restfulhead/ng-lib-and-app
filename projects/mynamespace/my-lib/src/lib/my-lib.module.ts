import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { LibExampleComponent } from './lib-example/lib-example.component';



@NgModule({
  declarations: [
    MyLibComponent,
    LibExampleComponent
  ],
  imports: [
  ],
  exports: [
    MyLibComponent,
    LibExampleComponent
  ]
})
export class MyLibModule { }
