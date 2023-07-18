import * as controller from './controller/controller';

function processParams(params: string[]) {
	switch (params[0]) {
		case 'id':
			return { id: params[1] };
		case 'season':
			return { season: params[1] };
		default:
			return false;
	}
}

function getData(params: any) {
	if (params.id) return controller.getEpisodeByID(Number(params.id));

	// Tener en cuenta que las asersiones de tipo son solo para engañar a TS, no impacta en el código transpilado a JS. Por esto es que es necesario realizar verificaciones en el controlador.
	return controller.getEpisodesBySeason(params.season);
}

(function main(): void {
	const parametroBusqueda = processParams(process.argv.slice(2));

	if (parametroBusqueda) {
		const resultado = getData(parametroBusqueda);
		console.log(resultado);
	} else {
		console.log('Parametros erróneos...');
	}
})();
