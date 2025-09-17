class LastFmWidget extends HTMLElement {
	#USERNAME = 'leefymoon';
	#API_KEY = '1bcf6f9f2134bb32df90f70cc1dfc5cf';

	#API_URL = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks';

	#track_info = {};
	shadow;

	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'closed' });
		this.render();
	}

	async getRecentTrack() {
		const apiUrl = `${this.#API_URL}&user=${this.#USERNAME}&api_key=${this.#API_KEY}&format=json`;
		const res = await fetch(apiUrl)
		const json = await res.json()
		const rt = json.recenttracks.track[0];
		const cover = rt.image.filter(i => i.size === 'medium')[0]['#text'];
		
		return { artist: rt.artist['#text'], name: rt.name, album: rt.album['#text'], cover };
	}

	async connectedCallback() {
		console.log("I'm connected...")
		this.#track_info = await this.getRecentTrack();

		console.log(this.#track_info);
		this.render();
	}

	render() {
		const CSS = `<style>
			span, pre, p {
				font-family: monospace;
				font-size: 16px;
				background-color: none;
				color: #fff;
				padding: 0.25rem .5rem;
			}

			.wrapper {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			}

			.wrapper.image {
				height: 30px!important;	
				width: 30px!important;
			}

			p {
				margin: 0;
			}
		</style>`

		if (this.#track_info.hasOwnProperty('name')) {
			this.shadow.innerHTML = `
				${CSS}

				<div class="wrapper">
					<div class="image">
						<img src="${this.#track_info.cover}"/>
					</div>
					<div class="track-info">
						<p>${this.#track_info.name}</p>
						<p>${this.#track_info.artist}</p>

					</div>
				</div>
			`
		} else {
			this.shadow.innerHTML = `
				${CSS}

				<span>loading...</span>
			`;
		}
	}
}

window.customElements.define('last-fm-widget', LastFmWidget)

