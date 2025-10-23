import { Item } from "../App";
import { ItemResponse } from "../types";
import axios from "axios";

export const getItems = async (): Promise<ItemResponse[]> => {
  const response = await axios.get('http://localhost:8080/shopping');
  
  return response.data;
}

export const addItem = async (item: Item): Promise<ItemResponse> => {
  const response = await axios.post('http://localhost:8080/shopping', item);
  
  return response.data;
}