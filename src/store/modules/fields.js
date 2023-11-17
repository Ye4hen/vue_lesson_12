import { fieldsData } from "@/data/companyData"

export default {
	namespaced: true,
	state: {
		fieldsList: [],
	},
	getters: {
		getFieldsList: ({ fieldsList }) => fieldsList,
		getFieldById: (state) => (fieldId) => {
			return state.fieldsList.find((field) => field.id == fieldId);
		},
	},
	mutations: {
		setFieldsList(state, list) {
			state.fieldsList = list
		},

	},
	actions: {
		setFieldsList({ commit }) {
			commit("setFieldsList", fieldsData)
		},
	},
	modules: {},
}
