<template>
  <div class="equipa">
    <div class="content">
      <div class="title">A Equipa</div>
      <div class="members">
        <div class="member" v-for="member in members" :key="member.id">
          <div class="picture" :style="{ backgroundImage: 'url(' + member.img_src + ')' }"></div>
          <div class="name">{{ member.name }}</div>
          <div class="function">
            <b>{{ member.cargo }}</b>
            <br />
            {{ member.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";

export default {
  data() {
    return {
      members: [{ name: "name", cargo: "cargo", text: "texto", img_src: "src" }]
    };
  },
  mounted() {
    var map = Array.prototype.map;
    var vm = this;
    axios
      .get("https://www.harmonizando.com/data_api/getEquipa.php")
      .then(resp => {
        const data = resp.data;
        var its = [];
        map.call(data, function(d) {
          var text = data[0].about_equipa_text;
          // remove HTML p tag
          var div = document.createElement("div");
          div.innerHTML = text;
          var txt = div.textContent || div.innerText || "";
          its.push({
            name: d.about_equipa_name,
            cargo: d.about_equipa_cargo,
            text: txt,
            img_src:
              "https://beta.harmonizando.com/docs/images/main/" +
              d.__images_file
          });
        });

        vm.$data.members = its;
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

.equipa {
  height: pxToEm(600);
  display: flex;
  flex-direction: row;
  padding: 0 pxToEm(130);
  background-color: #fafafa;

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
    position: relative;
    max-width: pxToEm(1400);
    width: 100%;
    margin: pxToEm(60) auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: pxToEm(40);
      color: #707070;
    }

    .members {
      height: pxToEm(370);
      max-width: pxToEm(870);
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .member {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .picture {
          width: pxToEm(260);
          height: pxToEm(295);
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }

        .name {
          font-size: pxToEm(22);
          margin-top: pxToEm(15);
        }

        .function {
          font-size: pxToEm(19);
          text-align: center;
        }
      }
    }
  }
}
</style>
