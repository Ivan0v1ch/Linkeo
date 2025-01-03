<template>
    <div class="cardContainer">
        <div class="card" v-for="(person, index) in persons" :key="index">
            <!-- <h2>{{ person.location.city }}</h2>
            <h2>{{ person.location.state }}</h2>
            <h2>{{ person.location.country }}</h2> -->
            <div class="cardInfo">
                <img :src="person.picture.large" alt="person.name.first">
                <div class="personalInfo">
                    <p class="titleCard">{{ person.name.first }} {{ person.name.last }}</p>
                    <p class="info"> Edad: {{ person.dob.age }}</p>
                    <p>Correo Electronico: <br>{{ person.email }} </p>
                    <p>Numero Telefonico: <br>{{ person.phone }} </p>
                </div>
            </div>
            <i class="fa-solid fa-location-dot"></i>
        </div>
    </div>
</template>

<script setup>

//Definicion de las props
const props = defineProps({
    persons: {
        type: Array
    },
});

//const { gender, name: { first, last }, location: { city, state, country }, email, dob: { age }, phone, picture: { medium } } = personsForCountrie



</script>