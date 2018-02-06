export const GENERATE_AURAL_STATUS = "GENERATE_AURAL_STATUS";
export const generateAuralStatus = () => ({
  type: GENERATE_AURAL_STATUS
});

export const RESTART_GAME = "RESTART_GAME";
export const restartGame = correctAnswer => ({
  type: RESTART_GAME,
  correctAnswer
});

export const MAKE_GUESS = "MAKE_GUESS";
export const makeGuess = guess => ({
  type: MAKE_GUESS,
  guess
});
