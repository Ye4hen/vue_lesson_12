import { candidatesData } from "@/data/companyData"
import { isCorrespondToFilter } from "./helpers";

export default {
	namespaced: true,
	state: {
		candidatesList: [],
		filterObj: {},
		errorMessage: null,
	},
	getters: {
		candidatesList: ({ candidatesList }) => candidatesList,
		errorMessage: ({ errorMessage }) => errorMessage,
		getCandidateById: (state) => (candidateId) => {
			return state.candidatesList.find((candidate) => candidate.id == candidateId)
		},
		getCandidatesList: (state, getters, rootState, rootGetters) => {
			return state.candidatesList.map((candidate) => ({
				id: candidate.id,
				name: candidate.name,
				positionName: rootGetters['fields/getFieldById'](candidate.position).title
			}));
		},
		getFilteredCandidatesList: (state, getters) => {
			const filteredCandidatesList = getters.getCandidatesList.filter((candidate) => isCorrespondToFilter(candidate, state.filterObj))

			if (!filteredCandidatesList.length) {
				state.errorMessage = "🤔Кандидати відсутні"
				console.log(filteredCandidatesList);
			}
			else state.errorMessage = null

			return filteredCandidatesList
		},
	},
	mutations: {
		setCandidatesList(state, list) {
			state.candidatesList = list
		},
		removeCandidate(state, candidateIndex) {
			state.candidatesList.splice(candidateIndex, 1)
		},
		addCandidate(state, candidate) {
			state.candidatesList.push(candidate)
		},
		updateCandidate(state, candidateObj) {
			const candidateIndex = state.candidatesList.findIndex((candidate) => candidate.id === candidateObj.id)
			state.candidatesList[candidateIndex] = candidateObj
		},
		setFilter(state, filterObjData) {
			state.filterObj = filterObjData
		},
	},
	actions: {
		setCandidatesList({ commit }) {
			commit("setCandidatesList", candidatesData)
		},
		removeCandidate({ commit }, candidateIndex) {
			commit("removeCandidate", candidateIndex)
		},
		addCandidate({ commit }, candidate) {
			commit("addCandidate", {
				id: new Date().getTime(),
				...candidate
			})
		},
		updateCandidate({ commit }, candidateObj) {
			commit("updateCandidate", candidateObj)
		},
		updateFilter({ commit }, filterObjData) {
			commit("setFilter", filterObjData)
		},
	},
	modules: {},
}
