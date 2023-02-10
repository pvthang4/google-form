import imageCloudUpload from "../../../assets/Images/Image_cloud_upload.svg";
import styled from "styled-components";
import { useRef, useState } from "react";

const UploadFile = () => {
  const [dragActive, setDragActive] = useState(false);
  // ref
  const inputRef: any = useRef(null);

  // handle drag events
  const handleDrag = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e: any) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <Modal>
      <ModalHeader>
        <TextHeader>画像の挿入</TextHeader>
      </ModalHeader>
      <ModalBody>
        <UploadForm
          onDragEnter={handleDrag}
          onSubmit={(e) => e.preventDefault()}
        >
          <UploadInput
            ref={inputRef}
            type="file"
            multiple={true}
            onChange={handleChange}
          />
          <Label className={dragActive ? "drag-active" : ""}>
            <ButtonGroup>
              <img
                src={imageCloudUpload}
                alt={""}
                width="250px"
                height="250px"
              />
              <UploadButton onClick={onButtonClick}>参照</UploadButton>
            </ButtonGroup>
          </Label>
          {dragActive && (
            <DrapBlock
              id="drag-file-element"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            ></DrapBlock>
          )}
        </UploadForm>
      </ModalBody>
      <ModalFooter>または、ここにファイルをドラッグしてください</ModalFooter>
    </Modal>
  );
};

const Modal = styled.div``;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 120px;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.01);
  box-shadow: inset 0px -2px 0px #00a0e9;
`;

const TextHeader = styled.p`
  width: 120px;
  height: 32px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #3c3b47;
`;

const ModalBody = styled.div`
  text-align: center;
`;

const UploadForm = styled.form`
  max-width: 100%;
  text-align: center;
  position: relative;
`;

const UploadInput = styled.input`
  display: none;
`;

const Label = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 82px;
`;

const UploadButton = styled.button`
  border: 0;
  cursor: pointer;
  margin: 19px 0 59px 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 40px;
  gap: 10px;
  background: #00a0e9;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #ffffff;
  height: 48px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  & hover: {
    text-decoration-line: underline;
  }
`;

const DrapBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const ButtonGroup = styled.div``;

const ModalFooter = styled.p`
  text-align: center;
  height: 77px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: #3c3b47;
`;

export default UploadFile;
