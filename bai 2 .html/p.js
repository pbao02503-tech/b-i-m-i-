function updateProductTotal(productItem) {
    const quantity = parseInt($(productItem).find('.quantity-input').val());
    const unitPrice = parseInt($(productItem).find('.unit-price').data('price'));
    const total = quantity * unitPrice;
    $(productItem).find('.total-price').text(formatMoney(total) + 'đ');
}