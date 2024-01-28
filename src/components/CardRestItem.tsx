"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

import { IRestaurant } from "@/type";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  data: IRestaurant[];
}
const CardRestItem = ({ data }: Props) => {
  const [sort, setSort] = useState("");
  const [sortRest, setSortRest] = useState(data);

  const handleChange = (value: string) => {
    setSort(value);
    const _sortData = data;

    if (value === "rating") {
      return setSortRest(_sortData.sort((a, b) => b.rating - a.rating));
    }

    if (value === "alphabetically")
      return setSortRest(
        _sortData.sort(function (a, b) {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          return 0;
        })
      );

    setSortRest(_sortData);
  };

  const handlerOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { elements } = event.currentTarget;
    const input = elements.namedItem("cord") as HTMLInputElement;
    const cordenada = input.value.split(",");
    if (!input.value) return;
    const recomend = data.filter(
      (rest) =>
        rest.address.location.lat == Number(cordenada[0]) &&
        rest.address.location.lng == Number(cordenada[1])
    );
    setSortRest(recomend);
  };

  return (
    <div className="mt-10">
      <section className="flex flex-row justify-around items-center gap-2">
        <article>
          <Select value={sort} onValueChange={handleChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Order items by " />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">More rating</SelectItem>
              <SelectItem value="alphabetically">Alphabetically</SelectItem>
            </SelectContent>
          </Select>
        </article>

        <form onSubmit={handlerOnSubmit} className="flex justify-between gap-2">
          <Input
            type="text"
            placeholder="Cordenas  19.4400,-99.1270 "
            name="cord"
          />
          <Button type="submit">Buscar recomendacion</Button>
        </form>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {sortRest.map((rest) => (
          <Link
            key={rest.id}
            href={{
              pathname: "/restaurant",
              query: {
                name: rest.name,
                city: rest.address.city,
                street: rest.address.street,
                state: rest.address.state,
                lat: rest.address.location.lat,
                lng: rest.address.location.lng,
                site: rest.contact.site,
                email: rest.contact.email,
                phone: rest.contact.phone,
                rating: rest.rating,
              },
            }}
          >
            <Card className="hover:translate-x-2 cursor-pointer">
              <CardHeader>
                <CardTitle>{rest.name}</CardTitle>
                <CardDescription>{rest.contact.email}</CardDescription>
                <CardDescription>{rest.contact.phone}</CardDescription>
                <CardDescription>{rest.contact.site}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Address</p>
                <strong>
                  {rest.address.city},{" "}
                  <span>
                    {rest.address.street} , {rest.address.state}
                  </span>
                </strong>
              </CardContent>
              <CardFooter>
                <span className="text-lg">
                  {"★".repeat(rest.rating).padEnd(4, "☆")}
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardRestItem;
