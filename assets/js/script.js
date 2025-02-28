// le acceuil miafina ito
$(function () {
   
    $('.navbar_menu').css('top', '-100px');

    $(window).scroll(function () {
        var currentScrollTop = $(this).scrollTop();


        if (currentScrollTop === 0) {
            $('.navbar_menu').css('top', '-100px');
        } else {

            $('.navbar_menu').css('top', '0');
        }

        lastScrollTop = currentScrollTop;
    });
});
// le thème no eto
$(function ()
{
    // mode mazava 
    $('.fa-moon').hide();
    $('.fa-sun').click(function ()
    {
        $(this).toggle();
        $('.fa-moon').toggle();
        $('body').addClass('body_theme');
        $('.navbar_menu').addClass('navbar_menu_theme');
        $('.menu_liste_a').addClass('menu_liste_a_theme');
        $('.lienlogo').addClass('menu_liste_a_theme');
        $('.img_conteneur').addClass('img_conteneur_theme');
        $('.whatsapp').addClass('whatsapp_theme');
        $('.facebook').addClass('facebook_theme');
        $('.linkedin').addClass('linkedin_theme');
        $('.mail').addClass('mail_theme');
        $('.mon_competence').addClass('mon_competence_theme');
        $('.titre_competence').addClass('titre_competence_theme');
        $('.menu_liste_a.active').addClass('menu_liste_a_theme.active');
        $('.timeline').addClass('timeline_theme');
        $('.exp_1').addClass('exp_1_theme');
        $('.exp_2').addClass('exp_2_theme');
        $('.exp_3').addClass('exp_3_theme');
        $('.fa-briefcase').addClass('fa-briefcase_theme');
        $('.timeline_icon_3').addClass('timeline_icon_3_theme');
        $('.timeline_icon_2').addClass('timeline_icon_2_theme');
        $('.timeline_icon_1').addClass('timeline_icon_1_theme');
    });




    // mode sombre
    $('.fa-moon').click(function ()
    {
        $(this).toggle();
        $('.fa-sun').toggle();
        $('body').removeClass('body_theme');
        $('.navbar_menu').removeClass('navbar_menu_theme');
        $('.menu_liste_a').removeClass('menu_liste_a_theme');
        $('.lienlogo').removeClass('menu_liste_a_theme');
        $('.img_conteneur').removeClass('img_conteneur_theme');
        $('.whatsapp').removeClass('whatsapp_theme');
        $('.facebook').removeClass('facebook_theme');
        $('.linkedin').removeClass('linkedin_theme');
        $('.mail').removeClass('mail_theme');
        $('.mon_competence').removeClass('mon_competence_theme');
        $('.titre_competence').removeClass('titre_competence_theme');
        $('.menu_liste_a.active').removeClass('menu_liste_a_theme.active');
        $('.timeline').removeClass('timeline_theme');
        $('.exp_1').removeClass('exp_1_theme');
        $('.exp_2').removeClass('exp_2_theme');
        $('.exp_3').removeClass('exp_3_theme');
        $('.fa-briefcase').removeClass('fa-briefcase_theme');
        $('.timeline_icon_3').removeClass('timeline_icon_3_theme');
        $('.timeline_icon_2').removeClass('timeline_icon_2_theme');
        $('.timeline_icon_1').removeClass('timeline_icon_1_theme');



        

    });
});
$(window).on('load', function () {
    $('#preloader').fadeOut('slow');
});