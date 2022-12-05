import React from 'react';


const DeleteConfirmation = ({ handleDelete }) => {

    return (
        <div>



            {/* Put this part before </body> tag */}
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative my-2 bg-base-100">
                    <label htmlFor="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Do you really want to delete this product?</h3>
                    <h1 onClick={handleDelete} className='flex justify-center'><p className=" my-4 btn btn-accent">Proceed</p></h1>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmation;