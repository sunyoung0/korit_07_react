import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";
import { Car } from "../types";
import { ChangeEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCar } from "../api/carapi";
import CarDialogContent from "./CarDialogContent";

function AddCar() {

  const [ open, setOpen ] = useState(false);
  const [ car, setCar ] = useState<Car>({
    brand: '',
    model: '',
    color: '',
    registrationNumber: '',
    modelYear: 0,
    price: 0
  });

  const handleClickOpen = () => setOpen(true);

  const handleClickClose = () => setOpen(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCar({...car, [event.target.name]: event.target.value});
  }

  const queryClient = useQueryClient();

  const { mutate } = useMutation(addCar, {
    onSuccess: () => {
      queryClient.invalidateQueries(["cars"]);
    },
    onError: err => {
      console.log(err);
    },
  });

  // 저장하고 닫음
  const handleSave = () => {
    // 혼자 작성해본 빈칸 입력시 입력 금지 로직
    // if (!car.brand.trim() || !car.model.trim() || !car.color.trim() || !car.registrationNumber.trim() || !car.modelYear || !car.price) {
    //   confirm("빈칸은 입력할 수 없습니다.");
    //   return;
    // }
    mutate(car);  // 저장하고 갱신까지 됨
    setCar({
      brand: '',
      model: '',
      color: '',
      registrationNumber: '',
      modelYear: 0,
      price: 0
    });
    handleClickClose();
  }

  return(
    <>
      <Button onClick={handleClickOpen} variant="outlined">New Car</Button>
      <Dialog open={open}>
        <DialogTitle>New Car</DialogTitle>
          <CarDialogContent car={car} handleChange={handleChange} />    {/* car={car}에서 car는  CarDialogContent의 car / {car} 객체 형태의 car는 위의 상태의 car */}
        <DialogActions>
          <Button onClick={handleClickClose}>Cancel | 취소</Button>
          <Button onClick={handleSave}>Save | 저장</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddCar;