<template>
  <div>
    <about></about>
    <team></team>
    <espaco></espaco>
  </div>
</template>

<script>
import About from './about/About'
import Team from './about/Team'
import Espaco from './about/Espaco'

export default {
  components: {
    about: About,
    team: Team,
    espaco: Espaco
  }
}
</script>

<style lang="scss" scoped>
</style>
