$(document).ready(function(){$(".sertificats .owl-carousel").owlCarousel({center:!0,items:3,loop:!0,margin:0,nav:!0,navText:!1}),jQuery("[data-tab-show]").click(function(){var t=jQuery(this).attr("data-tab-show"),e=jQuery(this).attr("data-tab-hide"),a=jQuery(this).attr("data-item");jQuery(a).removeClass("active"),jQuery(this).addClass("active"),jQuery(e).hide(),jQuery(t).show()}),$(".visible-two .owl-carousel,.publication-smi .owl-carousel,.portfolio .owl-carousel").owlCarousel({center:!0,items:1,loop:!0,margin:0,nav:!0,navText:!1}),$('input[type="text"],textarea').click(function(){$(this).attr("placeholder","")}),$("input[name=name]").blur(function(){$(this).attr("placeholder","Имя")}),$('input[type="tel"]').mask("+7 (999) 999-99-99"),$("[data-modal]").click(function(){var t=$(this).attr("data-modal");$(t).arcticmodal()}),jQuery("[data-scroll]").click(function(){var t=jQuery(this).attr("data-scroll"),e=jQuery(t).offset().top;jQuery("body,html").animate({scrollTop:e},1500)}),jQuery("form .button").on("click",function(){var t=jQuery(this).attr("data-item"),e=jQuery(this).parent().serialize(),a=(jQuery(this).parent().parent(),jQuery(this).parent().find(".required").length);jQuery(this).parent().find(".required").each(function(){""!=jQuery(this).val()&&(a-=1)}),0==a?jQuery.ajax({type:"POST",url:"form.php",data:e,success:function(){swal("Отлично!","Ваша заявка успешно отправлена, мы свяжемся с вами в самое ближайшее время, спасибо :)!","success"),$('input[type="text"],input[type="tel"]').val(""),"undefined"!==t&&jQuery(t).arcticmodal("close"),yaCounter37989790.reachGoal("order")},error:function(){sweetAlert("Ошибка!","Форма не отправлена, пожалуйста обновите страницу и попробуйте снова!","error")}}):sweetAlert("Ошибка!","Заполните все поля правильно!","error")}),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0}),wow.init())});