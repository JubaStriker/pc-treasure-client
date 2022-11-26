import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({ product, setProduct }) => {

    const { name, resalePrice } = product;
    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const product = form.product.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const name = form.name.value;
        const email = form.email.value;

        const booking = {
            product: product,
            price: price,
            name: name,
            location: location,
            phone: phone,
            email: email,
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setProduct(null);
                    toast.success('Booking confirmed')
                }
                else {
                    toast.error(data.message);
                }
            })


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" onClick={() => setProduct(null)} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Confirm Order</h3>
                    <form onSubmit={handleBooking}>
                        <input name='product' type="text" defaultValue={name} disabled className="input input-bordered w-full  my-2" />
                        <input name='price' type="text" defaultValue={`${resalePrice} Tk`} disabled className="input input-bordered w-full  my-2" />
                        <input name='phone' type="text" placeholder='phone' className="input input-bordered w-full  my-2" />
                        <input name='location' type="text" placeholder='location' className="input input-bordered w-full  my-2" />
                        <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Full name" className="input input-bordered w-full  my-2" />

                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder="Email" className="input input-bordered w-full  my-2" />
                        <input className='w-full btn btn-accent' type="submit" value="submit" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;