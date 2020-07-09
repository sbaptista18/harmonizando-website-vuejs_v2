<template>
  <div>
    <oferta></oferta>
    <servicos></servicos>
  </div>
</template>

<script>
import Oferta from './servicos/Oferta'
import Servicos from './servicos/Servicos'

export default {
  components: {
    oferta: Oferta,
    servicos: Servicos
  }
}
</script>

<style lang="scss" scoped>
</style>
