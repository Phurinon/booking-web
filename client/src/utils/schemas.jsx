import { z } from "zod";

export const placeSchema = z.object({
  title: z.string().min(2, "Title is required"),
  price: z.coerce.number().min(1, "Price must be a positive number").min(0, "Price is required"),
  description: z.string().min(1, "Description is required").max(150, "Description must be less than 150 characters"),
  address: z.string().min(1, "Address is required"),
  lat: z.coerce.number(),
  lng: z.coerce.number(),
});