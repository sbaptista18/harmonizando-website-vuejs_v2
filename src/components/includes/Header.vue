<template>
  <div class="menu-container">
    <div class="menu">
      <div class="brand">
        <router-link to="/">
          <img :src="logo" alt="Harmonizando Logo Header" />
        </router-link>
      </div>
      <div class="menu-items">
        <div class="menu-item">
          <router-link to="/">Início</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/sobre-nos">Sobre Nós</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/servicos">Serviços</router-link>
          <div class="menu-items-submenu">
            <div class="menu-item-submenu">
              <router-link to="/academia">Academia</router-link>
            </div>
            <div class="menu-item-submenu">
              <router-link to="/">Clínica Holística</router-link>
            </div>
          </div>
        </div>
        <div class="menu-item">
          <router-link to="/agenda">Agenda</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/noticias">Notícias</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/artigos">Artigos</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/produtos">Produtos</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/contactos">Contactos</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/marcar-consulta">
            <div class="cta-wrapper">
              <div class="cta">
                <div class="txt">Marque a sua consulta</div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="menu-mobile">
      <div class="menu-btn" @click="openMenuMobile()">
        <div>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
      <div class="brand">
        <router-link to="/">
          <img :src="logo" alt="Harmonizando Logo Header" />
        </router-link>
      </div>
      <div class="menu-items">
        <div class="menu-item">
          <router-link to="/">Início</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/sobre-nos">Sobre Nós</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/servicos">Serviços</router-link>
          <div class="menu-items-submenu">
            <div class="menu-item-submenu">
              <router-link to="/academia">Academia</router-link>
            </div>
            <div class="menu-item-submenu">
              <router-link to="/">Clínica Holística</router-link>
            </div>
          </div>
        </div>
        <div class="menu-item">
          <router-link to="/agenda">Agenda</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/noticias">Notícias</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/artigos">Artigos</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/produtos">Produtos</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/contactos">Contactos</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/marcar-consulta">
            <div class="cta-wrapper">
              <div class="cta">
                <div class="txt">Marque a sua consulta</div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Logo from "../../assets/logo.png";
import axios from "axios";

export default {
  data() {
    return {
      logo: Logo
    };
  },
  methods: {
    getDynamicRoutes(url) {
      axios.get(url).then(resp => {
        const data = resp.data;
        const items = [];
        for (let key in data) {
          const item = data[key];
          items.push(item);
        }

        this.processData(items);
      });
      //.catch(error => console.log(error));
    },
    processData(data) {
      data.forEach(this.createAndAppendRoute);
    },
    createAndAppendRoute(route) {
      let newRoute = {
        path: `/${route.menu_temas_ref}`,
        name: `${route.menu_temas_title}`,
        component: this.lazyLoad(`${route.menu_temas_ref}`)
      };

      this.$router.addRoutes([newRoute]);
    },
    lazyLoad(view) {
      return () => import(`@/components/${view}.vue`);
    },
    openMenuMobile() {
      $(".menu-mobile .menu-items").toggleClass("open", 500);
      $("body, html").toggleClass("open", 500);
      $(".menu-mobile .menu-items").css({
        height: window.innerHeight - 46,
        top: "pxToEm(90)"
      });
    }
  },
  created() {
    this.getDynamicRoutes("https://www.harmonizando.com/data_api/getUrls.php");
  },
  watch: {
    $route(to, from) {
      $(".menu-mobile .menu-items").removeClass("open");
      $("body, html").removeClass("open");
    }
  }
};
</script>

<style lang="scss" scoped>
@function pxToEm($value) {
  $point: ($value * 3) / 4;
  $yem: $point / 12;

  @return $yem * 1rem;
}

