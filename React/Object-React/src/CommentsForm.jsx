import { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Apna naam bta bhai ! ujagar nhi karunga";
  }
  if (!values.remarks) {
    errors.remarks = "Kuch to likh do yaar ! Dekh kar chhoda na karo, bura lagta hai";
  }
  return errors;
};

export default function CommentsForm({ addNewComment }) {
  // let [formData, setFormData] = useState({
  //   username: "",
  //   remarks: "",
  //   rating: 5,
  // });

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // let handleInputChange = (event) => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };

  // let handleSubmit = (event) => {
  //   console.log(formData);
  //   addNewComment(formData);
  //   event.preventDefault();
  //   setFormData({
  //     username: "",
  //     remarks: "",
  //     rating: 5,
  //   });
  // };

  return (
    <div>
      <h3>Give a Comment !</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Apna hi naam likho"
            value={formik.values.username}
            id="username"
            name="username"
            onChange={formik.handleChange}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        {formik.errors.username ? (
          <div style={{ color: "red" }}>{formik.errors.username}</div>
        ) : null}

        <div className="input-group">
          <span className="input-group-text">Remark dedo !</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
            placeholder="Kuch Achcha Likhna"
            value={formik.values.remarks}
            id="remarks"
            name="remarks"
            onChange={formik.handleChange}
          ></textarea>
        </div>
        {formik.errors.remarks ? (
          <div style={{ color: "red" }}>{formik.errors.remarks}</div>
        ) : null}
        <br />
        <label htmlFor="rating" style={{ color: "white" }}>
          Rating
        </label>{" "}
        &nbsp;
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formik.values.rating}
          id="rating"
          name="rating"
          onChange={formik.handleChange}
        />
        <br />
        <br />
        <button className="btn btn-outline-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
