import axios from "axios";
import { CarResponse, Car } from "../types";

export const getCars = async (): Promise<CarResponse[]> => {
  // env 파일에 작성해둔 URL 불러오는 방법 -> get(`${import.meta.env.VITE_API_URL}/api/cars`)
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/cars`);

  // 내부 배열만 가져오는 것
  return response.data._embedded.cars;
};

export const deleteCar = async (link: string) : Promise<CarResponse> => {
  const response = await axios.delete(link);
  return response.data;
}

// 프론트엔드에서 요청 보내서 벡앤드로 넘어가서 db에 저장. db->백엔드->프론트로 나올땐 id 값이랑 등등이 같이 나와야하기때문에 보낼 때는 Car 지만 돌아올 때는 CarResponse.
export const addCar = async (car: Car) : Promise<CarResponse> => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/cars`, car, {
    headers:{
      'Content-Type': 'application/json',
    },
  });

  return response.data;
}