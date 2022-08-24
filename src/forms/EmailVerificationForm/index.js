import React from "react";

function EmailVerificationForm() {
  return (
    <form className="form-container mt-5">
      <input
        type="text"
        name="code"
        className="form-control"
        placeholder="Verification code"
      />
      <div className="d-flex justify-content-center">
        <button type="sumit" className="btn btn-dark my-4">
          Verify
        </button>
      </div>
    </form>
  );
}

export default EmailVerificationForm;
