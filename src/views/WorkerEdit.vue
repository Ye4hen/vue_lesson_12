<template>
    <div class="editor list">
        <div class="editor__item">
            <label>
                Ім'я працівника
                <input v-model="currentWorker.name" type="text" @keydown="onKeyDown" />
            </label>
        </div>
        <div class="editor__item">
            <label>
                Посада працівника
                <select v-model="currentWorker.position">
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
    name: 'WorkerEdit',

    data() {
        return {
            currentWorker: {},
        }
    },

    computed: {
        ...mapGetters(['errorMessage']),
        ...mapGetters('workers', ['getWorkerById']),
        ...mapGetters('fields', ['getFieldById', 'getFieldsList']),
        currentWorkerId() {
            return this.$route.params.workerId
        },
        actionButtonTitle() {
            return this.currentWorkerId ? 'Зберегти' : 'Додати'
        },
    },

    created() {
        this.setFieldsList()
        this.currentWorker = { ...this.getWorkerById(this.currentWorkerId) }
    },

    methods: {
        ...mapActions(['setErrorMessage', 'validateName']),
        ...mapActions('workers', ['addWorker', 'updateWorker']),
        ...mapActions('fields', ['setFieldsList']),
        onAction() {
            if (this.currentWorker.name && this.currentWorker.position) {
                if (!this.currentWorkerId) this.addWorker(this.currentWorker)
                else this.updateWorker(this.currentWorker)
                this.$router.push({ name: 'workers' })
                this.setErrorMessage(null)
            } else {
                this.setErrorMessage("Заповнення всіх полів є обов'язковим")
                setTimeout(() => {
                    this.setErrorMessage(null)
                }, 2000)
            }
        },
        onCancel() {
            this.$router.push({ name: 'workers' })
        },
        onKeyDown(event) {
            this.validateName(event)
        },
    },
}
</script>

<style lang="scss" scoped>
</style>