<template>
    <tr>
        <!-- Nnombre y correo -->
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-bold text-gray-900">{{ nombreCompleto }}</p>
            <p class="text-gray-500">{{ cliente.email }}</p>
        </td>

        <!-- Empresa -->
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold">{{ cliente.empresa }}</p>
            <p class="text-gray-600">{{ cliente.puesto }}</p>
        </td>

        <!-- Activo o inactivo? -->
        <td class="whitespace-nowrap px-3 py-4 text-sm">
            <button
                @click="$emit('cambiar-estado', { id: cliente.id, estado: cliente.estado})"
                class="px-5 py-1 rounded-full font-bold inline-flex leading-5"
                :class="[estadoCliente ? ' bg-green-100 text-green-600 hover:text-green-900' 
                                        : 'bg-gray-200 text-gray-600 hover:text-gray-900']"
                >
                {{ estadoCliente ? 'Activo' : 'Inactivo'}}
            </button>
        </td>

        <!-- Acciones -->
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
            <RouterLink
                :to="{ name: 'editar-cliente', params: { id: cliente.id } }"
                class="text-indigo-600 bg-blue-100 mr-5 px-2 py-1 hover:text-indigo-900 rounded"
            >
                Editar
            </RouterLink>

            <button
                class="text-red-600 bg-red-100 mr-5 px-2 py-1 hover:text-red-900 rounded"
                @click="$emit('eliminar-cliente', cliente.id)"
            >
                Eliminar
            </button>
        </td>
    </tr>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
    cliente: {
        type: Object,
        required: true
    }
})

defineEmits([ 'cambiar-estado', 'eliminar-cliente' ])

// Para mas limpieza en el template se usa este computed para juntar nombre y apellido
const nombreCompleto = computed(() => {
    return props.cliente.nombre + ' ' + props.cliente.apellido
})

const estadoCliente = computed(() => {
    return props.cliente.estado 
})
</script>