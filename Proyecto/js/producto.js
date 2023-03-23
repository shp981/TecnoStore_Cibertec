$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.categoria__lista .categoria__item[category="todo"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.categoria__item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.categoria__item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.producto-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.producto-item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.producto-item[category="'+catProduct+'"]').show();
			$('.producto-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.categoria__item[category="todo"]').click(function(){
		function showAll(){
			$('.producto-item').show();
			$('.producto-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});