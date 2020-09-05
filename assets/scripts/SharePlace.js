import { Modal } from './UI.js';

class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');

        locateUserBtn.addEventListener('click', this.locateUserHandeler);
        // addressForm.addEventListener('submit', );
    }
    locateUserHandeler() {
        if (!navigator.geolocation) {
            alert(' please enable location in your browser or try another one');
            return;
        }

        const modal = new Modal('loading-modal-content', 'Loading Location Please Wait.......');
        modal.show();

        navigator.geolocation.getCurrentPosition(Success => {
            modal.hide();
            const cordinates = {
                lat: Success.coords.latitude,
                long: Success.coords.longitude
            }
            console.log(cordinates)
        }, faild => {
            modal.hide();
            alert(`couldn't locate you , Please Enter Adresss Manually`);
        });
    };

    // findAddressHandeler() {}
};
new PlaceFinder();