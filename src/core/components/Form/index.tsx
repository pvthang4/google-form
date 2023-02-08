import { Formik } from "formik";
import SectionFieldArray from "./SectionFieldArray";
import "../../../styled.css";

const Form: React.FC = () => {
  
  return (
    <div className="main">
      <Formik
        initialValues={{ sections: [] }}
        onSubmit={() => alert(123)}
        validateOnChange={false}
        validateOnBlur
        enableReinitialize
      >
        {({ handleSubmit, values, setFieldValue, handleChange }: any) => {
          console.log("values12312", values);
          
          return (
            <SectionFieldArray
              values={values}
              setFieldValue={setFieldValue}
              handleChange={handleChange}
            />
          );
        }}
      </Formik>
    </div>
  );
};

export default Form;
