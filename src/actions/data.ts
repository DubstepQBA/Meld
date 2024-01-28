"use server";

import { IRestaurant } from "@/type";

export async function getDataAction() {
  const response = await fetch(
    "https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json"
  );
  const result = (await response.json()) as Promise<IRestaurant[]>;
  return result;
}
