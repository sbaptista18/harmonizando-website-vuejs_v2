/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var routes = []

function lazyLoad(view) {
  return () => import(`@/components/${view}.vue`)
}

routes = [
  {
    path: '*'
  },
  {
    path: '/',
    name: 'inicio',
    component: lazyLoad('inicio')
  },
  {
    path: '/artigos',
    name: 'artigos',
    component: lazyLoad('artigos')
  },
  {
    path: '/perguntas-frequentes',
    name: 'perguntas-frequentes',
    component: lazyLoad('perguntas-frequentes')
  },
  {
    path: '/termos-condicoes',
    name: 'termos-condicoes',
    component: lazyLoad('termos-condicoes')
  },
  {
    path: '/politica-privacidade',
    name: 'politica-privacidade',
    component: lazyLoad('politica-privacidade')
  },
  {
    path: '/marcar-consulta',
    name: 'marcar-consulta',
    component: lazyLoad('marcar-consulta')
  },
  {
    path: '/agenda/actividades-agendadas',
    name: 'actividades-agendadas',
    component: lazyLoad('agenda/actividades-agendadas')
  },
  {
    path: '/agenda/actividades-regulares',
    name: 'actividades-regulares',
    component: lazyLoad('agenda/actividades-regulares')
  },
  {
    path: '/servicos/clinica-holistica',
    name: 'clinica-holistica',
    component: lazyLoad('servicos/clinica-holistica')
  },
  {
    path: '/servicos/clinica-holistica/terapias/:name',
    name: 'terapias',
    component: lazyLoad('servicos/clinica-holistica/terapias')
  },
  {
    path: '/servicos/clinica-holistica/terapias/:name/:topic',
    name: 'terapia',
    component: lazyLoad('servicos/clinica-holistica/terapia')
  },
  {
    path: '/servicos/academia',
    name: 'academia',
    component: lazyLoad('servicos/academia')
  },
  {
    path: '/servicos/academia/cursos/:name',
    name: 'cursos',
    component: lazyLoad('servicos/academia/cursos')
  },
  {
    path: '/servicos/academia/cursos/:name/:topic',
    name: 'curso',
    component: lazyLoad('servicos/academia/curso')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// function stickyFooter() {
//   var totalHeight = $("body").height();
//   if ($(window).height() > totalHeight) {
//     var marginBanner = parseInt($('.banner').css("margin-top"))
//     var routerSection = $("#app > div:not(.menu-container):not(.banner):not(#footer)");
//     var routerMarginTop = parseInt($("#app > div:not(.menu-container):not(.banner):not(#footer)").css('margin-top'));
//     var routerMarginBottom = parseInt($("#app > div:not(.menu-container):not(.banner):not(#footer)").css('margin-bottom'));

//     console.log($("#app > div:not(.menu-container):not(.banner):not(#footer)"))

//     var minSectionHeight = ($(window).height() - totalHeight) - marginBanner;
//     routerSection.css("minHeight", minSectionHeight + "px");
//   }
// }

router.afterEach((to, from, next) => {
  $(".menu-mobile .menu-items").removeClass("open");
  $("body, html").removeClass("open");
  $('body').animate({ scrollTop: $('body').offset().top }, 0);
  // stickyFooter();
})

export default router;