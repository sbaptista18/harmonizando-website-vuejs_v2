<template>
  <div>
    <h1>Contactos</h1>
    <contactos></contactos>
    <formulario></formulario>
  </div>
</template>

<script>
import Contactos from './contactos/Contactos'
import Formulario from './contactos/Formulario'

export default {
  components: {
    contactos: Contactos,
    formulario: Formulario
  }
}
</script>

<style lang="scss" scoped>
@function pxToEm($value) {
  $point: ($value * 3) / 4;
  $yem: $point / 12;

  @return $yem * 1rem;
}

h1 {
  text-align: center;
  margin-top: pxToEm(50);
}
</style>
