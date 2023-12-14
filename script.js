

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('#count');
const total = document.querySelector('#total');
const movieSelect = document.querySelector('#movie');
const ticketPrice = +movieSelect.value;


// Select and deselect seat
seats.forEach((seat) => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected')

        updateSelectedCount();
    })
})

// Update total and count
function updateSelectedCount(){
    // Number of selected seats
    const selectedSeats = document.querySelectorAll('.selected').length - 1;

    console.log(selectedSeats);
}
updateSelectedCount();