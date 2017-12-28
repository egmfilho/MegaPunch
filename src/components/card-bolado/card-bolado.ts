import { Component, Input } from '@angular/core';

import { AlertController } from 'ionic-angular';

import { CardBolado } from './../../models/card-bolado.model';

/**
* Generated class for the CardBoladoComponent component.
*
* See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
* for more info on Angular Components.
*/
@Component({
	selector: 'card-bolado',
	templateUrl: 'card-bolado.html'
})
export class CardBoladoComponent {

	@Input() cardBolado: CardBolado;
	
	constructor(public alertController: AlertController) {
		
	}
	
	select() {
		this.alertController.create({
			title: 'Card selected',
			subTitle: this.cardBolado.title,
			buttons: ['Ok']
		}).present();
	}
	
}