.menu-container {
  background-color: #fff;
  position: fixed;
  width: 100%;
  z-index: 9999;
  padding: 0;
  box-shadow: pxToEm(1) pxToEm(0) pxToEm(9) #000;
  top: 0;

  .menu {
    height: pxToEm(90);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 pxToEm(130);
    background-color: #fff;

    @media only screen and (min-width: 1200px) and (max-width: 1919px) {
      margin: 0 pxToEm(80);
    }

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      margin: 0 pxToEm(60);
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      margin: 0 pxToEm(40);
    }

    @media only screen and (max-width: 767px) {
      display: none;
    }

    .brand {
      height: 100%;
      display: flex;

      a {
        display: flex;
        align-items: center;

        img {
          @media only screen and (min-width: 992px) and (max-width: 1919px) {
            width: pxToEm(230);
          }

          @media only screen and (min-width: 768px) and (max-width: 991px) {
            width: pxToEm(230);
          }

          @media only screen and (min-width: 600px) and (max-width: 767px) {
            width: pxToEm(230);
          }
        }
      }
    }

    .menu-items {
      display: flex;
      flex-direction: row;
      max-width: pxToEm(1200);
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: space-between;

      @media only screen and (min-width: 992px) and (max-width: 1919px) {
        max-width: pxToEm(820);
      }

      @media only screen and (min-width: 768px) and (max-width: 991px) {
        max-width: pxToEm(820);
      }

      @media only screen and (min-width: 600px) and (max-width: 767px) {
        max-width: pxToEm(820);
      }

      .menu-item {
        height: 100%;
        margin: 0 pxToEm(20);
        display: flex;
        align-items: center;

        @media only screen and (min-width: 992px) and (max-width: 1919px) {
          margin: 0 pxToEm(5);
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          margin: 0 pxToEm(5);
        }

        @media only screen and (min-width: 600px) and (max-width: 767px) {
          margin: 0 pxToEm(5);
        }

        .menu-items-submenu {
          position: absolute;
          top: pxToEm(90);
          width: pxToEm(260);
          height: auto;
          background-color: #fff;
          margin-left: pxToEm(-20);
          display: none;

          .menu-item-submenu {
            height: pxToEm(70);
            display: flex;
            align-items: center;

            a {
              margin-left: pxToEm(20);
            }
          }
        }

        a {
          font-size: pxToEm(20);

          @media only screen and (min-width: 992px) and (max-width: 1919px) {
            font-size: pxToEm(16);
          }

          @media only screen and (min-width: 768px) and (max-width: 991px) {
            font-size: pxToEm(16);
          }

          @media only screen and (min-width: 600px) and (max-width: 767px) {
            font-size: pxToEm(16);
          }
        }

        .cta-wrapper {
          .cta {
            width: pxToEm(260);
            height: pxToEm(50);
            background-color: #91c569;
            border-radius: pxToEm(10);
            display: flex;
            align-items: center;
            justify-content: center;

            @media only screen and (min-width: 992px) and (max-width: 1919px) {
              max-width: pxToEm(260);
              width: 100%;
              flex-wrap: wrap;
              padding: 0 pxToEm(5);
            }

            @media only screen and (min-width: 768px) and (max-width: 991px) {
              max-width: pxToEm(260);
              width: 100%;
              flex-wrap: wrap;
              padding: 0 pxToEm(5);
            }

            @media only screen and (min-width: 600px) and (max-width: 767px) {
              max-width: pxToEm(260);
              width: 100%;
              flex-wrap: wrap;
              padding: 0 pxToEm(5);
            }

            .txt {
              color: #fff;
              font-weight: bold;
              font-size: pxToEm(15);
              text-transform: uppercase;

              @media only screen and (min-width: 992px) and (max-width: 1919px) {
                font-size: pxToEm(14);
              }

              @media only screen and (min-width: 768px) and (max-width: 991px) {
                font-size: pxToEm(14);
              }

              @media only screen and (min-width: 600px) and (max-width: 767px) {
                font-size: pxToEm(14);
              }
            }
          }
        }
      }
    }
  }

  .menu-mobile {
    height: pxToEm(90);
    display: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 pxToEm(20);
    background-color: #fff;
    // box-shadow: pxToEm(0) pxToEm(2) pxToEm(3) #000;

    @media only screen and (max-width: 767px) {
      display: flex;
    }

    .brand {
      height: 100%;
      display: flex;

      a {
        display: flex;
        align-items: center;

        img {
          width: pxToEm(230);
        }
      }
    }

    .menu-btn {
      width: 20px;
      height: 20px;
      border-radius: 10px;
      // border: 1px solid #000;
      padding: 10px 0;

      div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .line {
          width: 100%;
          height: 1px;
          background-color: #000;
        }
      }
    }

    .menu-items {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      position: absolute;
      top: pxToEm(90);
      left: -100%;
      background-color: #fff;
      width: 100%;
      height: auto;
      flex-direction: column;
      align-items: flex-start;
      // box-shadow: pxToEm(0) pxToEm(2) pxToEm(3) #000;
      z-index: -1;

      &.open {
        left: 0%;

        // @media only screen and (max-width: 600px) {
        //   top: 40px;
        // }
      }

      .menu-item {
        height: 100%;
        display: flex;
        align-items: center;
        width: 100%;
        height: pxToEm(100);
        border-bottom: 1px solid #d9d9d9;
        justify-content: center;

        &:last-child {
          border-bottom: 0;
        }

        a {
          font-size: pxToEm(26);
          margin: 10px 0;
          margin-left: pxToEm(20);
          width: 100%;
          text-align: center;
          justify-content: center;
          display: flex;
        }

        .cta-wrapper {
          .cta {
            width: pxToEm(320);
            height: pxToEm(70);
            background-color: #91c569;
            border-radius: pxToEm(10);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 pxToEm(5);
            flex-wrap: wrap;

            .txt {
              color: #fff;
              font-weight: bold;
              font-size: pxToEm(20);
              text-transform: uppercase;
            }
          }
        }

        .menu-items-submenu {
          position: absolute;
          top: pxToEm(90);
          width: pxToEm(260);
          height: auto;
          background-color: #fff;
          margin-left: pxToEm(-20);
          display: none;

          .menu-item-submenu {
            height: pxToEm(70);
            display: flex;
            align-items: center;

            a {
              margin-left: pxToEm(20);
            }
          }
        }
      }
    }
  }
}
</style>
