import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';

import { MegaProvider } from './../../providers/mega/mega';

/**
 * Generated class for the MegaBetComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
*/
@Component({
	selector: 'mega-bet',
	templateUrl: 'mega-bet.html'
})
export class MegaBetComponent {

	dump: Array<any>;
	roulette: Array<any>;

	constructor(private megaProvider: MegaProvider, private alertController: AlertController) {
		
	}

	ngOnInit() {		
		this.megaProvider.getDump(
			success => {

				this.dump = success;

				// Inicia o array com zeros
				this.roulette = Array.apply(null, new Array(60)).map(Number.prototype.valueOf, 0);
				
				// Cria a roleta
				this.dump.map(contest => {
					contest.result.map(number => {
						this.roulette[parseInt(number) - 1]++;
					});
				});
			},
			error => {
				console.log(error);
				alert('Error!');
			}
		);
	}

	showContest(contestNumber) {
		if (!contestNumber.value)
			return;

		let contest:any = this.dump[this.dump.length - parseInt(contestNumber.value)];

		console.log('CONTEST', contest);

		this.alertController.create({
			title: 'Concurso ' + contest['contest'],
			subTitle: contest['result'],
			buttons: ['Ok']
		}).present();
	}

	showSimulationResult() {
		this.alertController.create({
			title: 'Simulacao',
			subTitle: this.simulate().toString(),
			buttons: ['Ok']
		}).present();
	}

	spinRoulette() {
		let rouletteSize = this.dump.length * 6;
		let x = Math.random() * rouletteSize;
		return this.getNumberOnRoulette(x);
	}

	getNumberOnRoulette(value: Number) {
		let sum = 0;

		for(let i = 0; i < this.roulette.length; i++) {
			sum += this.roulette[i];

			if (value <= sum) {
				return i + 1;
			}
		}
	}

	simulate() {
		let result = new Array();

		result.push(this.spinRoulette());
		while (result.length < 6) {
			let number = this.spinRoulette();

			if (result.indexOf(number) < 0)
				result.push(number);
		}

		return result.sort((a, b) => { return a - b });
	}
	
}
