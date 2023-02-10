import { FieldArray } from "formik";
import EditQuestionInput from "../../Common/EditQuestionInput";
import QuestionFieldArray from "../QuestionFieldArray";
import styled from "styled-components";
import iconArrowDown from "../../../../assets/Icons/Icon_arrow_drop_dow.svg";
import { getValueFromFormikName } from "../../../helpers/question.helper";

const SectionFieldArray = ({ values, setFieldValue, handleChange }: any) => {
  const handleClickScroll = (e: any) => {
    const element: any = document.getElementById(e);
    if (element) {
      // element.scrollIntoView({ behavior: "smooth" });
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const renderSectionFieldArray = (sectionArrayHelpers: any) => {
    return (
      <FormContainer>
        {values?.items.map((section: any, sectionIndex: number) => {
          const sectionTitleFormikName: string = `items.${sectionIndex}.title`;
          const sectionDescriptionFormikName: string = `items.${sectionIndex}.description`;
          const sectionTitleFormikValue: string =
            getValueFromFormikName(sectionTitleFormikName, values) || "";
          const sectionDescriptionFormikValue: string =
            getValueFromFormikName(sectionDescriptionFormikName, values) || "";
          return (
            <Section key={section?.id} id={`sectionId-${sectionIndex}`}>
              <HeaderSection>
                <EditQuestionInput
                  name={sectionTitleFormikName}
                  value={sectionTitleFormikValue}
                  handleChange={handleChange}
                  size="32px"
                  fontWeight="700"
                  padding="0 0 10px 0"
                  height="50px"
                />
                <EditQuestionInput
                  name={sectionDescriptionFormikName}
                  value={sectionDescriptionFormikValue}
                  handleChange={handleChange}
                  size="14px"
                  fontWeight="400"
                  padding="0"
                  height="36px"
                />
              </HeaderSection>
              <BodySection>
                <FieldArray
                  name={`items.${sectionIndex}.questionGroupItem.questions`}
                  render={(questionArrayHelpers) => (
                    <QuestionFieldArray
                      questionArrayHelpers={questionArrayHelpers}
                      sectionArrayHelpers={sectionArrayHelpers}
                      values={values}
                      sectionIndex={sectionIndex}
                      section={section}
                      handleChange={handleChange}
                      setFieldValue={setFieldValue}
                    />
                  )}
                />
              </BodySection>
              {values?.items?.length > 1 ? (
                <FooterSection>
                  <TextFooter>{`セクション${sectionIndex + 1}以降`}</TextFooter>
                  <TextFooter>次のセクションに進む</TextFooter>
                  <ButtonScroll
                    type="image"
                    src={iconArrowDown}
                    onClick={() =>
                      handleClickScroll(`sectionId-${sectionIndex + 1}`)
                    }
                    alt={""}
                    width="24px"
                    height="24px"
                  />
                </FooterSection>
              ) : null}
            </Section>
          );
        })}
      </FormContainer>
    );
  };

  return <FieldArray name="items" render={renderSectionFieldArray} />;
};

const FormContainer: any = styled.div`
  position: relative;
  padding: 40px 0;
  margin-top: 183px;
  height: calc(100vh - 183px);
  overflow: auto;
`;

const Section = styled.div`
  margin: auto;
  padding-bottom: 64px;
  max-width: 770px;
`;

const HeaderSection = styled.div`
  width: 100%;
  height: 150px;
  background: #ffffff;
  border-radius: 8px;
  position: relative;
  padding: 30px 48px 19px 32px;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #dadce0;
  min-height: 136px;
  &:before {
    content: "";
    position: absolute;
    width: 10px;
    height: 140px;
    top: 4px;
    left: 6px;
    background: #00a0e9;
  }
`;

const BodySection = styled.div``;

const FooterSection = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  height: 22px;
  margin: 10px 0 0 0;
`;

const TextFooter = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const ButtonScroll = styled.input``;

export default SectionFieldArray;
