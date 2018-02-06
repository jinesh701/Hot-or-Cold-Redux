import { GENERATE_AURAL_STATUS, RESTART_GAME, MAKE_GUESS } from "./actions";

const initialState = {
  guesses: [],
  feedback: "Make your guess!",
  auralStatus: "",
  correctAnswer: Math.round(Math.random() * 100) + 1
};

export default (state = initialState, action) => {
  if (action.type === RESTART_GAME) {
    return Object.assign({}, state, {
      guesses: [],
      feedback: "Make your guess!",
      auralStatus: "",
      correctAnswer: action.correctAnswer
    });
  }
  return state;
};
