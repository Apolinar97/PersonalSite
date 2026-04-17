import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Projects from '../views/Projects.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { title: 'Apolinar Camacho' }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: { title: 'About | Apolinar Camacho' }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: { title: 'Contact | Apolinar Camacho' }
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects,
        meta: { title: 'Projects | Apolinar Camacho' }
    },
    {
        path: '/projects/:slug',
        name: 'ProjectDetail',
        component: ProjectDetail,
        meta: { title: 'Projects | Apolinar Camacho' }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue'),
        meta: { title: 'Not Found | Apolinar Camacho' }
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
}
)

router.afterEach((to) => {
    document.title = to.meta.title || 'Apolinar Camacho'
})

export default router