import React from 'react';
import { range } from '../../utils';
import { WORD_LENGTH } from '../../constants';

function Guess({ guess }) {
	return (
		<p className="guess">
			{range(WORD_LENGTH).map((num) => (
				<span key={num} className={'cell ' + (guess ? guess[num]?.status : '')}>
					{guess ? guess[num]?.letter : ''}
				</span>
			))}
		</p>
	);
}

export default Guess;
