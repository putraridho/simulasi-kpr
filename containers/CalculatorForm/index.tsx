import { range } from "@/helper";
import {
  Grid,
  GridItem,
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightAddon,
  Select,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { FormWrapper } from "@/components";
import {
  setHousePrice,
  setDp,
  setDpRupiah,
  setInterest,
  setTenor,
  setNjoptkp,
} from "@/features";
import { useStore } from "@/hooks";

export function CalculatorForm() {
  const {
    calculator: { housePrice, dp, dpRupiah, interest, tenor, njoptkp },
  } = useStore();
  const dispatch = useDispatch();

  return (
    <Grid
      gridTemplateColumns={{ md: "repeat(4, 1fr)" }}
      gap={4}
      alignSelf="flex-start"
    >
      <GridItem colSpan={{ md: 4 }}>
        <FormWrapper label="Harga rumah">
          <InputGroup>
            <InputLeftAddon>Rp.</InputLeftAddon>
            <Input
              type="number"
              value={housePrice}
              min={0}
              onChange={(e) => dispatch(setHousePrice(e.target.value))}
            />
          </InputGroup>
        </FormWrapper>
      </GridItem>
      <GridItem>
        <FormWrapper label="DP (%)" isDisabled={!housePrice}>
          <InputGroup>
            <Input
              type="number"
              value={dp}
              onChange={(e) => dispatch(setDp(e.target.value))}
              pattern="^\d{2}(\.+\d)?$"
            />
            <InputRightAddon>%</InputRightAddon>
          </InputGroup>
        </FormWrapper>
      </GridItem>
      <GridItem colSpan={{ md: 3 }}>
        <FormWrapper label="DP (Rp)" isDisabled={!housePrice}>
          <InputGroup>
            <InputLeftAddon>Rp.</InputLeftAddon>
            <Input
              type="number"
              value={dpRupiah}
              onChange={(e) => dispatch(setDpRupiah(e.target.value))}
              pattern="^\d*+(\.+\d)?$"
            />
          </InputGroup>
        </FormWrapper>
      </GridItem>
      <GridItem>
        <FormWrapper label="Suku bunga" isDisabled={!housePrice}>
          <InputGroup>
            <Input
              type="number"
              value={interest}
              onChange={(e) => dispatch(setInterest(e.target.value))}
              pattern="^\d{2}(\.+\d)?$"
            />
            <InputRightAddon>%</InputRightAddon>
          </InputGroup>
        </FormWrapper>
      </GridItem>
      <GridItem colSpan={{ md: 3 }}>
        <FormWrapper label="NJOPTKP" isDisabled={!housePrice}>
          <InputGroup>
            <InputLeftAddon>Rp.</InputLeftAddon>
            <Input
              type="number"
              value={njoptkp}
              onChange={(e) => dispatch(setNjoptkp(e.target.value))}
              pattern="^\d*+(\.+\d)?$"
            />
          </InputGroup>
        </FormWrapper>
      </GridItem>
      <GridItem colSpan={{ md: 4 }}>
        <FormWrapper label="Tenor" isDisabled={!housePrice}>
          <Select
            value={tenor}
            onChange={(e) => dispatch(setTenor(e.target.value))}
          >
            {range(1, 20).map((num) => (
              <option key={num} value={num}>
                {num} tahun
              </option>
            ))}
          </Select>
        </FormWrapper>
      </GridItem>
    </Grid>
  );
}
