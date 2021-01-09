import React from "react";
import "./index.css";
let styles = {
  form: { border: "1px solid #bababa", borderRadius: "30px", display: "block", paddingLeft:"20px", width:"100%",},
};

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form autocomplete="off">
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        <input
          style={styles.form}
          id="Title"
          type="text"
          value={q}
          placeholder="Seach Book Name"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-primary fa fa-search"
        >
        </button>
      </div>
    </form>
  );
}

export default Form;
