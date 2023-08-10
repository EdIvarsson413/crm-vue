<template>
    <div>
        <div>
            <RouterLink 
                :to="{ name: to }"
                class="bg-blue-600 rounded-md block md:inline-block py-2 px-3 
                        font-bold uppercase text-white text-sm shadow-md hover:bg-blue-500 
                        hover:shadow-blue-300 transition-colors"
            >
                <slot></slot>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
    to: {
        type: String,
        required: true
    }
})
</script>