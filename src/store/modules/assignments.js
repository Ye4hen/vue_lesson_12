import { workingDaysData } from "@/data/companyData"


export default {
	namespaced: true,
	state: {
		assignmentsList: [],
		workingDaysList: [],
	},
	getters: {
		workingDaysList: ({ workingDaysList }) => workingDaysList,
		getAssignmentsList: (state) => state.assignmentsList,
		getFilledAssignmentsList: (state, getters, rootState, rootGetters) =>
			state.assignmentsList.map((assignment) => ({
				id: assignment.id,
				workerName: rootGetters['workers/getWorkerById'](assignment.workerId).name,
				workerPosition: rootGetters['workers/workersList']
					.find(worker => worker.id === assignment.workerId)
					? rootGetters['fields/getFieldById'](
						rootGetters['workers/workersList']
							.find(worker => worker.id === assignment.workerId).position
					).title
					: null,
				candidateName: rootGetters['candidates/getCandidateById'](assignment.candidateId).name,
				candidatePosition: rootGetters['candidates/candidatesList']
					.find(candidate => candidate.id === assignment.candidateId)
					? rootGetters['fields/getFieldById'](
						rootGetters['candidates/candidatesList']
							.find(candidate => candidate.id === assignment.candidateId).position
					).title
					: null,
				workingDay: state.workingDaysList.find(day => day.id === assignment.workingDayId).name,
			})),
	},
	mutations: {
		setWorkingDaysList(state, list) {
			state.workingDaysList = list
		},
		deleteAssignment(state, asgnIndex) {
			state.assignmentsList.splice(asgnIndex, 1)
		},
		addAssignment(state, assignment) {
			state.assignmentsList.push(assignment)
		},
	},
	actions: {
		setWorkingDaysList({ commit }) {
			commit("setWorkingDaysList", workingDaysData)
		},
		deleteAssignment({ commit }, asgnIndex) {
			commit("deleteAssignment", asgnIndex)
		},
		addAssignment({ commit }, assignment) {
			commit("addAssignment", {
				id: new Date().getTime(),
				...assignment,
			})
		},
	},
	modules: {},
}
