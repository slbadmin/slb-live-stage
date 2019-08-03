<!-- Material form register -->
<template>
    <v-app id="registerform">
    <v-content>
      <v-container grid-list-xl>
       <v-card class="elevation-12">
           <v-toolbar color="primary" dark flat>  
               <v-toolbar-title justify-center>Registration Form</v-toolbar-title>
           </v-toolbar>
         <v-layout align-center justify-center  v-layout warp>
            <v-flex xs12 md4>
                <v-text-field v-model="firstname" :rules="nameRules" label="First name" required></v-text-field> 
            </v-flex>
            <v-flex xs12 md4>
                <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Last name" required></v-text-field>
            </v-flex>       
         </v-layout>
            <v-layout align-center justify-center v-layout warp>
                <v-flex xs12 md4>
                    <v-text-field v-model="address" :rules="nameRules" label="Address" required>
                    </v-text-field> 
                </v-flex>
                <v-flex xs12 md4>
                    <v-text-field v-model="aptnumber" :rules="nameRules" :counter="10" label="Apt number" required>
                    </v-text-field>
                </v-flex>       
            </v-layout>

         <v-layout align-center justify-center  v-layout warp>
            <v-flex xs12 md4>
                <v-text-field v-model="city" :rules="nameRules" label="City" required>
                    </v-text-field> 
                </v-flex>
                <v-flex xs12 md4>
                    <v-text-field v-model="state" :rules="nameRules" :counter="10" label="State" required>
                    </v-text-field>
                </v-flex>       
          </v-layout>
            <v-layout align-center justify-center v-layout warp>
                <v-flex xs12 md4>
                    <v-text-field v-model="zip" :rules="nameRules" label="Zip" required>
                    </v-text-field> 
                </v-flex>
                <v-flex xs12 md4>
                    <v-text-field v-model="mobilenumber" :rules="nameRules" :counter="10" label="Mobile number" required>
                    </v-text-field>
                </v-flex>       
            </v-layout>
            <v-layout align-center justify-center>
                <v-card-actions>
                    <v-spacer></v-spacer>
                        <v-btn color="primary">Submit</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-layout>

            </v-card>
        </v-container>
    </v-content>
    </v-app>
</template>
<!-- Material form register -->

<script>

export default {

};
</script>