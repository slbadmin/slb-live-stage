<template>
  <v-app >
    <Navbar/>

    <v-content class="mx-4 mb-4">
      <router-view/>
    </v-content>

    <v-footer dark>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>

  </v-app>
</template>

<script>

import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => {
    return {
      //
    }
  }
};
</script>
