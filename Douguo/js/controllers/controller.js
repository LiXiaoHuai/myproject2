angular.module('starter.controller',['starter.services'])
	.controller('mainpage',function($scope,indexFactory){
			$('.nav_left >ul >li').each(function(){
				var num = $(this).index();
				$(this).click(function(){
					$(this).children('a').addClass('active').parent().siblings().children('a').removeClass('active');
				});
			});
			
			//监听，一旦接收到broadcast，就去取数据
			$scope.data = {};
    		$scope.$on('aboutIndex',function(){
    			$scope.data = indexFactory.getIndexdata();
//			  	console.log($scope.data);
    		});  
			//发送请求
			indexFactory.getIndex();			
	})
	.controller('homeController',function(){
			$('.nav_left >ul >li:nth-of-type(1) a').addClass('active');
			/*时令食材加背景图*/
			$('.left_part .food li').each(function(i,ele){
			//		console.log(i);
			$(this).children('a').css("background-image","url('img/shicai/shicai"+i+".jpg')");
			});
	
			/*作品部分背景图*/
			$('.works > li > a').each(function(i,ele){
				$(ele).css("background-image","url('img/works/works"+i+".jpg')");
			});
			
			/*达人部分 背景图*/
			$('.right_part .daren li >a:nth-of-type(1)').each(function(i,ele){
				$(ele).css('background-image',"url('img/daren/daren"+i+".jpg')");
			});
			
			/*底部合作企业部分*/
			var r = 0;
			var c = 0;
			$('.cooperation ul li a:nth-of-type(1)').each(function(i,ele){
				var x , y;
				r = parseInt(i / 5);
				c = i % 5;
				x = -c * 27; 
				y = -r * 36;
				$(ele).css('background-position',x+'px '+y+'px');
			});
	})
	
	
	
	
	.controller('foodmenuController',function(){
			/*初始化*/
//			$("link[item]").attr("href","css/foodmenu.css");
			$('.nav_left >ul >li:nth-of-type(2) a').addClass('active');	
			$('.foodContent .nav li:nth-of-type(1) a').addClass('active');
			$('.foodContent .nav li').each(function(ele,i){
				$(this).children('a').click(function(){
					$(this).addClass('active')
						.parent()
						.siblings()
						.children('a')
						.removeClass('active');
				});
			});	
			
			//回到顶部操作
			var $reto = $('.retoTop');
			// console.log($reto);
			$reto.on("click", function(e) {
			    e.preventDefault();
			    //	当点击元素时，让页面的滚动距离为0.写两个是为了兼容
			//document.documentElement.scrollTop = document.body.scrollTop = 0;
			    $('html, body').animate({scrollTop:0},500);
			//				$(window).scrollTop();
			});
			var isTopBtnShow = false;
			window.onscroll = function() {
			    var t = document.documentElement.scrollTop || document.body.scrollTop;
			        //console.log(t);
			    if (t >= 650 && !isTopBtnShow) {
			        $reto.css("display", "block");
			        isTopBtnShow = true;
			    } else if(t<650 && isTopBtnShow) {
			        $reto.fadeOut(200);
			        isTopBtnShow = false;
			    }
			}
	})
	.controller('jingxuanController',function($scope,jingxuanFactory){
			$scope.data = {};
    		$scope.$on('aboutJingxuan',function(){
    			$scope.data = jingxuanFactory.getJingxuandata();
//			  	console.log($scope.data);
    		});  
			jingxuanFactory.getJingxuan();			
	})
	.controller('fenleiController',function($scope,fenleiFactory){
			$scope.data = {};
    		$scope.$on('aboutFenlei',function(){
    			$scope.data = fenleiFactory.getFenleidata();
//			  	console.log($scope.data);
    		});  
			fenleiFactory.getFenlei();	
	})
	.controller('shicaiController',function($scope,shicaiFactory){
			$scope.data = {};
    		$scope.$on('aboutShicai',function(){
    			$scope.data = shicaiFactory.getShicaidata();
//			  	console.log($scope.data);
    		});  
			shicaiFactory.getShicai();			
	})
	.controller('zuopinController',function($scope,zuopinFactory){
			$scope.data = {};
    		$scope.$on('aboutZuopin',function(){
    			$scope.data = zuopinFactory.getZuopindata();
//			  	console.log($scope.data);
    		});  
			zuopinFactory.getZuopin();		
	})
	.controller('caidanController',function($scope,caidanFactory){
			$scope.data = {};
    		$scope.$on('aboutCaidan',function(){
    			$scope.data = caidanFactory.getCaidandata();
//			  	console.log($scope.data);
    		});  
			caidanFactory.getCaidan();			
	})
	.controller('paihangController',function($scope,paihangFactory){
			$scope.data = {};
    		$scope.$on('aboutPaihang',function(){
    			$scope.data = paihangFactory.getPaihangdata();
//			  	console.log($scope.data);
    		});  
			paihangFactory.getPaihang();			
	})
	
	
	
	
	.controller('deliciousController',function($scope,deliciousFactory){
			/*初始化*/
//			$("link[item]").attr("href","css/delicious.css");
			$('.nav_left >ul >li:nth-of-type(3) a').addClass('active');
			$('.delicious_head li:nth-of-type(1) a').addClass('active');
			$('.delicious_head li').each(function(ele,i){
				$(this).children('a').click(function(){
					$(this).addClass('active')
						.parent()
						.siblings()
						.children('a')
						.removeClass('active');
				});
			});	
			/*下载块隐藏*/
			$('.xiazai').find('span').click(function(event){
				event.stopPropagation();
				$('.xiazai').css('display','none');
			});
			
			//回到顶部操作
			var $reto = $('.retoTop');
			// console.log($reto);
			$reto.on("click", function(e) {
			    e.preventDefault();
			    //	当点击元素时，让页面的滚动距离为0.写两个是为了兼容
			//document.documentElement.scrollTop = document.body.scrollTop = 0;
			    $('html, body').animate({scrollTop:0},500);
			//				$(window).scrollTop();
			});
			var isTopBtnShow = false;
			window.onscroll = function() {
			    var t = document.documentElement.scrollTop || document.body.scrollTop;
			        //console.log(t);
			    if (t >= 650 && !isTopBtnShow) {
			        $reto.css("display", "block");
			        isTopBtnShow = true;
			    } else if(t<650 && isTopBtnShow) {
			        $reto.fadeOut(200);
			        isTopBtnShow = false;
			    }
			}
			
			
			
			$scope.data = {};
    		$scope.$on('aboutDelicious',function(){
    			$scope.data = deliciousFactory.getDeliciousdata();
//			  	console.log($scope.data);
    		});  
			deliciousFactory.getDelicious();		
	})
	.controller('discoverController',function($scope,deliciousFactory){
			$scope.data = {};
    		$scope.$on('aboutDelicious',function(){
    			$scope.data = deliciousFactory.getDeliciousdata();
//			  	console.log($scope.data);
    		});  
			deliciousFactory.getDelicious();		
	})
	.controller('diaryController',function($scope,deliciousFactory){
			$scope.data = {};
    		$scope.$on('aboutDelicious',function(){
    			$scope.data = deliciousFactory.getDeliciousdata();
//			  	console.log($scope.data);
    		});  
			deliciousFactory.getDelicious();		
	})
	.controller('hotelController',function($scope,deliciousFactory){
			$scope.data = {};
    		$scope.$on('aboutDelicious',function(){
    			$scope.data = deliciousFactory.getDeliciousdata();
//			  	console.log($scope.data);
    		});  
			deliciousFactory.getDelicious();		
	})
	
	
	
	
	
	
	
	
	.controller('goodshopingController',function($scope,goodshopingFactory){
			/*初始化*/
//			$("link[item]").attr("href","css/goodshoping.css");
			$('.nav_left >ul >li:nth-of-type(4) a').addClass('active');
			
			$scope.data = {};

    		$scope.$on('aboutGoodshoping',function(){
    			$scope.data = goodshopingFactory.getGoodshopingdata();
    		});  
			goodshopingFactory.getGoodshoping();	
	})
	.controller('themecontroller',function(){
			/*初始化*/
//			$("link[item]").attr("href","css/foodmenu.css");
			$('.nav_left >ul >li:nth-of-type(5) a').addClass('active');
	})
	.controller('activitycontroller',function(){
			/*初始化*/
//			$("link[item]").attr("href","css/foodmenu.css");
			$('.nav_left >ul >li:nth-of-type(6) a').addClass('active');
	});