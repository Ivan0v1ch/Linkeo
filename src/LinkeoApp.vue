<template>
    <NavApp />
    <div class="main">
        <FilterApp @countrieCode="getPersons" />
        <CardItem :persons="personsCountrie" />
    </div>

</template>


<script setup>
//Importacion de Componentes
import FilterApp from './components/FilterApp.vue';
import NavApp from './components/NavApp.vue';
import CardItem from './components/CardItem.vue';

//Importacion de ref
import { ref } from 'vue';


const personsCountrie = ref()


const getPersons = async (countrie) => {
    const url = `https://randomuser.me/api/?nat=${countrie}&results=3&inc=gender,name,email,phone,picture,location,dob`;
    const resp = await fetch(url);
    const data = await resp.json();
    personsCountrie.value = data.results    
}

</script>