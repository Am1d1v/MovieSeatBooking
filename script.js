

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('#count');
const total = document.querySelector('.total');
const movieSelect = document.querySelector('#movie');
let ticketPrice = +movieSelect.value;

// Get data from localStorage and populate UI
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('SelectedSeats'));

    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        });
    }
}
populateUI();

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

    setMovieData(e.target.selectedIndex, ticketPrice);
    updateSelectedCount();
})

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice){
   localStorage.setItem('selectedMovieIndex', movieIndex);
   localStorage.setItem('seelctedMoviePrice', moviePrice); 
}

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


    // Total Price
    total.textContent = selectedSeatsCount * ticketPrice;

}


