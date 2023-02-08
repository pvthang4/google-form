import { Fragment, useState } from "react";
import {
  MdShortText,
  MdSubject,
  MdRadioButtonChecked,
  MdCheckBox,
  MdArrowDropDown,
  MdArrowDropDownCircle,
} from "react-icons/md";
import { QuestionType } from "../../enums";
import { handleType } from "../../helpers/question.helper";
import {
  DropdownList,
  DropdownListHorizontalLine,
  DropdownListItem,
  DropdownListItemContent,
  DropdownWrapper,
} from "./styled";

const QuestionTypeDropdown = ({
  questionType = QuestionType.MULTIPLE_CHOICE,
  sectionIndex = 0,
  questionIndex = 0,
  values = {},
  setFieldValue,
}: any) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [typeActive, setTypeActive] = useState<string>(questionType);

  const questionTypeList = [
    {
      type: QuestionType.SHORT_ANSWER,
      label: "Short answer",
    },
    {
      type: QuestionType.PARAGRAPH,
      label: "Long answer",
    },
    {
      type: QuestionType.MULTIPLE_CHOICE,
      label: "Multiple Choice",
    },
    {
      type: QuestionType.CHECK_BOX,
      label: "Checkbox",
    },
    {
      type: QuestionType.DROP_DOWN_MENU,
      label: "Select",
    },
  ];

  const getTypeLabel = (type: any) => {
    const filtered = questionTypeList.filter((item) => item.type === type);
    return filtered[0]?.label;
  };

  const handleOnClickItem = (val: any) => {
    setIsDropdownOpen(false);
    setTypeActive(val);
    const e = {
      target: {
        value: val,
      },
    };
    handleType(e, sectionIndex, questionIndex, values, setFieldValue);
  };

  const selectedTypeIcon = (type: any) => {
    switch (type) {
      case QuestionType.SHORT_ANSWER:
        return <MdShortText size="1.7em" />;
      case QuestionType.PARAGRAPH:
        return <MdSubject size="1.7em" />;
      case QuestionType.MULTIPLE_CHOICE:
        return <MdRadioButtonChecked size="1.7em" />;
      case QuestionType.CHECK_BOX:
        return <MdCheckBox size="1.7em" />;
      case QuestionType.DROP_DOWN_MENU:
        return <MdArrowDropDownCircle size="1.7em" />;
      default:
        return;
    }
  };

  return (
    <DropdownWrapper>
      {/* Selected Question Type */}
      <DropdownListItem
        onClick={() => {
          setIsDropdownOpen(!isDropdownOpen);
        }}
      >
        <DropdownListItemContent>
          {selectedTypeIcon(typeActive)}
          <span>{getTypeLabel(typeActive)}</span>
        </DropdownListItemContent>
        <MdArrowDropDown size="1.7em" />
      </DropdownListItem>

      {/* Question Type Dropdown List */}
      {isDropdownOpen && (
        <DropdownList>
          {questionTypeList?.map(({ type, label }, index: number) => {
            if (index === 2) {
              return (
                <Fragment key={index}>
                  <DropdownListHorizontalLine />
                  <DropdownListItem
                    isListOpen={isDropdownOpen}
                    isSelected={typeActive === type}
                    onClick={() => handleOnClickItem(type)}
                  >
                    <DropdownListItemContent>
                      {selectedTypeIcon(type)}
                      <span>{label}</span>
                    </DropdownListItemContent>
                  </DropdownListItem>
                </Fragment>
              );
            } else {
              return (
                <DropdownListItem
                  key={index}
                  isListOpen={isDropdownOpen}
                  isSelected={typeActive === type}
                  onClick={() => handleOnClickItem(type)}
                >
                  <DropdownListItemContent>
                    {selectedTypeIcon(type)}
                    <span>{label}</span>
                  </DropdownListItemContent>
                </DropdownListItem>
              );
            }
          })}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

export default QuestionTypeDropdown;
