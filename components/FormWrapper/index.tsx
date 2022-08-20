import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormControlProps,
} from "@chakra-ui/react";

export interface FormWrapperProps extends FormControlProps {
  label?: string;
  helper?: string;
  children: React.ReactNode;
}

export function FormWrapper({
  label,
  helper,
  children,
  ...props
}: FormWrapperProps) {
  return (
    <FormControl {...props}>
      {label && (
        <FormLabel fontSize={{ base: "sm", md: "md" }}>{label}</FormLabel>
      )}
      {children}
      {helper && <FormHelperText>{helper}</FormHelperText>}
    </FormControl>
  );
}
