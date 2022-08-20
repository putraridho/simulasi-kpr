import { Box, Grid, Heading } from "@chakra-ui/react";

import type { NextPage } from "next";

import { PageContainer } from "@/components";
import { CostBreakdown, CalculatorForm } from "@/containers";

const HomePage: NextPage = () => (
  <>
    <Box bgColor="blue.700" color="white" py={4}>
      <PageContainer>
        <Heading as="h1" size={{ base: "lg", md: "xl" }}>
          Kalkulator Simulasi KPR
        </Heading>
      </PageContainer>
    </Box>
    <PageContainer py={8}>
      <Heading as="h2" size={{ base: "sm", md: "md" }} mb={8}>
        KPR Syariah / Suku Bunga Flat
      </Heading>
      <Grid gridTemplateColumns={{ md: "repeat(2, 1fr)" }} gap={8}>
        <CalculatorForm />
        <CostBreakdown />
      </Grid>
    </PageContainer>
  </>
);

export default HomePage;
