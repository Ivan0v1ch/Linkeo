<template>
    <div class="filter">
        <ul class="listCountries">
            <li class="countries" @click="selectCountries" data-code="es" data-countriname="España">España(ES)</li>
            <li class="countries" @click="selectCountries" data-code="br" data-countriname="Brasil">Brasil (BR)</li>
            <li class="countries" @click="selectCountries" data-code="ca" data-countriname="Canadá">Canadá (CA)</li>
            <li class="countries" @click="selectCountries" data-code="mx" data-countriname="México">México (MX)</li>
            <li class="countries" @click="selectCountries" data-code="us" data-countriname="Estados Unidos">Estados
                Unidos (US)</li>
            <li class="countries" @click="selectCountries" data-code="es,br,ca,mx,us"
                data-countriname="España,Brasil,Canadá,México,Estados Unidos">Todos los paises</li>
        </ul>
    </div>
    <h2 class="titleCountrie" v-if="contrieName">Personas que podrias conocer en: {{ contrieName }}</h2>
</template>

<script setup>
//Importaciones
import { ref } from 'vue';

//Declaracion de variables dinamicas
const countrie = ref('')
const contrieName = ref('')
const emit = defineEmits(['countrieCode'])

//Metodo para obtener el codigo del pais y activar las clase active para el elemento seleccionado
const selectCountries = (e) => {
    const countrieCode = e.target.dataset.code;
    const selected = e.target;

    const allCountries = document.querySelectorAll('.countries')
    allCountries.forEach(country => {
        country.classList.remove('active');
    })
    selected.classList.add('active');
    countrie.value = countrieCode;
    contrieName.value = e.target.dataset.countriname
    emit('countrieCode', countrie.value);
}

</script>
