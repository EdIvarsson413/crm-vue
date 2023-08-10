<template>
    <div class="grid max-h-screen place-content-center">
        <div class="bg-white px-16 py-6 rounded-lg shadow-md text-center text-slate-700">
            <p class="text-2xl mb-5">
                <span class="block font-bold text-4xl mb-2">404</span>
                Esta página no existe
            </p>
            <p 
                class="hover:font-extrabold transition-all duration-150"
                @click="() => router.push( { name: 'home' } )"
            >
                Ir a la página principal
            </p>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();
</script>