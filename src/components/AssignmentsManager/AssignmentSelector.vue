<template>
    <div class="asgn__main-container">
        <div class="asgn__selectors">
            <div class="asgn__selector subtitle">
                <label>
                    Працівник
                    <select v-model="assignment.workerId">
                        <option v-for="worker in getWorkersList" :key="worker.id" :value="worker.id">
                            {{ worker.name }} - {{ worker.positionName }}
                        </option>
                    </select>
                </label>
            </div>
            <div class="asgn__selector subtitle">
                <label>
                    Кандидат
                    <select v-model="assignment.candidateId">
                        <option
                            v-for="candidate in getFilteredCandidatesList"
                            :key="candidate.id"
                            :value="candidate.id"
                        >
                            {{ candidate.name }} - {{ candidate.positionName }}
                        </option>
                    </select>
                </label>
            </div>
            <div class="asgn__selector subtitle">
                <label>
                    День
                    <select v-model="assignment.workingDayId">
                        <option v-for="workingDay in workingDaysList" :key="workingDay.id" :value="workingDay.id">
                            {{ workingDay.name }}
                        </option>
                    </select>
                </label>
            </div>
        </div>
        <button class="button" @click="onAdd">Додати</button>
        <strong v-if="errorMessage" class="err-mesg">{{ errorMessage }}</strong>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'AssignmentSelector',
    data() {
        return {
            assignment: {},
        }
    },
    computed: {
        ...mapGetters(['errorMessage']),
        ...mapGetters('workers', ['getWorkersList']),
        ...mapGetters('assignments', ['getFilledAssignmentsList', 'workingDaysList']),
        ...mapGetters('candidates', ['getCandidatesList', 'getFilteredCandidatesList']),
    },
    created() {
        this.setFieldsList()
        this.setWorkersList()
        this.setCandidatesList()
        this.setWorkingDaysList()
    },

    methods: {
        ...mapActions(['setErrorMessage']),
        ...mapActions('fields', ['setFieldsList']),
        ...mapActions('workers', ['setWorkersList']),
        ...mapActions('candidates', ['setCandidatesList']),
        ...mapActions('assignments', ['setWorkingDaysList', 'deleteAssignment', 'addAssignment']),
        onAdd() {
            const selectedWorkerIndex = this.getWorkersList.findIndex(
                (worker) => worker.id === this.assignment.workerId
            )
            const selectedCandidateIndex = this.getCandidatesList.findIndex(
                (candidate) => candidate.id === this.assignment.candidateId
            )
            if (this.assignment.candidateId && this.assignment.workerId && this.assignment.workingDayId) {
                this.addAssignment(this.assignment)
                this.getWorkersList.splice(selectedWorkerIndex, 1)
                this.getFilteredCandidatesList.splice(selectedCandidateIndex, 1)
                this.setErrorMessage(null)
                this.assignment = {}
            } else {
                this.setErrorMessage("⚠️Вибір працівника, кандидата та дня є обов'язковим")
                setTimeout(() => {
                    this.setErrorMessage(null)
                }, 2000)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
</style>