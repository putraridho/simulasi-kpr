import { Container, ContainerProps } from "@chakra-ui/react";

export function PageContainer(props: ContainerProps) {
  return (
    <Container
      maxW={{
        sm: "container.sm",
        md: "container.md",
        lg: "container.lg",
        xl: "container.xl",
      }}
      {...props}
    />
  );
}
