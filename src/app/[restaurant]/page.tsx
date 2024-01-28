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
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";
import { MapContainer, TileLayer } from "react-leaflet";
import { Globe, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Page({
  searchParams,
}: {
  searchParams: {
    name: string;
    city: string;
    street: string;
    state: string;
    lat: number;
    lng: number;
    site: string;
    email: string;
    phone: string;
    rating: number;
  };
}) {
  const { name, city, street, state, lat, lng, site, email, phone, rating } =
    searchParams;

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-1 gap-4">
        <Card className="max-w-sm h-[380px]">
          <CardHeader>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{`${city}, ${street}, ${state}`}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-start justify-start gap-2">
              <h2 className="text-lg font-bold">Contact</h2>

              <div className="flex space-x-2">
                <Mail />
                <p>{email}</p>
              </div>
              <div className="flex space-x-2">
                <Phone />
                <p>{phone}</p>
              </div>
              <div className="flex space-x-2">
                <Globe />
                <Link href={site}>{site}</Link>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-col justify-start items-start gap-3">
              <span className="text-lg">
                {"★".repeat(rating).padEnd(4, "☆")}
              </span>

              <div className="space-x-2 mt-2">
                <p>Social Share - Restaurant</p>
                <FacebookShareButton url={location.href}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>

                <LinkedinShareButton url={location.href}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
              </div>
            </div>
          </CardFooter>
        </Card>

        <div className="max-w-sm h-[350px]">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      </div>
    </>
  );
}
