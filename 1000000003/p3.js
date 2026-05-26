// Tăng số lượng
$('.btn-increase').click(function() {
    quantity++;
    updateProductTotal();
    updateCartSummary();
});

// Giảm số lượng (không cho < 1)
$('.btn-decrease').click(function() {
    if (quantity > 1) {
        quantity--;
    }
});