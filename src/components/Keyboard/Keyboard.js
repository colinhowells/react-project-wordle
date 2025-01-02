import React from 'react';

function Keyboard({ checkedGuesses }) {
	const rows = 'QWERTYUIOP*ASDFGHJKL*ZXCVBNM'.split('*');

	function getBestStatus(newStatus, maybeExistingStatus) {
		if (!maybeExistingStatus) return newStatus;
		const statusValues = {
			incorrect: 1,
			misplaced: 2,
			correct: 3
		};
		const highestValue = Math.max(statusValues[newStatus], statusValues[maybeExistingStatus]);
		// what is the status (key) for that value?
		return Object.keys(statusValues).find((key) => statusValues[key] === highestValue);
	}

	let keyStatuses = new Map();
	checkedGuesses.flat().forEach((guessCharObj) => {
		const newStatus = guessCharObj.status;
		const maybeExistingStatus = keyStatuses.get(guessCharObj.letter);
		keyStatuses.set(guessCharObj.letter, getBestStatus(newStatus, maybeExistingStatus));
	});

	return (
		<div id="keyboard">
			{rows.map((row, i) => (
				<div key={i} className="row">
					{row.split('').map((letter) => (
						<div key={letter} className={'key ' + keyStatuses.get(letter)}>
							{letter}
						</div>
					))}
				</div>
			))}
		</div>
	);
}

export default Keyboard;
