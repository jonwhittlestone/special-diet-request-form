import axios from "axios";
import { AxiosRequestHeaders } from "axios";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  childsName: string;
  dobDay: number;
  dobMonth: number;
  dobYear: number;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const http_headers = (accessToken: string): AxiosRequestHeaders => {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    //Authorization: `Bearer ${accessToken}`,
  };
};

const FormikWithTypescript = () => {
  const handleOnSubmit = (data: Values, actions: FormikHelpers<any>) => {
    actions.setSubmitting(true);
    // alert("submitting");

    const submitData = Object.assign({ ...data }, data);
    axios
      .post("http://localhost:3000/students", JSON.stringify(submitData), {
        headers: http_headers("access token stub"),
      })
      .then((res) => {
        actions.setSubmitting(false);
      });
  };

  return (
    <>
      <h1>(TS) Diet Request Form</h1>
      <Formik
        initialValues={{
          childsName: "",
          dobDay: 21,
          dobMonth: 6,
          dobYear: 2002,
        }}
        onSubmit={(values: Values, actions) => {
          handleOnSubmit(values, actions);
          //   async (values) => {
          //     await sleep(500);
          //     alert(JSON.stringify(values, null, 2));
          //   };
          //   setTimeout(() => {
          //     alert(JSON.stringify(values, null, 2));
          //     setSubmitting(false);
          //   }, 500);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="firstName">Child's Name</label>
            <Field id="childsName" name="childsName" placeholder="" />

            <h4>Date of Birth</h4>
            <label htmlFor="dobDay">Day</label>
            <Field id="dobDay" name="dobDay" placeholder="" />

            <label htmlFor="dobMonth">Month</label>
            <Field id="dobMonth" name="dobMonth" placeholder="" />

            <label htmlFor="dobMonth">Year</label>
            <Field id="dobYear" name="dobYear" placeholder="" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default FormikWithTypescript;
