<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="agregar-cliente">
                Agregar Cliente
            </RouterLink>
        </div>
        <Heading class="text-4xl font-extrabold text-slate-500">{{ titulo }}</Heading>
        
        <!-- Lista de clientes -->
        <div v-if="existenClientes" class="flow-root mx-auto  mt-10 p-5 bg-white shadow rounded-lg">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Nombre</th>
                                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Empresa</th>
                                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Estado</th>
                                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                                <Cliente 
                                    v-for="cliente in clientes" 
                                    :key="cliente.id" 
                                    :cliente="cliente"
                                    @cambiar-estado="cambiarEstado"
                                    @eliminar-cliente="eliminarCliente"
                                />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Si no hay clientes -->
        <p v-else class="text-center mt-10 font-bold text-gray-600">No hay clientes</p>
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import ClienteService from '../services/ClienteService'
import RouterLink from '@cmp/UI/RouterLink.vue'
import Heading from '@cmp/UI/Heading.vue'
import Cliente from '@cmp/Cliente.vue'

defineProps({
    titulo: {
        type: String,
        required: true
    }
})

// Arreglo de clientes
const clientes = ref([]);

// Tan pronto inicia la app consulta a la REST API
onMounted(() => {
    ClienteService.obtenerClientes()
        .then( ({ data }) => clientes.value = data)
        .catch( error => console.log('Hubo un error') )
})

// Revisarsi hay clientes en el state
const existenClientes = computed(() => {
    return clientes.value.length > 0
})

// Cambiar el esatdo de activo o inactivo
const cambiarEstado = ( { id, estado } ) => {
    ClienteService.actualizarEstado( id, { estado: !estado} )
        .then(() => {
            // Actualizar el cambio en el state
            const index = clientes.value.findIndex( cliente => cliente.id === id );
            clientes.value[index].estado = !clientes.value[index].estado
        })
        .catch( error => console.log(error) )
}

// Eliminar cliente
const eliminarCliente = ( id ) => {
    ClienteService.eliminarCliente( id )
        .then( () => {
            // Actualizar lista de clientes
            clientes.value = clientes.value.filter( cliente => cliente.id !== id );
        })
        .catch( error => console.log(error) )
}
</script>