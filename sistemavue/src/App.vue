<template>
  <v-app>
    <v-content height="100%">
      <div>
        <Navbar :title="sectionName" />
        <Sidebar @setSectionName="setSectionName" />
        <router-view class="pl-14"></router-view>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Sidebar,
    Navbar,
  },
  data: () => ({
    sectionName: 'Home',
  }),
  methods: {
    setSectionName(newValue) {
      this.sectionName = newValue
    },
  },
}
</script>

<style scoped></style>
