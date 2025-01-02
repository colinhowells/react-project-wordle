import React from 'react';

import { WORD_LENGTH } from '../../constants';
import Banner from '../Banner/Banner';

function GuessForm({ addGuess, verdict, resetGame }) {
	const [guess, setGuess] = React.useState('');

	function handleSubmit(e) {
		e.preventDefault();
		addGuess(guess);
		setGuess('');
	}

	return (
		<form id="guess-form" className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				type="text"
				id="guess-input"
				name="guess"
				pattern={`[A-Za-z]{${WORD_LENGTH}}`}
				value={guess}
				onChange={(e) => {
					if (e.target.value.length > WORD_LENGTH) return;
					setGuess(e.target.value.toUpperCase());
					if (e.target.validity.patternMismatch) {
						e.target.setCustomValidity(`Needs to be ${WORD_LENGTH} letters!`);
					} else {
						e.target.setCustomValidity('');
					}
				}}
				disabled={verdict}
			/>
			{verdict && <Banner verdict={verdict} resetGame={resetGame} />}
		</form>
	);
}

export default GuessForm;
