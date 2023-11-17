<template>
    <div class="editor list">
        <div class="editor__item">
            <label>
                Ім'я кандидата
                <input v-model="currentCandidate.name" type="text" @keydown="onKeyDown" />
            </label>
        </div>
        <div class="editor__item">
            <label>
                Посада кандидата
                <select v-model="currentCandidate.position">
                    <option v-for="field in getFieldsList" :key="field.id" :value="field.id">
                        {{ field.title }}
                    </option>
                </select>
            </label>
        </div>
        <div class="action">
            <button class="button-action" @click="onAction">{{ actionButtonTitle }}</button>
            <button class="button-action" @click="onCancel">Відмінити</button>
        </div>
        <strong v-if="errorMessage" class="err-mesg">{{ errorMessage }}</strong>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'CandEdit',

    data() {
        return {
            currentCandidate: {},
        }
    },

    computed: {
        ...mapGetters(['errorMessage']),
        ...mapGetters('candidates', ['getCandidateById']),
        ...mapGetters('fields', ['getFieldById', 'getFieldsList']),
        currentCandidateId() {
            return this.$route.params.candidateId
        },
        actionButtonTitle() {
            return this.currentCandidateId ? 'Зберегти' : 'Додати'
        },
    },

    created() {
        this.setFieldsList()
        this.currentCandidate = { ...this.getCandidateById(this.currentCandidateId) }
    },

    methods: {
        ...mapActions(['setErrorMessage', 'validateName']),
        ...mapActions('candidates', ['addCandidate', 'updateCandidate']),
        ...mapActions('fields', ['setFieldsList']),
        onAction() {
            if (this.currentCandidate.name && this.currentCandidate.position) {
                if (!this.currentCandidateId) this.addCandidate(this.currentCandidate)
                else this.updateCandidate(this.currentCandidate)
                this.$router.push({ name: 'candidates' })
                this.setErrorMessage(null)
            } else {
                this.setErrorMessage("Заповнення всіх полів є обов'язковим")
                setTimeout(() => {
                    this.setErrorMessage(null)
                }, 2000)
            }
        },
        onCancel() {
            this.$router.push({ name: 'candidates' })
        },
        onKeyDown(event) {
            this.validateName(event)
        },
    },
}
</script>

<style lang="scss" scoped>
</style>