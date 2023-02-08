import { useState } from "react";
import UploadModal from "../../Common/Modal";
import QuestionTypeDropdown from "../../Common/QuestionTypeDropdown";
import imageUpload from "../../../../assets/Images/Image_upload.svg";
import UploadFile from "../../Common/UploadFile";

interface QuestionHeaderProps {
  Field: any;
  sectionIndex: number;
  questionIndex: number;
  handleChange: () => any;
  values: any;
  setFieldValue: any;
  questionType: any;
}

const QuestionHeader = ({
  Field,
  sectionIndex = 0,
  questionIndex = 0,
  handleChange,
  values = {},
  setFieldValue,
  questionType,
}: QuestionHeaderProps) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="question__header">
      <Field
        type="text"
        placeholder="Question"
        className="question__input"
        name={`sections.${sectionIndex}.questions.${questionIndex}.question__title`}
        onChange={handleChange}
      />
      <input
        type="image"
        onClick={() => setIsOpen(true)}
        src={imageUpload}
        alt="picture"
      />

      <UploadModal
        children={<UploadFile />}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
      <QuestionTypeDropdown
        sectionIndex={sectionIndex}
        questionIndex={questionIndex}
        values={values}
        setFieldValue={setFieldValue}
        questionType={questionType}
      />
    </div>
  );
};
export default QuestionHeader;
