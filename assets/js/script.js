// le logo miovaova milay kely no mijery azy
$(function ()
{
    // facebook
    $('.fa-facebook-square').hide();
    $('.fa-facebook-f').mouseenter(function () { 
        $(this).toggle();
        $('.fa-facebook-square').toggle();
    });
    $('.fa-facebook-square').mouseleave(function () {
        $(this).toggle();
        $('.fa-facebook-f').toggle();
    });

    // whatsapp
    $('.fa-whatsapp-square').hide();
    $('.fa-whatsapp').mouseenter(function () {
        $(this).toggle();
        $('.fa-whatsapp-square').toggle();
    });
    $('.fa-whatsapp-square').mouseleave(function () {
        $(this).toggle();
        $('.fa-whatsapp').toggle();
    });
    // linkedin
    $('.fa-linkedin').hide();
    $('.fa-linkedin-in').mouseenter(function () {
        $(this).toggle();
        $('.fa-linkedin').toggle();
    });
    $('.fa-linkedin').mouseleave(function () {
        $(this).toggle();
        $('.fa-linkedin-in').toggle();
    });
    // mail
    $('.fa-envelope-open').hide();
    $('.fa-envelope').mouseenter(function () {
        $(this).toggle();
        $('.fa-envelope-open').toggle();
    });
    $('.fa-envelope-open').mouseleave(function () {
        $(this).toggle();
        $('.fa-envelope').toggle();
    });
});

// CV
function cv()
{
    alert('Oups!! Une erreur est survenue, réessayer plus tard.')
}

// Smile
$(function ()
{
    $('.smile2').hide();
    $('.smile3').hide();
    $('.smile1').mouseenter(function () { 
        $(this).toggle();
        $('.smile2').toggle();
    });
    $('.smile2').mouseleave(function () {
        $(this).toggle();
        $('.smile1').toggle();
    });
    $('.smile2').mousedown(function ()
    {  
        $(this).hide();
        $('.smile1').hide();
        $('.smile3').fadeIn();
    });
    $('.smile3').mousedown(function () {
        $(this).hide();
        $('.smile1').hide();
        $('.smile2').fadeIn();
    });
});
// $(function ()
// {
//     $('.marque').addClass('test');
// });
// le style an le lien vo mcilque zany le ahafantarana an le lien
$(function ()
{
    $('#marque1').addClass('menu_liste_lien1_focus');
    $('#marque1').click(function ()
{
        $('#marque2').removeClass('menu_liste_lien1_focus');
        $('#marque3').removeClass('menu_liste_lien1_focus');
        $('#marque4').removeClass('menu_liste_lien1_focus');
        $('#marque1').addClass('menu_liste_lien1_focus');
    });
    $('#marque2').click(function ()
    {
        $('#marque1').removeClass('menu_liste_lien1_focus');
        $('#marque3').removeClass('menu_liste_lien1_focus');
        $('#marque4').removeClass('menu_liste_lien1_focus');
        $('#marque2').addClass('menu_liste_lien1_focus');
    });
    $('#marque3').click(function ()
    {
        $('#marque1').removeClass('menu_liste_lien1_focus');
        $('#marque2').removeClass('menu_liste_lien1_focus');
        $('#marque4').removeClass('menu_liste_lien1_focus');
        $('#marque3').addClass('menu_liste_lien1_focus');
    });
    $('#marque4').click(function ()
    {
        $('#marque1').removeClass('menu_liste_lien1_focus');
        $('#marque2').removeClass('menu_liste_lien1_focus');
        $('#marque3').removeClass('menu_liste_lien1_focus');
        $('#marque4').addClass('menu_liste_lien1_focus');
    });
});
// Animation mihetsiketsika une fois mclique
$(function ()
{
    $('.mon_portfolio').click(function ()
    {
        $(this).toggleClass('click_animation');
    });
    $('.mon_nom').click(function ()
    {
        $(this).toggleClass('click_animation');
    });
    $('.still_text').click(function ()
    {
        $(this).toggleClass('click_animation');
    });
    $('.bienvenue_texte').click(function ()
    {
        $(this).toggleClass('click_animation');
    });
    $('.mon_job').click(function ()
    {
        $(this).toggleClass('mon_job_anim');
    });
    $('.bienvenue_texte_1').click(function ()
    {
        $(this).toggleClass('mon_job_anim');
    });
});
// le menu mikisaka an le tabletty sy phone 
$(function ()
{
    $('.menu_resp_me').click(function ()
    {
        $('.sidebars').fadeIn();
        $('body').css('overflow', 'hidden');
        $('.sidebars').addClass('sidebars_btn');
        $('.menu_liste').hide();
        $('.momba_ahy').show();
        $('.menu_resp_me_hide').css('display', 'block');
        $('.img_me_conteneur').css
            ({
                'width': '230px',
                'height':'230px'
            });
        $('.reseau_sociaux').css
            ({
                'margin': '0px'
            });
        
        $('.still').css
            ({
                'display': 'flex',
                'position':'static',
                'justify-content': 'center',

            });  
    });
    $('.menu_resp_me_hide').click(function ()
    {
        $('.sidebars').fadeOut();
        $('body').css('overflow', 'visible');
    });
});
