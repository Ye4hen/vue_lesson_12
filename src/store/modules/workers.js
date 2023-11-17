import { workersData } from "@/data/companyData"

export default {
	namespaced: true,
	state: {
		workersList: [],
	},
	getters: {
		workersList: ({ workersList }) => workersList,
		getWorkerById: (state) => (workerId) => {
			return state.workersList.find((worker) => worker.id == workerId)
		},
		getWorkersList: (state, getters, rootState, rootGetters) => {
			return state.workersList.map((worker) => ({
				id: worker.id,
				name: worker.name,
				positionName: rootGetters['fields/getFieldById'](worker.position).title
			}));
		},
	},
	mutations: {
		setWorkersList(state, list) {
			state.workersList = list
		},
		removeWorker(state, workerIndex) {
			state.workersList.splice(workerIndex, 1)
		},
		addWorker(state, worker) {
			state.workersList.push(worker)
		},
		updateWorker(state, workerObj) {
			const workerIndex = state.workersList.findIndex((worker) => worker.id === workerObj.id)
			state.workersList[workerIndex] = workerObj
		}
	},
	actions: {
		setWorkersList({ commit }) {
			commit("setWorkersList", workersData)
		},
		removeWorker({ commit }, workerIndex) {
			commit("removeWorker", workerIndex)
		},
		addWorker({ commit }, worker) {
			commit("addWorker", {
				id: new Date().getTime(),
				...worker
			})
		},
		updateWorker({ commit }, workerObj) {
			commit("updateWorker", workerObj)
		}
	},
	modules: {},
}
