import { NgModule } from '@angular/core';
import { CardBoladoComponent } from './card-bolado/card-bolado';
import { CardBolado } from './../models/card-bolado.model';
import { MegaBetComponent } from './mega-bet/mega-bet';

@NgModule({
	declarations: [CardBoladoComponent, CardBolado,
    MegaBetComponent],
	imports: [],
	exports: [CardBoladoComponent,
    MegaBetComponent]
})
export class ComponentsModule {}
