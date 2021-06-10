import React, {useEffect} from "react";
import { FieldRenderProps, Field } from "react-final-form";
import { FieldError } from "./FieldError";
import { FieldLabel, FormItemCtr } from "./styled";

type Props = FieldRenderProps<string, any>;

//If a max-length property is specifed, the regex will not work properly without this
const DEFAULT_MAX_LEN = 16;

//Input component for restricting the user's inputs to a decimal 
const DecimalInput : React.FC<Props> = ({type, input, meta, ...rest  }: Props ) => {
    const baseLen = rest.maxLength || DEFAULT_MAX_LEN;
    const decimalRegex = [new RegExp(`^\\d{0,${baseLen}}(\\.\\d{0,2})?$`)];
    useEffect(() => {
      if (!!input.value && !isNaN(Number(input.value)) && !meta.active) {
        input.onChange(Number(input.value).toFixed(2));
      }
    }, [input, input.value, meta.active]);
  
    return (
        <FormItemCtr>
        <FieldLabel isActive={!!meta.active}>
          {rest.required && "* "}
          {rest.label}
        </FieldLabel>
        <input
          {...input}
          type={type}
          autoComplete={"off"}
          placeholder="xx.xx"
          //{...inputProps}
          {...rest}
          onChange={({ target: { value } }) => {
            for (let regex of decimalRegex) {
              if (regex.test(value)) {
                input.onChange(value);
              }
            }
          }}
        />
        <FieldError {...meta}/>
        </FormItemCtr>
    );
  };

  export default DecimalInput;