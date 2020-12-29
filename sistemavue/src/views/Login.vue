<template>
  <v-container fluid fill-height>
    <v-row class="justify-center" align="center">
      <v-col sm="5">
        <v-card>
          <v-card-title>
            Iniciar sesión
          </v-card-title>
          <v-form ref="form">
            <v-card-text>
              <v-text-field v-model="user" required :rules="[rules.required]">
              </v-text-field>
              <v-text-field
                v-model="password"
                required
                :rules="[rules.required]"
              >
              </v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn color="secondary" block @click="login"
                >Iniciar sesión</v-btn
              >
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    user: '',
    password: '',
    rules: {
      required: value => !!value || 'Campo requerido',
    },
  }),
  methods: {
    async login() {
      if (this.$refs.form.validate()) {
        try {
          let res = await axios.post('user/login', {
            email: this.user,
            password: this.password,
          })
          this.$store.dispatch('guardarToken', res.data.tokenReturn)
          this.$router.push({ name: 'Home' })
        } catch (error) {
          console.log(error.message)
        }
      }
    },
  },
}
</script>

<style></style>
