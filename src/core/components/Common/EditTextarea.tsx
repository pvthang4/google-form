import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const EditTextarea = ({
  target,
  size,
  fontWeight,
  padding,
  height,
  value,
  placeholder,
  handleOnChangeQuestion,
  addNewOption = () => {},
  setIsFocused,
  name,
  handleChange,
}: any) => {
  const textareaRef: any = useRef(null);
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    setTextValue(value);
  }, [value]);

  useEffect(() => {
    if (textareaRef) {
      textareaRef.current.style.height = size;
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
      fontWeight={fontWeight}
      padding={padding}
      height={height}
      value={textValue}
      placeholder={placeholder}
      onKeyDown={(e: any) => handleKeyDown(e.key)}
      onChange={handleChange}
      onFocus={() => setIsFocused(true)}
      onBlur={(e: any) => handleOnBlur(e)}
      name={name}
      disabled={textValue === "Other..."}
    />
  );
};

const FormInputTextarea: any = styled.input`
  resize: none;
  height: ${(props: any) => {
    return props.height;
  }} !important;
  font-size: ${(props: any) => props.size};
  font-family: "Roboto";
  font-style: normal;
  font-weight: ${(props: any) => {
    return props.fontWeight;
  }};
  line-height: 48px;
  display: flex;
  align-items: center;
  color: ${(props: any) => {
    return props.value === "Other..." ? "#70757a" : "#3c3b47";
  }};
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
  padding: ${(props: any) => {
    return props.padding;
  }};
`;

export default EditTextarea;
