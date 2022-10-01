import { Formik, Field, Form } from "formik";

const BasicFormik = () => (
  <>
    <h1>
      <a href="https://formik.org/docs/examples/basic">Basic Formik Example</a>
    </h1>
    <hr />
    <h2>Sign Up</h2>
    <Formik
      initialValues={{
        childsName: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="childsName">Child's Name</label>
        <Field id="childsName" name="childsName" placeholder="" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </>
);
export default BasicFormik;
