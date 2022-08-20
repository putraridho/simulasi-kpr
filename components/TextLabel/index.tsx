import { Heading, Text, VStack } from "@chakra-ui/react";

export interface TextLabelProps {
  label: string;
  children: React.ReactNode;
}

export function TextLabel({ label, children }: TextLabelProps) {
  return (
    <VStack spacing={1} alignItems="flex-start">
      <Heading as="h3" size={{ base: "xs", md: "sm" }}>
        {label}
      </Heading>
      <Text color="blackAlpha.700" fontSize={{ base: "xs", md: "sm" }}>
        {children}
      </Text>
    </VStack>
  );
}
