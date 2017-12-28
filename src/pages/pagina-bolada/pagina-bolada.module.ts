import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaBoladaPage } from './pagina-bolada';

@NgModule({
  declarations: [
    PaginaBoladaPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaBoladaPage),
  ],
})
export class PaginaBoladaPageModule {}
