import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, RequestMethod, ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/map';

import { MegaSena } from './../../models/mega-sena.model';

/*
Generated class for the MegaProvider provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular DI.
	*/
@Injectable()
export class MegaProvider {
	
	url: string;

	constructor(private http: Http) {
		this.url = 'https://gist.githubusercontent.com/egmfilho/0198aaae7865b2064efd88e85b951e34/raw/12955a3916bbd543c8f74fb7cd7e19a38d2e75f2/mega-dump.json';
	}
	
	getDump(success, error) {
		let options = new RequestOptions();

		options.url = this.url;
		options.method = RequestMethod.Get;
		options.responseType = ResponseContentType.Json;		

		this.http.request(new Request(options))
			.map(res => {
				return res.json().map(contest => {
					return new MegaSena(contest);
				});
			})
			.subscribe(success, error);
	}
}
