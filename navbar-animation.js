$('.collapse').on('show.bs.collapse', function() {
    $('.topCasaFina-banner').css('transform', 'translate(-50%, -5%)');
})

$('.collapse').on('hide.bs.collapse', function() {
    $('.topCasaFina-banner').css('transform', 'translate(-50%, -50%)');
})