import { ItemEntity } from './../types';
import { Item } from "../types";
import { ItemResponse } from "../types";
import axios from "axios";

// item list
export const getItems = async (): Promise<ItemResponse[]> => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/items`);
  
  return response.data._embedded.items;
}

// item 등록
export const addItem = async (item: Item): Promise<ItemResponse> => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/items`, item);
  
  return response.data;
}

// item 수정
export const updateItem = async (ItemEntity: ItemEntity): Promise<ItemResponse> => {
  const response = await axios.put(ItemEntity.url, ItemEntity.item);

  return response.data;
}

// item 삭제
export const deleteItem = async (link: string): Promise<ItemResponse> => {
  const response = await axios.delete(link);
  
  return response.data;
}

