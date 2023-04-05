const header = document.querySelector('header');

window.addEventListener("scroll", function () {

    window.scrollY >= 10 ? header.classList.add("scrolled") : header.classList.remove("scrolled");

});

const seatPreview = document.querySelector('.seat-preview');
const totalAmount = document.querySelector('.total-amount');
const seatNames = [];

const rows = 10;
const seatsPerRow = 10;
const seatTypes = ['standard', 'premium', 'VIP'];
const seatPrices = {
  standard: 10,
  premium: 20,
  VIP: 30
};

let selectedSeats = [];
let totalPrice = 0;

for (let i = 0; i < rows; i++) {
  const seatRow = document.createElement('div');
  seatRow.classList.add('seat-row');
  const rowName = String.fromCharCode(65 + i); // Get row name from char code
  for (let j = 0; j < seatsPerRow; j++) {
    const seat = document.createElement('div');
    seat.classList.add('seat', seatTypes[Math.floor(j / 4) % 3]);
    seat.textContent = `${rowName}${j + 1}`;
    seatNames.push(`${rowName}${j + 1}`);
    seat.addEventListener('click', () => {
      if (seat.classList.contains('disabled')) {
        return;
      }
      seat.classList.toggle('selected');
      selectedSeats = Array.from(seatPreview.querySelectorAll('.selected'));
      totalPrice = selectedSeats.reduce((acc, seat) => acc + seatPrices[seat.classList[1]], 0);
      updateTotalAmount();
      updateSelectedSeats();
    });
    seatRow.appendChild(seat);
  }
  seatPreview.appendChild(seatRow);
}

function updateTotalAmount() {
  totalAmount.innerText = `Total Amount: $${totalPrice}`;
}

function updateSelectedSeats() {
  const selectedSeatNames = selectedSeats.map(seat => seat.textContent);
  const seatNamesString = selectedSeatNames.join(', ');
  const selectedSeatsElement = document.querySelector('#selected-seats');
  selectedSeatsElement.innerText = seatNamesString;
}

seat.addEventListener('click', () => {
  if (seat.classList.contains('disabled')) {
    return;
  }
  seat.classList.toggle('selected'); // add or remove the 'selected' class
  selectedSeats = Array.from(seatPreview.querySelectorAll('.selected'));
  totalPrice = selectedSeats.reduce((acc, seat) => acc + seatPrices[seat.classList[1]], 0);
  updateTotalAmount();
  updateSelectedSeats();
});


