export default {
	async fetch(request, env, ctx): Promise<Response> {
		return Response.json({
			msg : 'Hello from Pankaj World!'
		});
	},
} satisfies ExportedHandler<Env>;
