import React from 'react';

function Banner({ verdict, resetGame }) {
	const { outcome, num, answer } = verdict;
	return (
		<div className={`${outcome} banner`}>
			{outcome === 'happy' ? (
				<p>
					<strong>Congratulations!</strong> Got it in{' '}
					<strong>{`${num} guess${num > 1 ? 'es' : ''}`}</strong>.
				</p>
			) : (
				<p>
					Sorry, the correct answer is <strong>{answer}</strong>.
				</p>
			)}
			<button id="reset" onClick={resetGame}>
				Play again
			</button>
		</div>
	);
}

export default Banner;
