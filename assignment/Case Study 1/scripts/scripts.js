$(function () {

    $('.books .slider-wrapper').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    });


    $('.dropdown .dropdown-label').on('click', function () {
        $('.dropdown .dropdown-list').slideToggle();
    });

    $(document).on('click', function () {
        $('.dropdown .dropdown-list').slideUp();
    });
    $('.dropdown').on('click', function (e) {
        e.stopPropagation();
    });

    $('.products .dropdown .dropdown-list .list-wrap input:checkbox').on('change', function (e) {
        $('.products button').removeClass('btn-secondary').addClass('btn-success').removeAttr('disabled');
        
        if($(this).prop('checked')){
        var check = $(this).val();
        $(this).parents('.products').find('ol').append('<li>' + check + '   <a href="#">Delete</a></li>');
        }
        else if($(this).prop('checked',false)) {
            var check1 = $(this).val(); 
            $('.products ol li').each(function(){
                if($(this).html() == check1){
                    $(this).remove();
                }
            });
            if($('.products ol li').length == 0){
                $('.products button').removeClass('btn-success').addClass('btn-secondary').prop('disabled', true);
            }
        }
    });

    $('.products .review-btn').on('click', function(){
        $('.products .products-wrapper').hide();
        $('.products .review').show();
        $(this).parents('.products').find('.breadcrumb ul li').eq(1).addClass('text-success').siblings().removeClass('text-success');
    });

    $(document).on('click','.products .review ol li a', function(e){
        e.preventDefault();
        $(this).parent().remove();
    });
$('.products .review .edit').on('click', function(){
    $(this).parent().hide();
    $('.products .products-wrapper').show();
    $(this).parents('.products').find('.breadcrumb ul li').eq(0).addClass('text-success').siblings().removeClass('text-success');
});
$('.products .review .next').on('click', function(){
    $(this).parent().hide();
    $('.products .payment').show();
    $(this).parents('.products').find('.breadcrumb ul li').eq(2).addClass('text-success').siblings().removeClass('text-success');
});
    $('.products .payment form .confirm').on('click', function(){
        $(this).parents('.payment').hide();
        var payemnt = $(this).parents('form').find('select option:selected').text();

        var first = $(this).parents('form').find('input[name="first"').val();
        var last = $(this).parents('form').find('input[name="last"').val();
        var address = $(this).parents('form').find('input[name="address"').val();
        $(this).parents('.products').find('.confirm-order table tbody tr').append('<td>'+payemnt+'</td>');
        $(this).parents('.products').find('.confirm-order table tbody tr').append('<td>'+first+'</td>');
        $(this).parents('.products').find('.confirm-order table tbody tr').append('<td>'+last+'</td>');
        $(this).parents('.products').find('.confirm-order table tbody tr').append('<td>'+address+'</td>');
        $('.products .confirm-order').show();
        
    });

    $('.products .confirm-order .checkout').on('click', function(){
        $('.products .confirm-order h4').hide();
        $('.products .confirm-order table').hide();
        $(this).hide();
        
        $(".products .confirm-order .thank-you").show();
        setTimeout(function() {
            $(".products .confirm-order .thank-you").hide();
            window.location.reload();
            }, 3000);
    });
});