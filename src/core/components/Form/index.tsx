import { Formik } from "formik";
import SectionFieldArray from "./SectionFieldArray";
import Header from "../Common/Header";
import styled from "styled-components";
import { initalFormValue } from "./initalFormValue";

const Form: React.FC = () => {
  return (
    <MainWrapper>
      <Header />
      <Formik
        initialValues={initalFormValue}
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
    </MainWrapper>
  );
};

const MainWrapper = styled.div``;

export default Form;
