import { ChangeEvent } from "react";
import { Car } from "../types";
import { DialogContent, TextField, Stack } from "@mui/material";

type DialogForProps = {
  car: Car;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void; // 그냥 input창에서 일어나는 거, getter가 아니라서 return타입은 void
}

// car는 객체, handleChange 는 함수.
function CarDialogContent({car, handleChange} : DialogForProps) {
  return(
    <>
      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField label="Brand" name="brand" value={car.brand} onChange={handleChange} />
          <TextField label="Model" name="model" value={car.model} onChange={handleChange} />
          <TextField label="Color" name="color" value={car.color} onChange={handleChange} />
          <TextField label="Reg.No" name="registrationNumber" value={car.registrationNumber} onChange={handleChange} />
          <TextField label="Year" name="modelYear" value={car.modelYear} onChange={handleChange} />
          <TextField label="Price" name="price" value={car.price} onChange={handleChange} />
        </Stack>
      </DialogContent>
    </>
  );  // return은 모달 폼
}

export default CarDialogContent;