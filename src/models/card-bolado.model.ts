export class CardBolado {

	public imageUrl: string;
	public title: string;
	public content: string;

	constructor(cardInfo: any) {
		this.imageUrl = cardInfo.imageUrl;
		this.title = cardInfo.title;
		this.content = cardInfo.content;
	}
}