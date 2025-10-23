import axios, { AxiosRequestConfig } from "axios";
import { CarResponse, Car, CarEntity } from "../types";

const getAxiosConfig = (): AxiosRequestConfig => {
  const token = sessionStorage.getItem("jwt")?.replace("Bearer ", "");

  return {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  };
};

export const getCars = async (): Promise<CarResponse[]> => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/api/cars`, getAxiosConfig()
  ); // getAxiosConfig() 결과값을 넣어줌. return값이 호출

  return response.data._embedded.cars;
};

export const deleteCar = async (link: string): Promise<CarResponse> => {
  const response = await axios.delete(link, getAxiosConfig());
  return response.data;
};

// 프론트엔드에서 요청 보내서 벡앤드로 넘어가서 db에 저장. db->백엔드->프론트로 나올땐 id 값이랑 등등이 같이 나와야하기때문에 보낼 때는 Car 지만 돌아올 때는 CarResponse.
export const addCar = async (car: Car): Promise<CarResponse> => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/cars`, car, getAxiosConfig());

  return response.data;
};

export const updateCar = async (carEntity: CarEntity): Promise<CarResponse> => {
  const response = await axios.put(carEntity.url, carEntity.car, getAxiosConfig());

  return response.data;
};
