import { useState } from "react";
import UploadModal from "../../Common/Modal";
import QuestionTypeDropdown from "../../Common/QuestionTypeDropdown";
import imageUpload from "../../../../assets/Images/Image_upload.svg";
import UploadFile from "../../Common/UploadFile";
import styled from "styled-components";
import EditQuestionInput from "../../Common/EditQuestionInput";
import { getValueFromFormikName } from "../../../helpers/question.helper";

interface QuestionHeaderProps {
  Field?: any;
  sectionIndex: number;
  questionIndex: number;
  handleChange: () => any;
  values: any;
  setFieldValue: any;
  questionType: any;
  questionArrayHelpers: any;
}

const QuestionHeader = ({
  sectionIndex = 0,
  questionIndex = 0,
  handleChange,
  values = {},
  setFieldValue,
  questionType,
  questionArrayHelpers,
}: QuestionHeaderProps) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const questionTitleFormikName: string = `items.${sectionIndex}.questionGroupItem.questions.${questionIndex}.title`;

  const questionTitleFormikValue: string =
    getValueFromFormikName(questionTitleFormikName, values) || "";

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <QuestionHeaderStyle>
      <EditQuestionInput
        handleChange={handleChange}
        width="calc(100% - 300px)"
        size="18px"
        fontWeight="400"
        padding="0 0 0 17px"
        height="59px"
        bgColor="#f2f2f2"
        name={questionTitleFormikName}
        value={questionTitleFormikValue}
      />
      <IconUploadFile
        onClick={() => setIsOpen(true)}
        src={imageUpload}
        alt={""}
        height="36px"
        width="36px"
      />
      <UploadModal
        children={<UploadFile />}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
      <DropDownList>
        <QuestionTypeDropdown
          questionIndex={questionIndex}
          values={values}
          setFieldValue={setFieldValue}
          questionType={questionType}
          questionArrayHelpers={questionArrayHelpers}
        />
      </DropDownList>
    </QuestionHeaderStyle>
  );
};

const QuestionHeaderStyle = styled.div`
  position: relative;
  display: flex;
  margin-top: 32px;
  height: 59px;
`;

const IconUploadFile = styled.img`
  margin: 10px 0 0 15px;
  cursor: pointer;
`;

const DropDownList = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export default QuestionHeader;
