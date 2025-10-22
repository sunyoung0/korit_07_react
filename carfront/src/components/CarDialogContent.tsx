import { ChangeEvent } from "react";
import { Car } from "../types";
import { DialogContent } from "@mui/material";

type DialogForProps = {
  car: Car;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void; // 그냥 input창에서 일어나는 거, getter가 아니라서 return타입은 void
}

// car는 객체, handleChange 는 함수.
function CarDialogContent({car, handleChange} : DialogForProps) {
  return(
    <>
      <DialogContent>
        <input type="text" name="brand" value={car.brand} placeholder="Brand" onChange={handleChange} /><br />
        <input type="text" name="model" value={car.model} placeholder="Model" onChange={handleChange} /><br />
        <input type="text" name="color" value={car.color} placeholder="Color" onChange={handleChange} /><br />
        <input type="text" name="registrationNumber" value={car.registrationNumber} placeholder="Reg.No" onChange={handleChange} /><br />
        <input type="text" name="modelYear" value={car.modelYear} placeholder="Year" onChange={handleChange} /><br />
        <input type="text" name="price" value={car.price} placeholder="Price" onChange={handleChange} /><br />
      </DialogContent>
    </>
  );  // return은 모달 폼
}

export default CarDialogContent;