<template>
  <div class="oferta">
    <div class="content">
      <div class="title">{{ title }}</div>
      <div v-html="text" class="copy"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";

export default {
  data() {
    return {
      title: "title",
      text: "text"
    };
  },
  mounted() {
    axios
      .get("https://www.harmonizando.com/data_api/getServicosAbout.php")
      .then(resp => {
        const data = resp.data;
        this.title = data[0].servicos_about_title;
        this.text = data[0].servicos_about_text;
      });
  }
};
</script>

<style lang="scss" scoped>
@function pxToEm($value) {
  $point: ($value * 3) / 4;
  $yem: $point / 12;

  @return $yem * 1rem;
}

.oferta {
  padding: 0 pxToEm(130);
  height: pxToEm(350);
  background-color: #f6f6f6;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1200px) and (max-width: 1919px) {
    padding: 0 pxToEm(80);
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    padding: 0 pxToEm(60);
    height: auto;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding: 0 pxToEm(40);
    height: auto;
  }

  @media only screen and (min-width: 600px) and (max-width: 767px) {
    padding: 0 pxToEm(20);
    height: auto;
  }

  @media only screen and (max-width: 599px) {
    padding: 0 pxToEm(20);
    height: auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 40%;

    @media only screen and (max-width: 1199px) {
      margin: pxToEm(40) 0;
    }

    .title {
      font-size: pxToEm(34);
      color: #707070;
    }

    .copy {
      font-size: pxToEm(25);
      color: #707070;
      text-align: center;
      width: 100%;
      max-width: pxToEm(1100);
    }
  }
}
</style>
