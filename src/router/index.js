import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '@vws/ClientesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Inicio,
      // Para conseguir los props, en la vista solo se usa defineProps
      props: { titulo: 'Listado de Clientes' } 
    },
    {
      path: '/agregar',
      name: 'agregar-cliente',
      // Esta forma de importar funciona para no cargar esta pagina al iniciar la app2
      component: () => import('@vws/NuevoClienteView.vue')
    },
    {
      // Se hace un placeholder a la ruta para dinamismo
      path: '/editar/:id',
      name: 'editar-cliente',
      // Esta forma de importar funciona para no cargar esta pagina al iniciar la app2
      component: () => import('@vws/EditarClienteView.vue'),
      props: { titulo: 'Editar Cliente' }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@vws/NotFoundView.vue')
    }
  ]
})

export default router
