import { HTMLInputTypeAttribute, FC } from "react";

import {
  TextField as MuiTextField,
  styled,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import { Control, Controller, RegisterOptions } from "react-hook-form";

type TextFieldProps = {
  id: string;
  control: Control<any, any>;
  label?: string;
  type?: HTMLInputTypeAttribute;
  fullWidth?: boolean;
  error?: boolean;
  errorMessage?: string;
  required?: boolean;
  rules?: Omit<
    RegisterOptions<any, any>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
};

const TextField: FC<TextFieldProps> = ({
  id,
  label,
  type,
  control,
  rules,
  errorMessage,
  required = false,
  error = false,
  fullWidth = true,
}) => {
  const StyledTextField = styled(MuiTextField)<MuiTextFieldProps>({
    borderRadius: "4px",
  });

  const emailPattern = {
    value:
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: "E-mail inválido",
  };

  return (
    <Controller
      name={id}
      control={control}
      rules={{
        pattern: type === "email" ? emailPattern : undefined,
        required: required ? "Esse campo é obrigatório" : false,
        ...rules,
      }}
      render={({ field }) => (
        <StyledTextField
          id={id}
          variant="filled"
          error={error}
          helperText={errorMessage}
          label={label}
          type={type}
          fullWidth={fullWidth}
          {...field}
        />
      )}
    />
  );
};

export default TextField;
