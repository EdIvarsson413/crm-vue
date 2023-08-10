<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to='home'>
                Volver
            </RouterLink>
        </div>
        <Heading class="text-4xl font-extrabold text-slate-500">{{ titulo }}</Heading>

        <!-- Formulario con Formkit -->
        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-16 px-6">
                <FormKit
                    type="form"
                    submit-label="Guardar Cambios"
                    incomplete-message="No se pudo enviar, revisa los mensajes"
                    @submit="handleSubmit"
                    :model-value="formData"
                >
                    <!-- Nombre de usuario -->
                    <FormKit
                        type="text"
                        name="nombre"
                        label="Nombre"
                        placeholder="Nombre del Cliente"
                        validation="required"
                        :validation-messages="{ required: 'El nombre del cliente es obligatorio'}"
                    />

                    <!-- Apellido -->
                    <FormKit
                        type="text"
                        name="apellido"
                        label="Apellido"
                        placeholder="Apellido del Cliente"
                        validation="required"
                        :validation-messages="{ required: 'El apellido del cliente es obligatorio'}"
                    />

                    <!-- Email -->
                    <FormKit
                        type="text"
                        name="email"
                        label="Correo"
                        placeholder="Correo del Cliente"
                        validation="required|email"
                        :validation-messages="{ 
                            required: 'El correo del cliente es obligatorio',
                            email: 'Escriba una dirección de correo válido'
                        }"
                    />

                    <!-- Telefono -->
                    <FormKit
                        type="text"
                        name="telefono"
                        label="Telefono"
                        placeholder="Telefono: XXX-XXX-XXXX"
                        validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                        :validation-messages="{ matches: 'El formato no es válido' }"
                    />

                    <!-- Empresa -->
                    <FormKit
                        type="text"
                        name="empresa"
                        label="Empresa"
                        placeholder="Empresa del Cliente"
                    />

                    <!-- Puesto -->
                    <FormKit
                        type="text"
                        name="puesto"
                        label="Puesto"
                        placeholder="Puesto en la empresa"
                    />
                </FormKit>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue' 
import { useRouter, useRoute } from 'vue-router'
import ClienteService from '../services/ClienteService'
import { FormKit } from '@formkit/vue'
import RouterLink from '@cmp/UI/RouterLink.vue'
import Heading from '../components/UI/Heading.vue'

// Traer el router al componente
const router = useRouter();
const route = useRoute();

// Se obtiene el id del cliente
const { id } = route.params

const props = defineProps({
    titulo: {
        type: String,
        required: true
    }
})

// Se crea un objeto de modelo para mostrar los datos al entrar a la pagina
const formData = reactive({})
const errorCliente = ref('');

// Obtiene los datos del cliente al inciar la pagina
onMounted(() => {
    ClienteService.obtenerCliente( id )
        .then( ( {data} ) => {
            // Se hace copia de los datos importados
            Object.assign( formData, data );
        })
        // Redirecciona al 404
        .catch( error => router.push( { name: 'not-found' } ) )
})

const handleSubmit = ( data ) => {
    ClienteService.actualizarCliente( id, data )
        .then(() => router.push( { name: 'home' } ))
        .catch( error => console.log(error) )
}
</script>

<style>
.formkit-wrapper {
    max-width: 100%;
}

.formkit-input[type="submit"] {
    font-weight: 800;
    background: rgb( 30 41 59 );
}

.formkit-input[type="submit"]:hover {
    background: rgb(84, 91, 102);
    transition: background 300ms ease-in;
}
</style>