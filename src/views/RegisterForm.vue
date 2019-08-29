<template>
    <v-app id="registerform">
    <v-content>
      <v-container grid-list-xl>
          <v-form  ref="form">
       <v-card class="elevation-12">
           <v-toolbar color="primary" dark flat>  
               <v-toolbar-title justify-center>Registration Form</v-toolbar-title>
           </v-toolbar>
           <!-- First name and Last name -->
         <v-layout align-center justify-center  v-layout warp>
            <v-flex xs12 md4>
                <v-text-field label="First name" v-model="firstName" rquired prepend-icon="edit" :rules="inputRules"></v-text-field> 
            </v-flex>
            <v-flex xs12 md4>
                <v-text-field label="Last name" v-model="lastName" required prepend-icon="edit" :rules="inputRules"></v-text-field>
            </v-flex>       
         </v-layout>
            <!--  Address and Apt number -->
            <v-layout align-center justify-center v-layout warp>
                <v-flex xs12 md4>
                    <v-text-field label="Address" v-model="address" required prepend-icon="edit" :rules="inputRules">
                    </v-text-field> 
                </v-flex>

                <v-flex xs12 md4>
                    <v-text-field label="Apt number" v-model="aptNumber" prepend-icon="edit">
                    </v-text-field>
                </v-flex>        
            </v-layout>

            <!-- City and State -->
         <v-layout align-center justify-center  v-layout warp>
            <v-flex xs12 md4>
                <v-text-field label="City" v-model="cityName" required prepend-icon="location_city" :rules="inputRules">
                    </v-text-field> 
                </v-flex>
                <v-flex xs12 md4>
                    <!--  
                    <v-text-field  label="State" v-model="stateName" required prepend-icon="edit">
                    </v-text-field>
                    -->
                    
                    <v-overflow-btn 
                       label="State" 
                       :items="dropdown_states" 
                       items-text="text" 
                       items-value="value" 
                       :v-model="selected"
                       >
                    </v-overflow-btn>
                    
                </v-flex>       
         </v-layout>

         <!-- Zip and Mobile number -->
         <v-layout align-center justify-center v-layout warp>
            <v-flex xs12 md4>
                <v-text-field :counter="5" label="Zip" v-model="zipCode" required prepend-icon="edit" :rules="inputRules">
                </v-text-field> 
            </v-flex>
            <v-flex xs12 md4>
                <v-text-field :counter="10" label="Mobile number" v-model="mobileNumber" required prepend-icon="call" :rules="inputRules">
                </v-text-field>
            </v-flex>       
         </v-layout>

         <!--  Email and password -->
         <v-layout align-center justify-center v-layout warp>
            <v-flex xs12 md4>
                <v-text-field label="Email address" v-model="emailAddress" required prepend-icon="email" :rules="inputRules">
                </v-text-field> 
            </v-flex>
            <v-flex xs12 md4>
                <v-text-field type="password" label="Password" v-model="password" required prepend-icon="visibility_off" :rules="inputRules">
                </v-text-field>
            </v-flex>       
         </v-layout>
            <!-- Submit button -->
            <v-layout align-center justify-center>
                <v-card-actions>
                    <v-spacer></v-spacer>
                        <v-btn color="primary" @click="submit" :loading="loading" >Submit</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-layout>

            </v-card>
          </v-form>
        </v-container>
    </v-content>
    </v-app>
</template>
<!-- Material form register -->

<script>
import db from '@/fb';

export default {
   data() {
      return {
        firstName: '',
        lastName: '',
        address: '',
        aptNumber: '',
        cityName: '',
        stateName: '',
        zipCode: '', 
        mobileNumber: '',
        emailAddress: '',
        password: '',
        stateName: '',
        selected: null,

        inputRules: [
            v => !!v || 'This field is required',
            v => v.length >= 3 ||'Minimum length is 3 characters'
        ],
        loading: false,
        dropdown_states:[
            { text: 'Albama', value: 'AL'},
            { text: 'Alaska', value: 'AK'} ,
            { text: 'Arizona', value: 'AZ'},
            { text: 'Arkansas', value: 'AR'},
            { text: 'California', value: 'CA'},
            { text: 'Colorado', value: 'CO'},
            { text: 'Connecticut', value: 'CT'},
            { text: 'District of Columbia', value: 'DC'},
            { text: 'Delaware', value: 'DE'},
            { text: 'Florida', value: 'FL'},
            { text: 'Georgia', value: 'GA'},
            { text: 'Hawaii', value: 'HI'},
            { text: 'Idaho', value: 'ID'},
            { text: 'Illinois', value: 'IL'},
            { text: 'Indiana', value: 'IN'},
            { text: 'Iowa', value: 'IA'},
            { text: 'Kansas', value: 'KS'},
            { text: 'Kentucky', value: 'KY'},
            { text: 'Louisiana', value: 'LA'},
            { text: 'Maine', value: 'ME'},
            { text: 'Maryland', value: 'MD'},
            { text: 'Massachusetts', value: 'MA'},
            { text: 'Michigan', value: 'MI'},
            { text: 'Minnesota', value: 'MN'},
            { text: 'Mississippi', value: 'MS'},
            { text: 'Missourri', value: 'MO'},
            { text: 'Montana', value: 'MT'},
            { text: 'Nebraska', value: 'NE'},
            { text: 'Nevada', value: 'NV'},
            { text: 'New Hampshire', value: 'NH'},
            { text: 'New Jersey', value: 'NJ'},
            { text: 'New Mexico', value: 'NM'},
            { text: 'New York', value: 'NY'},
            { text: 'North Carolina', value: 'NC'},
            { text: 'North Dakota', value: 'ND'},
            { text: 'Ohio', value: 'OH'},
            { text: 'Oklahoma', value: 'OK'},
            { text: 'Oregon', value: 'OR'},
            { text: 'Pennsylvania', value: 'PA'},
            { text: 'Rhode Island', value: 'RI'},
            { text: 'South Carolina', value: 'SC'},
            { text: 'South Dakota', value: 'SD'},
            { text: 'Tennessee', value: 'TN'},
            { text: 'Texas', value: 'TX'},
            { text: 'Utah', value: 'UT'},
            { text: 'Vermont', value: 'VT'},
            { text: 'Virginia', value: 'VA'},
            { text: 'Washington', value: 'WA'},
            { text: 'West Virginia', value: 'WV'},
            { text: 'Wisconsin', value: 'WI'},
            { text: 'Wyoming', value: 'WY'},
         ]
       }
    },

    methods: {
        onChange(event) {
            this.selectedState = event.target.value
            console.log('***************************The selected value is' + event.target.value)
        },
        submit() {
            if(this.$refs.form.validate()){
                this.loading = true;
                const customer = {
                    firstName: this.firstName,
                    lastName: this.lastName, 
                    address: this.address,
                    aptNumber: this.aptNumber,
                    cityName: this.cityName,
                    stateName: this.stateName,
                    zipCode: this.zipCode, 
                    mobileNumber: this.mobileNumber,
                    emailAddress: this.emailAddress,
                    password: this.password
            }
            db.collection('Customers').add(customer).then(() => {
                console.log("data loaded to Firebase");
                this.loading = false;
                this.$refs.form.reset()
            })
          }
        }
    }
}

</script>