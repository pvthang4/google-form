import { useFormikContext } from "formik";
import { FC, Fragment, MouseEventHandler, useEffect, useState } from "react";
import { InputStyled, LabelStyled, SliderStyled } from "./styled";

interface IToggleButtonProps {
  status?: boolean;
  setStatus?: any;
  onToggle?: any;
  name?: string;
  onClick?: MouseEventHandler;
  id?: any;
}

const ToggleButton: FC<IToggleButtonProps> = ({
  status,
  name,
  id,
  onToggle,
}) => {
  const { setFieldValue }: any = useFormikContext();
  const [isCheck, setIsCheck] = useState(status);
  const onClickToggleButton = async () => {
    setFieldValue(`${name}`, !isCheck);
    setIsCheck(!isCheck);
    if (onToggle) {
      onToggle();
    }
  };

  useEffect(() => {
    if (typeof status !== "undefined") {
      setIsCheck(status);
    }
  }, [status]);

  return (
    <Fragment>
      <LabelStyled>
        <InputStyled name={name} id={id} checked={isCheck} type="checkbox" />
        <SliderStyled onClick={onClickToggleButton} />
      </LabelStyled>
    </Fragment>
  );
};

export default ToggleButton;