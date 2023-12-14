

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('#count');
const total = document.querySelector('.total');
const movieSelect = document.querySelector('#movie');
let ticketPrice = +movieSelect.value;


// Select and deselect seat
seats.forEach((seat) => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected')

        updateSelectedCount();
    })
})

// Ticket price of selected movie
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;

    updateSelectedCount();
})

// Update total and count
function updateSelectedCount(){
    // Number of selected seats
    const selectedSeats = document.querySelectorAll('.row .selected');
    const selectedSeatsCount = selectedSeats.length;
    count.innerHTML = selectedSeatsCount;

    // Mapped array of salected seats
    const seatsArray = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

    // Save selected seats in localStorage
    localStorage.setItem('SelectedSeats', JSON.stringify(seatsArray))

    console.log(seatsArray);

    // Total Price
    total.textContent = selectedSeatsCount * ticketPrice;

}


