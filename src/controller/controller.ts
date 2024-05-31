import * as model from '../model/model';

const enum Messages {
	OK = 'Solicitud exitosa!',
	BAD_REQUEST = 'Por favor verifique los parámetros ingresados.',
	NOT_FOUND = 'No se encontró la información solicitada.',
}

interface Response {
	status: Messages;
	response: model.Episode | model.Episode[];
}

function getAllEpisodes() {
	return model.getAllEpisodes();
}

function getEpisodeByID(id: number): Response | string {
	if (!id) return `${Messages.BAD_REQUEST}`;

	const episode = model.getEpisodeByID(id);

	if (!episode) return `${Messages.NOT_FOUND}`;

	return {
		status: Messages.OK,
		response: episode,
	};
}

function getEpisodesBySeason(season: 1 | 2): Response | string {
	const episodes = model.getEpisodesBySeason(season);

	if (!episodes) return `${Messages.NOT_FOUND}`;

	return {
		status: Messages.OK,
		response: episodes,
	};
}

export { getAllEpisodes, getEpisodeByID, getEpisodesBySeason };
