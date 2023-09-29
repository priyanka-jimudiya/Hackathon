import React from "react";

function Contact() {

    return (
        <>
        <div class="container row ">
            <div class="col-sm-6">
        <div>
         <div>
          <div className="fs-3 m-lg-5 m-2">
            <form className="w-custom" method="post" action="/contact.php">
              <input type="hidden" name="csrfmiddlewaretoken" defaultValue="K5LH8YNmTqoO8HEJahTAVW4jnJWIP73F8zeXjtPbrYNdFbPxi3DL3lxeyraQEVKe" />
              Name <span className="text-danger ">*</span>
              <div className="d-flex mt-2 mb-3">
                <input className="form-control me-2" type="text" placeholder="Surname" autofocus name="fName" required />
                <input className="form-control me-2" type="text" placeholder="Name" name="mName" required />
                <input className="form-control me-2" type="text" placeholder="Last" name="lName" required />
              </div>
              Email <span className="text-danger">*</span>
              <div className="d-flex mt-2 mb-3">
                <input className="form-control me-2" type="email" placeholder="Email Id" name="gmail" required />
              </div>
              Message <span className="text-danger">*</span>
              <div className="d-flex mt-2 mb-3">
                <textarea rows={5} className="form-control me-2" name="msg" required defaultValue={""} />
              </div>
              <div className="text-center mt-4">
                <button className="btn btn-primary" type="submit">Send Message</button>
              </div>
            </form>
        </div>  
        </div> 
      </div>
      </div>
      </div>  
      </>
    );
}

export default Contact