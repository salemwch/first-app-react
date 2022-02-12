import React from 'react';

function Contact () {
    return (
      
        <div className='a-contact'>
          <form className="row g-3 needs-validation" noValidate>
  <div className="col-md-4">
    <label for="validationCustom01" className="form-label">First name</label>
    <input type="text" placeholder="First Name" className="form-control" id="validationCustom01" aria-describedby="inputGroupPrepend" required></input>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustom02" className="form-label">Last name</label>
    <input type="text"  placeholder="Last Name" className="form-control" id="validationCustom02" aria-describedby="inputGroupPrepend" required></input>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label for="validationCustomUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required></input>
      <div className="invalid-feedback">
        Please choose Username
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">Where Do You Live ? </label>
    <select className="form-select" id="validationCustom04" required>
    <option value="">We Deliver Order Only In Tunisia </option>
    <option>Tunis</option>
    <option >Ariana</option>
    <option>Sousse</option>
    <option>Ben Arous</option>
    <option>Manouba</option>
    <option>Bizert</option>
    <option>Nabeul</option>
    <option>Beja</option>
    <option>Jendouba</option>
    <option>Zaghouan</option>
    <option>Siliana</option>
    <option>Le Kef</option>
    <option>Monastir</option>
    <option>Mahdia</option>
    <option>Kasserine</option>
    <option>Sii Bouzid</option>
    <option>Kairouan</option>
    <option>Gafsa</option>
    <option>Sfax</option>
    <option>Gabes</option>
    <option>Mednine</option>
    <option>Tozeur</option>
    <option>Kebili</option>
    <option>Tataouine</option>
    </select>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom04" className="form-label">Burger Option </label>
    <select className="form-select" id="validationCustom04" required>
      <option value="">Choose...</option>
      <option>burger king </option>
      <option>burger  </option>
      <option>Super  burger  </option>
      <option> Special burger  </option>
      <option> Special burger with cheese  </option>
      <option> Special burger with Two pieces of meat </option>
    </select>
    <div className="invalid-feedback">
      Please select your burger option .
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom05" className="form-label">Phone Number</label>
    <input type="text" className="form-control" id="validationCustom05" required></input>
    <div className="invalid-feedback">
      Please provide a valid Phone Number.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit Order</button>
  </div>
</form>
        </div>
    );
}

export default Contact;
