import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const EditTextarea = ({
  target,
  size,
  value,
  placeholder,
  handleOnChangeQuestion,
  addNewOption = () => {},
  setIsFocused,
}: any) => {
  const textareaRef: any = useRef(null);
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    setTextValue(value);
  }, [value]);

  const textareaHeight = (size: any) => {
    switch (size) {
      case "large":
        return "50px";
      case "medium":
        return "21px";
      case "small":
        return "12px";
      case "extrasmall":
        return "10px";
      default:
        return "12px";
    }
  };

  useEffect(() => {
    if (textareaRef) {
      textareaRef.current.style.height = textareaHeight(size);
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [textValue, size]);

  const handleOnBlur = (e: any) => {
    setIsFocused(false);

    // [Processing additional case of form-title]
    // When the title is default-title and user onBlurs input after deleting the default-title,
    // the problem was that since redux holds the same value -> it does not recognize as an update
    // - (Since there is no change in the state/props)
    // So -> manually setting the textvalue for this case.
    if (target === "title" && value === "No Named Form" && textValue === "") {
      return setTextValue(value);
    }

    // Check if text-value has changed
    // If changed -> fire handleOnChangeQuestion
    if (value !== textValue) {
      return handleOnChangeQuestion(target, textValue);
    }
  };

  // Clear entry with Escape Key
  const handleKeyDown = (key: any) => {
    console.log(target);
    console.log(key);
    // ESC Key Press to clear out field
    if (key === "Escape") {
      setTextValue("");
    }

    // Tab Key Press (for option item) to add new option
    if (key === "Tab" && target === "label") {
      addNewOption(key);
    }
  };

  return (
    <FormInputTextarea
      ref={textareaRef}
      size={size}
      value={textValue}
      placeholder={placeholder}
      onKeyDown={(e: any) => handleKeyDown(e.key)}
      onChange={(e: any) => setTextValue(e.target.value)}
      onFocus={(e: any) => setIsFocused(true)}
      onBlur={(e: any) => handleOnBlur(e)}
    />
  );
};

const FormInputTextarea: any = styled.textarea`
  resize: none;
  font-size: ${(props: any) => {
    switch (props.size) {
      case "large":
        return "32px";
      case "medium":
        return "16px";
      case "small":
        return "14px";
      default:
        return "12px";
    }
  }};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  display: flex;
  align-items: center;
  color: #3c3b47;
  font-weight: 400;
  letter-spacing: 0.2px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-y: visible;
  overflow-x: hidden;
  background-color: transparent;
  outline: none;
`;

export default EditTextarea;
