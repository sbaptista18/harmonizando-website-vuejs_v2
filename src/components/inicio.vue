<template>
  <div>
    <about></about>
    <servicos></servicos>
    <destaques></destaques>
    <contactos></contactos>
    <parceiros></parceiros>
    <associacoes></associacoes>
  </div>
</template>

<script>
import About from './home/About'
import Servicos from './home/Servicos'
import Destaques from './home/Destaques'
import Contactos from './home/Contactos'
import Parceiros from './home/Parceiros'
import Associacoes from './home/Associacoes'

export default {
  components: {
    about: About,
    servicos: Servicos,
    destaques: Destaques,
    contactos: Contactos,
    parceiros: Parceiros,
    associacoes: Associacoes
  }
}
</script>

<style lang="scss" scoped>
</style>
