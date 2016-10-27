angular.module('starter',['ui.router','starter.controller','starter.filter','starter.directives'])
	.config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
        		/*首页*/
                .state('home',{
                    url:'/home',
                   	templateUrl:'template/home/home.html',
                   	controller:'homeController'
                })
                                
                /*食谱界面*/
                .state('foodmenu',{
                	url:'/foodmenu',           
                    templateUrl:'template/foodmenu/foodmenu.html',
              		controller:'foodmenuController'            
                })
	                .state('foodmenu.jingxuan',{
	                	url:'/jingxuan',                  
	                    templateUrl:'template/foodmenu/jingxuan.html',
	                    controller:'jingxuanController'
	            	})
	                .state('foodmenu.fenlei',{
	                	url:'/fenlei',                  
	                    templateUrl:'template/foodmenu/fenlei.html',
	                    controller:'fenleiController'
	            	})
	                .state('foodmenu.shicai',{
	                	url:'/shicai',                  
	                    templateUrl:'template/foodmenu/shicai.html',
	                    controller:'shicaiController'
	            	})
	                .state('foodmenu.zuopin',{
	                	url:'/zuopin',                  
	                    templateUrl:'template/foodmenu/zuopin.html',
	                    controller:'zuopinController'
	            	})
	                .state('foodmenu.caidan',{
	                	url:'/caidan',                  
	                    templateUrl:'template/foodmenu/caidan.html',
	                    controller:'caidanController'
	            	})
	                .state('foodmenu.paihang',{
	                	url:'/paihang',                  
	                    templateUrl:'template/foodmenu/paihang.html',
	                    controller:'paihangController'
	            	})
                                              
                /*写食派界面*/
                .state('delicious',{
                	url:'/delicious',
                	templateUrl:'template/delicious/delicious.html',
                    controller:'deliciousController'            
                })
	                .state('delicious.discover',{
	                	url:'/discover',
	                	templateUrl:'template/delicious/discover.html',
	                    controller:'discoverController'            
	                })
	                .state('delicious.diary',{
	                	url:'/diary',
	                	templateUrl:'template/delicious/diary.html',
	                    controller:'diaryController'            
	                })
	                .state('delicious.hotel',{
	                	url:'/hotel',
	                	templateUrl:'template/delicious/hotel.html',
	                    controller:'hotelController'            
	                })
                       
            	/*够好货界面*/
                .state('goodshoping',{
                	url:'/goodshoping',
               		templateUrl:'template/goodshoping/goodshoping.html',
                    controller:'goodshopingController'
                })
                
                /*主题界面*/
                .state('theme',{
                	url:'/theme',
                	templateUrl:'template/theme/theme.html',
                    controller:'themeController'
                })
	                .state('theme.alltheme',{
	                	url:'/alltheme',
	                	templateUrl:'template/theme/alltheme.html',
	                    controller:'allthemeController'
	                })
	                .state('theme.allarticle',{
	                	url:'/allarticle',
	                	templateUrl:'template/theme/allarticle.html',
	                    controller:'allarticleController'
	                })
                
                /*活动界面*/
                .state('activity',{
                	url:'/activity',
                	templateUrl:'template/activity/activity.html',
                    controller:'activityController'
                });
                
                /*重定向状态如果找不到路由  则重定向到首页*/
                $urlRouterProvider.otherwise('/home');
});




