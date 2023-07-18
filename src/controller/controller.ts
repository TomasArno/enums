import * as model from '../model/model';

const enum StatusCode {
	OK = 200,
	BAD_REQUEST = 400,
	NOT_FOUND = 404,
}

const enum Messages {
	OK = 'Solicitud exitosa!',
	BAD_REQUEST = 'Por favor verifique los parámetros ingresados.',
	NOT_FOUND = 'No se encontró la información solicitada.',
}

interface Response {
	status: StatusCode;
	response: model.Episode | model.Episode[];
}

type ResponseErrorMsg = `${number} - ${string}`;

function getAllEpisodes() {
	return model.getAllEpisodes();
}

function getEpisodeByID(id: number): Response | ResponseErrorMsg {
	if (isNaN(id)) return `${StatusCode.BAD_REQUEST} - ${Messages.BAD_REQUEST}`;

	const episode = model.getEpisodeByID(id);

	// Con esta linea retornamos un mensaje de error, en el caso que el usuario ingrese letras como parámetro o un ID fuera del rango.
	if (!episode) return `${StatusCode.NOT_FOUND} - ${Messages.NOT_FOUND}`;

	return {
		status: StatusCode.OK,
		response: episode,
	};
}

function getEpisodesBySeason(season: 1 | 2): Response | ResponseErrorMsg {
	const episodes = model.getEpisodesBySeason(season);

	if (!episodes) return `${StatusCode.NOT_FOUND} - ${Messages.NOT_FOUND}`;

	return {
		status: StatusCode.OK,
		response: episodes,
	};
}

export { getAllEpisodes, getEpisodeByID, getEpisodesBySeason };
