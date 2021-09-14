import App from "@/App"
import FileView from "@/components/FileView"
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path: '/',
        component: App
    },
    {
        path: '/file',
        name: 'file',
        component: FileView,
        props: true
    },
]

const router = createRouter( {
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;