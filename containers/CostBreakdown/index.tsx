import { Divider, VStack } from "@chakra-ui/react";
import { useMemo } from "react";

import { parseToCurrency } from "@/helper";
import { TextLabel } from "@/components";
import { useStore } from "@/hooks";

export interface CostBreakdownProps {}

const ADMIN_FEE = 50000;
const TRANSFER_FEE_CONSTANT = 500000;

export function CostBreakdown(): React.ReactElement {
  const {
    calculator: { housePrice, dpRupiah, interest, tenor, njoptkp },
  } = useStore();

  const priceNumber = useMemo<number>(() => +(housePrice || 0), [housePrice]);

  const dpRupiahNumber = useMemo<number>(() => +(dpRupiah || 0), [dpRupiah]);

  const interestNumber = useMemo<number>(() => +(interest || 0), [interest]);

  const NJOPTKP = useMemo<number>(() => +(njoptkp || 20000000), [njoptkp]);

  const monthlyInterest = useMemo<number>(
    () => interestNumber / 12,
    [interestNumber],
  );

  const plafond = useMemo<number>(
    () => priceNumber - dpRupiahNumber,
    [dpRupiahNumber, priceNumber],
  );

  const provisionFee = useMemo<number>(() => plafond / 100, [plafond]);

  const BPHTB = useMemo<number>(
    () => (priceNumber ? (5 / 100) * (priceNumber - NJOPTKP) : 0),
    [NJOPTKP, priceNumber],
  );

  const PNBP = useMemo<number>(
    () => (priceNumber ? (1 / 1000) * priceNumber + ADMIN_FEE : 0),
    [priceNumber],
  );

  const BBN = useMemo<number>(
    () => (priceNumber ? priceNumber / 100 + TRANSFER_FEE_CONSTANT : 0),
    [priceNumber],
  );

  const monthlyInstallment = useMemo<number>(() => {
    const a = plafond * (monthlyInterest / 100);
    const b = 1 - (1 + monthlyInterest / 100) ** -(tenor * 12);

    return plafond ? a / b : 0;
  }, [monthlyInterest, plafond, tenor]);

  const totalLoanAndInterest = useMemo<number>(
    () => monthlyInstallment * tenor * 12,
    [monthlyInstallment, tenor],
  );

  const totalInterest = useMemo<number>(
    () => totalLoanAndInterest - plafond,
    [plafond, totalLoanAndInterest],
  );

  return (
    <VStack
      alignItems="flex-start"
      spacing={{ base: 4, md: 8 }}
      px={{ base: 4, md: 8 }}
      py={{ base: 4, md: 6 }}
      bgColor="blue.50"
      borderRadius={8}
      borderWidth={1}
      borderColor="blue.200"
    >
      <TextLabel label="Plafond pinjaman">{parseToCurrency(plafond)}</TextLabel>
      <TextLabel label="Cicilan per bulan">
        {parseToCurrency(monthlyInstallment)}
      </TextLabel>
      <TextLabel label="Total pinjaman &amp; bunga">
        {parseToCurrency(totalLoanAndInterest)}
      </TextLabel>
      <TextLabel label="Total bunga">
        {parseToCurrency(totalInterest)}
      </TextLabel>
      <Divider />
      <TextLabel label="Uang muka (DP)">
        {parseToCurrency(dpRupiahNumber)}
      </TextLabel>
      <TextLabel label="Biaya provisi ke bank">
        {parseToCurrency(provisionFee)}
      </TextLabel>
      <TextLabel label="Pajak pembelian rumah (BPHTB)">
        {parseToCurrency(BPHTB)}
      </TextLabel>
      <TextLabel label="Penerimaan negara bukan pajak">
        {parseToCurrency(PNBP)}
      </TextLabel>
      <TextLabel label="Biaya balik nama">{parseToCurrency(BBN)}</TextLabel>
      <Divider />
      <TextLabel label="Biaya total untuk membeli rumah">
        {parseToCurrency(dpRupiahNumber + provisionFee + BPHTB + PNBP + BBN)}
      </TextLabel>
    </VStack>
  );
}
