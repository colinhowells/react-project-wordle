import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ checkedGuesses }) {
	return (
		<div className="guess-results">
			{range(NUM_OF_GUESSES_ALLOWED).map((num) => (
				<Guess key={num} guess={checkedGuesses[num]} />
			))}
		</div>
	);
}

export default GuessResults;
