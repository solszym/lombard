export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.515e6f55.js","imports":["_app/immutable/entry/start.515e6f55.js","_app/immutable/chunks/index.6c91fde0.js","_app/immutable/chunks/singletons.ba494946.js","_app/immutable/chunks/index.9c2cf1e1.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.df054092.js","imports":["_app/immutable/entry/app.df054092.js","_app/immutable/chunks/index.6c91fde0.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
