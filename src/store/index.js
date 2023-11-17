import { createStore } from "vuex";
import workers from "./modules/workers";
import fields from "./modules/fields";
import candidates from "./modules/candidates";
import assignments from "./modules/assignments"

export default createStore({
	state: {
		errorMessage: null,
		isNameValid: true,
	},
	getters: {
		errorMessage: ({ errorMessage }) => errorMessage,
	},
	mutations: {
		setErrorMessage(state, message) {
			state.errorMessage = message
		},
		setIsNameValid(state, isValid) {
			state.isNameValid = isValid;
		},
	},
	actions: {
		setErrorMessage({ commit }, message) {
			commit("setErrorMessage", message)
		},
		validateName({ commit }, event) {
			const keyCode = event.keyCode || event.which;

			if (keyCode >= 48 && keyCode <= 57) {
				commit("setIsNameValid", false);
				event.preventDefault();
			} else {
				commit("setIsNameValid", true);
			}
		},
	},
	modules: {
		workers,
		fields,
		candidates,
		assignments
	},
});
