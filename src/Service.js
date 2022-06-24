import React from "react";
import Card from "./Card";

let cardData = [
  {
    cardTitle: "cardTitle1",
    imageUrl:
      "https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    cardTitle: "cardTitle2",
    imageUrl:
      "https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    cardTitle: "cardTitle3",
    imageUrl:
      "https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    cardTitle: "cardTitle4",
    imageUrl:
      "https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

export default function Service() {
  return (
    <section className="contact bg-success">
      <div className="container">
        <h2 className="text-white">We love Guvi</h2>
        <div className="row">
          {cardData.map((value) => {
            return (
              <div className="col-4">
                <Card cardTitle={value.cardTitle} imageUrl={value.imageUrl} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
