import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WorkersView from "../views/WorkersView.vue";
import WorkerEdit from "../views/WorkerEdit.vue";
import CandView from "../views/CandView.vue";
import CandEdit from "../views/CandEdit.vue";
import AssignmentsView from "../views/AssignmentsView.vue"

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/workers",
		name: "workers",
		component: WorkersView,
	},
	{
		path: "/worker/:workerId?",
		name: "worker",
		component: WorkerEdit,
	},
	{
		path: "/candidates",
		name: "candidates",
		component: CandView,
	},
	{
		path: "/candidate/:candidateId?",
		name: "candidate",
		component: CandEdit,
	},
	{
		path: "/assignments",
		name: "assignments",
		component: AssignmentsView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
