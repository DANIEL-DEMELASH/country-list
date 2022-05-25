<script setup>
    import gql from 'graphql-tag'
    import { useQuery } from '@vue/apollo-composable'

    const countries = gql`
        query countries {
            countries {
            name
            emoji
            code
            languages {
                name
            }
            continent {
                name
            }
            phone
            capital
            states {
                name
            }
            currency
            }
        }
    `;

    const { result, loading, error } = useQuery(countries);

    

</script>

<template>
    <p v-if="error">Something went wrong...</p>
    <p v-if="loading">Loading...</p>
    <p v-else v-for="country in result.countries" :key="country.id">
        <span>{{ country.name }}</span>
        <span>{{ country.emoji}}</span>
        <span>{{ country.continent.name}}</span>
        <span>{{ country.code}}</span>
        <span>{{ country.phone}}</span>
        <span>{{ country.capital}}</span>
        <span>{{ country.currency}}</span>
        <span v-for="language in country.languages" :key="language.name">
            {{ language.name ? language.name + "," : "no languages" }}
        </span>
        <span v-if="country.states.length > 0">
            <span v-for="state in country.states" :key="state.name">
               {{ state.name }} ,
            </span>
        </span>
        <span v-else>
           <!-- <p></p> -->
        </span>
    </p>
</template>

<style>

</style>