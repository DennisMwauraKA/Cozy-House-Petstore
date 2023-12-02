import React from "react";
import Card from "@mui/material/Card";
import fluffy from "../assets/gallery/fluffy.png";
import cute from "../assets/gallery/cute-dog.png";
import german from "../assets/gallery/german.png";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
function CardDetails() {
  const petNames = [
    {
      id: 1,
      title: "Katrin",
      image: fluffy,
      description:
        "Katrin, a spunky Terrier mix, is ready to bring a burst of energy and laughter into your life. At one year old, he's the perfect mix of playfulness and curiosity. Rocky loves exploring, and his expressive eyes are always on the lookout for the next adventure. If you're looking for a small dog with a big personality, Rocky might be your perfect match.",
    },
    {
      id: 2,
      title: "Woody",
      image: cute,
      description:
        "Woody, a gentle three-year-old mixed breed, is as adaptable as they come. She enjoys leisurely walks, lounging in the sun, and, most of all, being by your side. Luna has a calm demeanor and gets along well with other dogs, making her a great fit for a variety of households. Bring this easygoing girl home, and you'll have a friend for life.",
    },
    {
      id: 3,
      title: "Lex",
      image: german,
      description:
        "Lex, a sweet-natured Great Dane, is searching for a forever home where she can be the queen of the castle. Despite her imposing size, Sadie is a gentle giant who adores cuddling on the couch. At five years old, she's past the puppy stage and is well-behaved, making her the perfect companion for someone seeking a loyal and calm presence",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row w-full gap-4 mb-10">
      {petNames.map((pet) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 350 }} image={pet.image} />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              {pet.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {pet.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default CardDetails;
