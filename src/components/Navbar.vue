<template>
    <nav>
        <v-toolbar color="white" dark class="primary">
            <v-toolbar-title>SLB Live-Stream</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-toolbar-items>
              <v-btn color="primary" depressed to="/">Home</v-btn>
              <v-btn color="primary" depressed to="/about">About</v-btn>
              <v-btn color="primary" depressed to="/artists">Artists</v-btn>
              <v-btn color="primary" depressed to="/schedule">Schedule</v-btn>  
              <v-btn color="primary" depressed to="/registerform">Register</v-btn>
              <v-btn color="primary" depressed to="/loginform">Login</v-btn>
            </v-toolbar-items>

            <template v-if="$vuetify.breakpoint.smAndUp">
            <v-btn icon>
                <v-icon>mdi-export-variant</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-delete-circle</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-plus-circle</v-icon>
            </v-btn>
            </template>
        </v-toolbar>
    </nav>
</template>

<script>
export default {

}
</script>
