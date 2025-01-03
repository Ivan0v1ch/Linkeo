<template>
    <NavApp />
    <div class="main">
        <FilterApp />        
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCountrie } from './composables/useCountrie';
import FilterApp from './components/FilterApp.vue';
import NavApp from './components/NavApp.vue';


const { codeContrie } = useCountrie();
const countrie = ref(codeContrie)

</script>