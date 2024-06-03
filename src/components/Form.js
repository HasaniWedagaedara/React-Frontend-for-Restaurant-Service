import React from 'react';
import "../App.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Form = ({ handleSubmit, handleOnChange, handleClose, rest, errors }) => {
  return (
    <div className="addcontainer">
      <form onSubmit={handleSubmit}>

        <i className="bi bi-x-circle-fill" onClick={handleClose}></i>


        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.name} />
        {errors.name && <span className="text-danger">{errors.name}</span>}


        <label htmlFor="address">Address: </label>
        <input type="text" id="address" name="address" onChange={handleOnChange} value={rest.address} />
        {errors.address && <span className="text-danger">{errors.address}</span>}


        <label htmlFor="telephone">Telephone: </label>
        <input type="text" id="telephone" name="telephone" onChange={handleOnChange} value={rest.telephone} />
        {errors.telephone && <span className="text-danger">{errors.telephone}</span>}

        <br /><br />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Form;
