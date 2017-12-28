import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CardBolado } from './../../models/card-bolado.model';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	
	cards: Array<CardBolado>;
	
	constructor(public navCtrl: NavController) {
		this.cards = [new CardBolado({
			imageUrl: 'http://lorempixel.com/640/480/nature/1',
			title: 'Primeiro card',
			content: 'Parada doida do samurai louco!'
		}), new CardBolado({
			imageUrl: 'http://lorempixel.com/640/480/nature/2',
			title: 'Segundo card',
			content: 'Cotton eye Joe!!!'
		}), new CardBolado({
			imageUrl: 'http://lorempixel.com/640/480/nature/3',
			title: 'Red Rocks',
			content: 'Somewhere over this large amount of red rocks...'
		})];
	}
	
}
