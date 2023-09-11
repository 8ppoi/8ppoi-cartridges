const userNames = {
	ExamplesColor: '8ppoi',
	ExamplesControllers: '8ppoi',
	ExamplesGraphicMap: '8ppoi',
	ExamplesImageMap: '8ppoi',
	ExamplesQueue: '8ppoi',
	ExamplesSound: '8ppoi',
	ExamplesSprite: '8ppoi',
	ExamplesState: '8ppoi',
	ExamplesTextMap: '8ppoi',
	WelcomeTo8ppoi: '8ppoi',
};

import { render } from "https://deno.land/x/gfm/mod.ts";

import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();
router.get('/', async context => {
	context.response.body = 'welcome to 8ppoi';
})
router.get('/favicon.ico', async context => {
	await context.send({
		root: `${Deno.cwd()}/8ppoi-dev`,
		index: 'index.html',
	});
})
router.get('/bootstrap/:any', async context => {
	await context.send({
		root: `${Deno.cwd()}`,
		index: 'index.html',
	});
})
router.get('/:cartridgeName', async context => {
	const cartridgeName = context.params.cartridgeName.replace(/#.*/, '');
	const decoder = new TextDecoder('utf-8');
	let decoded = decoder.decode(Deno.readFileSync('./index.html'));
	decoded += decoder.decode(Deno.readFileSync('./download.html'))
		.replace(/#repositoryUrl#/, `https://github.com/${userNames[cartridgeName]}/${cartridgeName}`)
		.replace(/#download#/, `https://github.com/${userNames[cartridgeName]}/${cartridgeName}/archive/refs/heads/master.zip`)
	;
	decoded += decoder.decode(Deno.readFileSync('./description.html')).replace(/#description#/, render(decoder.decode(Deno.readFileSync(`./8ppoi-dev/src/cartridges/${cartridgeName}/README.md`))));
	context.response.body = decoded;
})
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.use(async context => {
	await context.send({
		root: `${Deno.cwd()}/8ppoi-dev`,
		index: 'index.html',
	});
});

await app.listen({ port: 8000 });
