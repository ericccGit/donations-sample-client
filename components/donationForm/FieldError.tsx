import { FieldMetaState } from "react-final-form";
import { ErrorMsg } from "./styled";

type Props = FieldMetaState<string>

const generateErrDisplay = (hasError : boolean, error: string) => (
    <ErrorMsg isVisible={hasError}>{hasError ? error : "-"}</ErrorMsg>
  );

export const FieldError : React.FC<Props> = ({ error, active, touched } : Props) => {
    const hasError = !!(touched && !active && !!error);
    return generateErrDisplay(hasError, error);
  };

  