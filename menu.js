$(document).ready(function() {

    $('.btn-original').click(function(original) {
        original.preventDefault()

        $('body').removeClass('claro')
        $('body').removeClass('escuro')
        $('body').addClass('original')
        $('p').removeClass('text-white')
        $('p').addClass('text-dark')
        $('label').removeClass('text-white')
        $('label').addClass('text-dark')
        $('h1').removeClass('text-white')
        $('h1').addClass('text-dark')
    })

    $('.btn-escuro').click(function(escuro) {
        escuro.preventDefault()

        $('body').removeClass('original')
        $('body').removeClass('claro')
        $('body').addClass('escuro')
        $('p').removeClass('text-dark')
        $('p').addClass('text-white')
        $('label').removeClass('text-dark')
        $('label').addClass('text-white')
        $('h1').removeClass('text-dark')
        $('h1').addClass('text-white')
    })

    $('.btn-claro').click(function(claro) {
        claro.preventDefault()

        $('body').removeClass('original')
        $('body').removeClass('escuro')
        $('body').addClass('claro')
        $('p').removeClass('text-whit')
        $('p').addClass('text-dark')
        $('label').removeClass('text-white')
        $('label').addClass('text-dark')
        $('h1').removeClass('text-white')
        $('h1').addClass('text-dark')
    })

})