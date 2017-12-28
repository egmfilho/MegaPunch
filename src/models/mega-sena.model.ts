export class MegaSena {
	contest: string;
	date: string;
	result: Array<string>;

	constructor(contestInfo: any) {
		this.contest = contestInfo.contest;
		this.date = contestInfo.date;
		this.result = contestInfo.result;
	}
}