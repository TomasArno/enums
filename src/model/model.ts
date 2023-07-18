import * as jsonfile from 'jsonfile';
const DB_PATH = 'src/database/rick-and-morty.json';

interface Episode {
	id: number;
	name: string;
	air_date: string;
	episode: string;
	characters: string[];
	url: string;
	created: string;
}

interface EpisodesInfo {
	count: number;
	pages: number;
	next: string;
	prev: null;
}

interface Database {
	info: EpisodesInfo;
	results: Episode[];
}

const getAllEpisodes = (): Database => jsonfile.readFileSync(DB_PATH);

const getEpisodeByID = (id: number): Episode | undefined =>
	getAllEpisodes().results.find((episode: Episode) => episode.id === id);

const getEpisodesBySeason = (season: 1 | 2) => {
	const episodes = getAllEpisodes().results.filter((episode: Episode) => {
		return episode.episode.includes(`S0${season}`);
	});

	return episodes;
};

export { getAllEpisodes, getEpisodeByID, getEpisodesBySeason, Episode };
