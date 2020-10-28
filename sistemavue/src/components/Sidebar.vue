<template>
  <v-navigation-drawer class="navigation-drawer" permanent expand-on-hover>
    <v-list nav dense>
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-2"
      >
        <v-list-item
          v-for="item in sidebarItems"
          :key="item.title"
          link
          @click="goRoute(item.route)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Sidebar',
  data: () => ({
    group: null,
    sidebarItems: [
      { title: 'Home', icon: 'mdi-home', route: 'Home' },
      { title: 'Account', icon: 'mdi-account', route: 'Account' },
    ],
  }),
  methods: {
    goRoute(route) {
      this.$router.push({ name: `${route}` })
      this.setCurrentSectionName(route)
    },
    setCurrentSectionName(sectionName) {
      this.$emit('setSectionName', sectionName)
    },
  },
}
</script>

<style scoped>
.navigation-drawer {
  position: fixed;
}
</style>
