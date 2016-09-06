'use strict';

angular
  .module('urbanApp')
  .run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
      $rootScope.$on('$stateChangeSuccess', function () {
        window.scrollTo(0, 0);
      });
      FastClick.attach(document.body);
        },
    ])
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      // For unmatched routes
      $urlRouterProvider.otherwise('/');

      // Application routes
      $stateProvider
        .state('app', {
          abstract: true,
          templateUrl: 'views/common/layout.html',
        })


      .state('app.dashboard', {
        url: '/',
        templateUrl: 'views/dashboard.html',
        resolve: {
          deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              {
                insertBefore: '#load_styles_before',
                files: [
                                'styles/climacons-font.css',
                                'vendor/rickshaw/rickshaw.min.css'
                            ]
                        },
              {
                serie: true,
                files: [
                                'vendor/d3/d3.min.js',
                                'vendor/rickshaw/rickshaw.min.js',
                                'vendor/flot/jquery.flot.js',
                                'vendor/flot/jquery.flot.resize.js',
                                'vendor/flot/jquery.flot.pie.js',
                                'vendor/flot/jquery.flot.categories.js',
                            ]
                        },
              {
                  name: 'angular-flot',
                  files: [
                                'vendor/angular-flot/angular-flot.js'
                            ]
                        }]).then(function () {
              return $ocLazyLoad.load('scripts/controllers/dashboard.js');
            });
                    }]
        },
        data: {
          title: 'Dashboard',
        }
      })


      // UI Routes
      .state('app.ui', {
          template: '<div ui-view></div>',
          abstract: true,
          url: '/ui',
        })
        .state('app.ui.buttons', {
          url: '/buttons',
          templateUrl: 'views/ui-buttons.html',
          data: {
            title: 'Buttons',
          }
        })
        .state('app.ui.directives', {
          url: '/directives',
          templateUrl: 'views/ui-general.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  insertBefore: '#load_styles_before',
                  files: [
                                'vendor/checkbo/src/0.1.4/css/checkBo.min.css',
                                'vendor/chosen_v1.4.0/chosen.min.css'
                            ]
                        },
                {
                  files: [
                                'vendor/checkbo/src/0.1.4/js/checkBo.min.js',
                                'vendor/chosen_v1.4.0/chosen.jquery.min.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/bootstrap.ui.js');
              });
                    }]
          },
          data: {
            title: 'Bootstrap Directives',
          }
        })
        .state('app.ui.tabs_accordion', {
          url: '/tabs_accordions',
          templateUrl: 'views/ui-tabs-accordion.html',
          data: {
            title: 'Nav Tabs',
          }
        })
        .state('app.ui.portlets', {
          url: '/portlets',
          templateUrl: 'views/ui-portlets.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  serie: true,
                  files: [
                                'vendor/perfect-scrollbar/js/perfect-scrollbar.jquery.js',
                                'vendor/jquery.ui/ui/core.js',
                                'vendor/jquery.ui/ui/widget.js',
                                'vendor/jquery.ui/ui/mouse.js',
                                'vendor/jquery.ui/ui/sortable.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/draggable.js');
              });
                    }]
          },
          data: {
            title: 'Portlets',
          }
        })
        .state('app.ui.fontawesome', {
          url: '/fontawesome',
          templateUrl: 'views/ui-fontawesome.html',
          data: {
            title: 'Fontawesome Icons',
          }
        })
        .state('app.ui.feather', {
          url: '/feather',
          templateUrl: 'views/ui-feather.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('styles/feather.css');
                    }]
          },
          data: {
            title: 'Feather Icons',
          }
        })
        .state('app.ui.climacon', {
          url: '/climacon',
          templateUrl: 'views/ui-climacon.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('styles/climacons-font.css');
                    }]
          },
          data: {
            title: 'Climacon Icons',
          }
        })
        .state('app.ui.progressbars', {
          url: '/progressbars',
          templateUrl: 'views/ui-progressbars.html',
          data: {
            title: 'Progress Bars',
          }
        })
        .state('app.ui.sliders', {
          url: '/sliders',
          templateUrl: 'views/ui-sliders.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  serie: true,
                  files: [
                                'vendor/jquery.ui/ui/core.js',
                                'vendor/jquery.ui/ui/widget.js',
                                'vendor/jquery.ui/ui/mouse.js',
                                'vendor/jquery.ui/ui/slider.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/slider.js');
              });
                    }]
          },
          data: {
            title: 'Sliders',
          }
        })
        .state('app.ui.pagination', {
          url: '/pagination',
          templateUrl: 'views/ui-pagination.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('scripts/controllers/bootstrap.ui.js');
                    }]
          },
          data: {
            title: 'Pagination',
          }
        })
        .state('app.ui.notifications', {
          url: '/notifications',
          templateUrl: 'views/ui-notifications.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  insertBefore: '#load_styles_before',
                  files: ['vendor/chosen_v1.4.0/chosen.min.css']
                        },
                {
                  serie: true,
                  files: [
                                'vendor/chosen_v1.4.0/chosen.jquery.min.js',
                                'vendor/noty/js/noty/packaged/jquery.noty.packaged.min.js',
                                'scripts/extentions/noty-defaults.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/notifications.js');
              });
                    }]
          },
          data: {
            title: 'Notifications',
          }
        })
        .state('app.ui.alert', {
          url: '/alert',
          templateUrl: 'views/ui-alert.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  insertBefore: '#load_styles_before',
                  files: ['vendor/sweetalert/dist/sweetalert.css']
                        },
                {
                  name: 'oitozero.ngSweetAlert',
                  files: [
                                'vendor/sweetalert/dist/sweetalert.min.js',
                                'vendor/angular-sweetalert/SweetAlert.min.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/alert.js');
              });
                    }]
          },
          data: {
            title: 'Alerts',
          }
        })


      // Forms routes
      .state('app.forms', {
          template: '<div ui-view></div>',
          abstract: true,
          url: '/forms',
        })
        .state('app.forms.native_forms', {
          url: '/native_forms',
          templateUrl: 'views/form-basic.html',
          data: {
            title: 'Native Form Elements',
          }
        })
        .state('app.forms.advanced_forms', {
          url: '/advanced_forms',
          templateUrl: 'views/form-advanced.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  insertBefore: '#load_styles_before',
                  files: [
                                'vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css',
                                'vendor/chosen_v1.4.0/chosen.min.css',
                                'vendor/jquery.tagsinput/src/jquery.tagsinput.css',
                                'vendor/checkbo/src/0.1.4/css/checkBo.min.css',
                                'vendor/intl-tel-input/build/css/intlTelInput.css',
                                'vendor/bootstrap-daterangepicker/daterangepicker-bs3.css',
                                'vendor/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css',
                                'vendor/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                                'vendor/clockpicker/dist/bootstrap-clockpicker.min.css',
                                'vendor/mjolnic-bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css'
                            ]
                        },
                {
                  serie: true,
                  files: [
                                'vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
                                'vendor/chosen_v1.4.0/chosen.jquery.min.js',
                                'vendor/jquery.tagsinput/src/jquery.tagsinput.js',
                                'vendor/checkbo/src/0.1.4/js/checkBo.min.js',
                                'vendor/intl-tel-input//build/js/intlTelInput.min.js',
                                'vendor/moment/min/moment.min.js',
                                'vendor/bootstrap-daterangepicker/daterangepicker.js',
                                'vendor/bootstrap-datepicker/dist/js/bootstrap-datepicker.js',
                                'vendor/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                                'vendor/clockpicker/dist/jquery-clockpicker.min.js',
                                'vendor/mjolnic-bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/form.js');
              });
                    }]
          },
          data: {
            title: 'Advanced Form Plugins',
          }
        })
        .state('app.forms.validation', {
          url: '/validation',
          templateUrl: 'views/form-validation.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('vendor/jquery-validation/dist/jquery.validate.min.js').then(function () {
                return $ocLazyLoad.load('scripts/controllers/validation.js');
              });
                    }]
          },
          data: {
            title: 'Form Validation',
          }
        })
        .state('app.forms.wizard', {
          url: '/wizard',
          templateUrl: 'views/form-wizard.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  insertBefore: '#load_styles_before',
                  files: [
                                'vendor/checkbo/src/0.1.4/css/checkBo.min.css',
                                'vendor/chosen_v1.4.0/chosen.min.css'
                            ]
                        },
                {
                  files: [
                                'vendor/checkbo/src/0.1.4/js/checkBo.min.js',
                                'vendor/chosen_v1.4.0/chosen.jquery.min.js',
                                'vendor/card/lib/js/jquery.card.js',
                                'vendor/bootstrap/js/tab.js',
                                'vendor/jquery-validation/dist/jquery.validate.min.js',
                                'vendor/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/wizard.js');
              });
                    }]
          },
          data: {
            title: 'Form Wizards',
          }
        })
        .state('app.forms.editors', {
          url: '/editors',
          templateUrl: 'views/form-editors.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  insertBefore: '#load_styles_before',
                  files: [
                                'vendor/summernote/dist/summernote.css',
                                'vendor/bootstrap3-wysihtml5-bower/dist/bootstrap3-wysihtml5.min.css'
                            ]
                        },
                {
                  files: [
                                'vendor/bootstrap/js/tooltip.js',
                                'vendor/bootstrap/js/dropdown.js',
                                'vendor/bootstrap/js/modal.js',
                                'vendor/bootstrap3-wysihtml5-bower/dist/bootstrap3-wysihtml5.all.js',
                                'vendor/summernote/dist/summernote.min.js'
                            ]
                        },
                {
                  name: 'summernote',
                  files: [
                                'vendor/angular-summernote/dist/angular-summernote.min.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/editor.js');
              });
                    }]
          },
          data: {
            title: 'Form Editors',
          }
        })
        .state('app.forms.masks', {
          url: '/masks',
          templateUrl: 'views/form-masks.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('vendor/jquery.maskedinput/dist/jquery.maskedinput.min.js').then(function () {
                return $ocLazyLoad.load('scripts/controllers/mask.js');
              });
                    }]
          },
          data: {
            title: 'Input Masks',
          }
        })
        .state('app.forms.upload', {
          url: '/upload',
          templateUrl: 'views/form-upload.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  name: 'angularFileUpload',
                  files: [
                                'vendor/angular-file-upload/angular-file-upload.min.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/upload.js');
              });
                    }]
          },
          data: {
            title: 'Form Upload',
          }
        })


      // Tables routes
      .state('app.tables', {
          template: '<div ui-view></div>',
          abstract: true,
          url: '/tables',
        })
        .state('app.tables.table_basic', {
          url: '/table_basic',
          templateUrl: 'views/table-basic.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  insertBefore: '#load_styles_before',
                  files: [
                                'vendor/sortable/css/sortable-theme-bootstrap.css'
                            ]
                        },
                {
                  files: [
                                'vendor/sortable/js/sortable.min.js'
                            ]
                        }]).then(function () {
                Sortable.init();
              });
                    }]
          },
          data: {
            title: 'Basic Table',
          }
        })
        .state('app.tables.table_responsive', {
          url: '/table_responsive',
          templateUrl: 'views/table-responsive.html',
          data: {
            title: 'Responsive Table',
          }
        })
        .state('app.tables.datatable', {
          url: '/datatable',
          templateUrl: 'views/table-datatable.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  insertBefore: '#load_styles_before',
                  files: [
                                'vendor/chosen_v1.4.0/chosen.min.css',
                                'vendor/datatables/media/css/jquery.dataTables.css'
                            ]
                        },
                {
                  serie: true,
                  files: [
                                'vendor/chosen_v1.4.0/chosen.jquery.min.js',
                                'vendor/datatables/media/js/jquery.dataTables.js',
                                'scripts/extentions/bootstrap-datatables.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/table.js');
              });
                    }]
          },
          data: {
            title: 'Datatable',
          }
        })
        .state('app.tables.table_editable', {
          url: '/table_editable',
          templateUrl: 'views/table-editable.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  insertBefore: '#load_styles_before',
                  files: [
                                'vendor/angular-xeditable/dist/css/xeditable.css'
                            ]
                        },
                {
                  name: 'xeditable',
                  files: [
                                'vendor/angular-xeditable/dist/js/xeditable.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/editable.js');
              });
                    }]
          },
          data: {
            title: 'Editable Table',
          }
        })


      // Chart routes
      .state('app.charts', {
          template: '<div ui-view></div>',
          abstract: true,
          url: '/charts',
        })
        .state('app.charts.flot', {
          url: '/flot',
          templateUrl: 'views/charts-flot.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  serie: true,
                  files: [
                                'vendor/flot/jquery.flot.js',
                                'vendor/flot/jquery.flot.resize.js',
                                'vendor/flot/jquery.flot.categories.js',
                                'vendor/flot/jquery.flot.stack.js',
                                'vendor/flot/jquery.flot.time.js',
                                'vendor/flot/jquery.flot.pie.js',
                                'vendor/flot-spline/js/jquery.flot.spline.js',
                                'vendor/flot.orderbars/js/jquery.flot.orderBars.js'
                            ]
                        },
                {
                  name: 'angular-flot',
                  files: [
                                'vendor/angular-flot/angular-flot.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/flot.js');
              });
                    }]
          },
          data: {
            title: 'Flot Charts',
          }
        })
        .state('app.charts.easypie', {
          url: '/easypie',
          templateUrl: 'views/charts-easypie.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  name: 'easypiechart',
                  files: [
                                'vendor/jquery.easy-pie-chart/dist/angular.easypiechart.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/easychart.js');
              });
                    }]
          },
          data: {
            title: 'Easypie Charts',
          }
        })
        .state('app.charts.chartjs', {
          url: '/chartjs',
          templateUrl: 'views/charts-chartjs.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                 {
                  files: [
                                'vendor/chartjs/Chart.js',
                            ]
                        },
                {
                  name: 'angles',
                  serie: true,
                  files: [
                                'vendor/angles/angles.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/chartjs.js');
              });
                    }]
          },
          data: {
            title: 'Chartjs',
          }
        })
        .state('app.charts.rickshaw', {
          url: '/rickshaw',
          templateUrl: 'views/charts-rickshaw.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  insertBefore: '#load_styles_before',
                  files: [
                                'vendor/rickshaw/rickshaw.min.css'
                            ]
                        },
                {
                  serie: true,
                  files: [
                                'vendor/d3/d3.min.js',
                                'vendor/rickshaw/rickshaw.min.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/rickshaw.js');
              });
                    }]
          },
          data: {
            title: 'Rickshaw Charts',
          }
        })
        .state('app.charts.nvd3', {
          url: '/nvd3',
          templateUrl: 'views/charts-nvd3.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  insertBefore: '#load_styles_before',
                  files: [
                                'vendor/nvd3/nv.d3.min.css'
                            ]
                        },
                {
                  name: 'nvd3',
                  serie: true,
                  files: [
                                'vendor/d3/d3.min.js',
                                'vendor/nvd3/nv.d3.min.js',
                                'vendor/angular-nvd3/dist/angular-nvd3.min.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/nvd3.js');
              });
                    }]
          },
          data: {
            title: 'Nvd3 Charts',
          }
        })
        .state('app.charts.c3', {
          url: '/c3',
          templateUrl: 'views/charts-c3.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  insertBefore: '#load_styles_before',
                  files: [
                                'vendor/c3/c3.min.css'
                            ]
                        },
                {
                  serie: true,
                  files: [
                                'vendor/d3/d3.min.js',
                                'vendor/c3/c3.min.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/c3.js');
              });
                    }]
          },
          data: {
            title: 'C3',
          }
        })


      // Maps routes
      .state('app.maps', {
          template: '<div ui-view></div>',
          abstract: true,
          url: '/maps',
        })
        .state('app.maps.google', {
          url: '/google',
          templateUrl: 'views/map-google.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  name: 'ui.map',
                  files: [
                                'vendor/angular-ui-map/ui-map.min.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/google.js');
              });
                    }]
          },
          data: {
            title: 'Google Maps',
            contentClasses: 'no-padding'
          }
        })
        .state('app.maps.vector', {
          url: '/vector',
          templateUrl: 'views/map-vector.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  insertBefore: '#load_styles_before',
                  files: [
                                'vendor/bower-jvectormap/jquery-jvectormap-1.2.2.css'
                            ]
                        },
                {
                  serie: true,
                  files: [
                                'vendor/bower-jvectormap/jquery-jvectormap-1.2.2.min.js',
                                'data/maps/jquery-jvectormap-world-mill-en.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/vector.js');
              });
                    }]
          },
          data: {
            title: 'Vector Maps',
            contentClasses: 'no-padding'
          }
        })


      // Apps routes
      .state('app.apps', {
          template: '<div ui-view></div>',
          abstract: true,
          url: '/apps',
        })
        .state('app.apps.calendar', {
          url: '/calendar',
          templateUrl: 'views/app-calendar.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  insertBefore: '#load_styles_before',
                  files: [
                                'vendor/fullcalendar/dist/fullcalendar.min.css'
                            ]
                        },
                {
                  serie: true,
                  files: [
                                'vendor/jquery.ui/ui/core.js',
                                'vendor/jquery.ui/ui/widget.js',
                                'vendor/jquery.ui/ui/mouse.js',
                                'vendor/jquery.ui/ui/draggable.js',
                                'vendor/moment/moment.js',
                                'vendor/fullcalendar/dist/fullcalendar.min.js',
                                'vendor/fullcalendar/dist/gcal.js'
                            ]
                        },
                {
                  name: 'ui.calendar',
                  files: [
                                'vendor/angular-ui-calendar/src/calendar.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/calendar.js');
              });
                    }]
          },
          data: {
            title: 'Calendar',
          }
        })
        .state('app.apps.gallery', {
          url: '/gallery',
          templateUrl: 'views/app-gallery.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  serie: true,
                  insertBefore: '#load_styles_before',
                  files: [
                                'vendor/blueimp-gallery/css/blueimp-gallery.min.css',
                                'vendor/blueimp-bootstrap-image-gallery/css/bootstrap-image-gallery.min.css'
                            ]
                        },
                {
                  serie: true,
                  files: [
                                'vendor/blueimp-gallery/js/jquery.blueimp-gallery.min.js',
                                'vendor/blueimp-bootstrap-image-gallery/js/bootstrap-image-gallery.min.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/gallery.js');
              });
                    }]
          },
          data: {
            title: 'Gallery',
          }
        })
        .state('app.apps.messages', {
          url: '/messages',
          templateUrl: 'views/app-messages.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('scripts/controllers/messages.js').then(function () {
                return $ocLazyLoad.load('scripts/services/messages.js');
              });
                    }]
          },
          data: {
            title: 'Messages',
            appClasses: 'layout-small-menu',
            contentClasses: 'no-padding'
          }
        })
        .state('app.apps.social', {
          url: '/social',
          templateUrl: 'views/app-social.html',
          data: {
            title: 'Social Profile',
          }
        })


      // Apps routes
      .state('app.extras', {
          template: '<div ui-view></div>',
          abstract: true,
          url: '/extras',
        })
        .state('app.extras.popup', {
          url: '/popup',
          templateUrl: 'views/extras-popup.html',
          data: {
            title: 'Popup',
          }
        })
        .state('app.extras.invoice', {
          url: '/invoice',
          templateUrl: 'views/extras-invoice.html',
          data: {
            title: 'Invoice',
          }
        })
        .state('app.extras.timeline', {
          url: '/timeline',
          templateUrl: 'views/extras-timeline.html',
          data: {
            title: 'Timeline',
          }
        })
        .state('app.extras.sortable', {
          url: '/sortable',
          templateUrl: 'views/extras-sortable.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load([
                {
                  serie: true,
                  files: [
                                'vendor/jquery.ui/ui/core.js',
                                'vendor/jquery.ui/ui/widget.js',
                                'vendor/jquery.ui/ui/mouse.js',
                                'vendor/jquery.ui/ui/sortable.js'
                            ]
                        }]).then(function () {
                return $ocLazyLoad.load('scripts/controllers/sortable.js');
              });
                    }]
          },
          data: {
            title: 'Sortable',
          }
        })
        .state('app.extras.nestable', {
          url: '/nestable',
          templateUrl: 'views/extras-nestable.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('vendor/nestable/jquery.nestable.js');
                    }]
          },
          data: {
            title: 'Nestable',
          }
        })
        .state('app.extras.search', {
          url: '/search',
          templateUrl: 'views/extras-search.html',
          data: {
            title: 'Search',
          }
        })
        .state('app.extras.changelog', {
          url: '/changelog',
          templateUrl: 'views/extras-changelog.html',
          data: {
            title: 'Changelog',
          }
        })
        .state('app.extras.blank', {
          url: '/blank',
          templateUrl: 'views/extras-blank.html',
          data: {
            title: 'Blank Pages',
          }
        })


      .state('app.widgets', {
        url: '/widgets',
        templateUrl: 'views/widgets.html',
        resolve: {
          deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              {
                insertBefore: '#load_styles_before',
                files: [
                                'styles/climacons-font.css',
                                'vendor/checkbo/src/0.1.4/css/checkBo.min.css'
                            ]
                        },
              {
                files: [
                                'vendor/checkbo/src/0.1.4/js/checkBo.min.js'
                            ]
                        }]);
                    }]
        },
        data: {
          title: 'Widgets',
        }
      })


      .state('user', {
          templateUrl: 'views/common/session.html',
        })
        .state('user.signin', {
          url: '/signin',
          templateUrl: 'views/extras-signin.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('scripts/controllers/session.js');
                    }]
          },
          data: {
            appClasses: 'bg-white usersession',
            contentClasses: 'full-height'
          }
        })
        .state('user.signup', {
          url: '/signup',
          templateUrl: 'views/extras-signup.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('scripts/controllers/session.js');
                    }]
          },
          data: {
            appClasses: 'bg-white usersession',
            contentClasses: 'full-height'
          }
        })
        .state('user.forgot', {
          url: '/forgot',
          templateUrl: 'views/extras-forgot.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('scripts/controllers/session.js');
                    }]
          },
          data: {
            appClasses: 'bg-white usersession',
            contentClasses: 'full-height'
          }
        })

      .state('app.404', {
          url: '/404',
          templateUrl: 'views/extras-404.html',
          data: {
            title: 'Page Not Found',
            contentClasses: 'no-padding',
          }
        })
        .state('user.500', {
          url: '/500',
          templateUrl: 'views/extras-500.html',
          data: {
            appClasses: 'usersession',
            contentClasses: 'full-height'
          }
        })
        .state('user.lockscreen', {
          url: '/lockscreen',
          templateUrl: 'views/extras-lockscreen.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('scripts/controllers/session.js');
                    }]
          },
          data: {
            appClasses: 'usersession',
            contentClasses: 'full-height'
          }
        })


      .state('app.documentation', {
        url: '/documentation',
        templateUrl: 'views/docs.html',
        resolve: {
          deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              {
                serie: true,
                files: [
                                'vendor/prism/themes/prism.css',
                                'vendor/prism/prism.js',
                            ]
                        }]);
                    }]
        },
        data: {
          title: 'Documentation',
          contentClasses: 'no-padding'
        }
      });
        }
    ])
  .config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
      debug: false,
      events: false
    });
    }]);
