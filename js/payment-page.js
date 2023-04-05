// var dataObject = localStorage.getItem('movieDataObj');

// toggling between payment methods 
var rad = document.paymentsForm.payment_method;
var prev = null;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        (prev) ? console.log(prev.value): null;
        if (this !== prev) {
            prev = this;
        }
        var payValue = this.value;
        if(payValue == 'paypal') {
            document.querySelector('.paypal_details').classList.remove('d-none');
            document.querySelector('.card_details').classList.add('d-none');
        } else if (payValue == 'cardCD') {
            document.querySelector('.card_details').classList.remove('d-none');
            document.querySelector('.paypal_details').classList.add('d-none');
        }
    });
}

