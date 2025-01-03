import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm';
import GuessResults from '../GuessResults';
import Keyboard from '../Keyboard';

function Game() {
	const [answer, setAnswer] = React.useState(() => sample(WORDS));
	const [guesses, setGuesses] = React.useState([]);
	const [verdict, setVerdict] = React.useState(null);

	console.log(`Answer: ${answer}`);

	function resetGame() {
		const newAnswer = sample(WORDS);
		setAnswer(newAnswer);
		setGuesses([]);
		setVerdict(null);
	}

	function addGuess(guess) {
		const newGuesses = [...guesses, guess];
		setGuesses(newGuesses);
		if (guess === answer) {
			setVerdict({ outcome: 'happy', num: newGuesses.length });
		} else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
			setVerdict({ outcome: 'sad', answer });
		}
	}

	const checkedGuesses = guesses.map((guess) => checkGuess(guess, answer));

	return (
		<>
			<GuessResults checkedGuesses={checkedGuesses} answer={answer} />
			<GuessForm addGuess={addGuess} verdict={verdict} resetGame={resetGame} />
			<Keyboard checkedGuesses={checkedGuesses} answer={answer} />
		</>
	);
}

export default Game;
