import React from "react";
import { useNavigate } from "react-router-dom";

// Blog Card Component
const BlogCard = ({
  image,
  title,
  level,
  description,
  readMoreLink,
  onReadMoreClick,
}) => {
  return (
    <div className="bg-[#000000] overflow-hidden w-[421px] h-[597px] rounded-[15px] relative font-afacad">
      <img
        src={image || "/api/placeholder/400/250"}
        alt={title}
        className="absolute"
        style={{
          width: "373px",
          height: "210px",
          top: "30px",
          left: "23px",
          objectFit: "cover",
        }}
      />
      <div className="p-6 pt-[260px]">
        <h3
          className="mb-2"
          style={{
            color: "#DFB6B2",
            fontSize: "30px",
            fontFamily: "Afacad, sans-serif",
          }}
        >
          {title}
        </h3>
        {level && (
          <p
            className="mb-2"
            style={{
              color: "#DFB6B2",
              fontSize: "30px",
              fontFamily: "Afacad, sans-serif",
            }}
          >
            {level}
          </p>
        )}
        <p
          className="mb-4"
          style={{
            color: "rgba(251, 229, 216, 0.68)",
            fontSize: "18px",
            fontFamily: "Afacad, sans-serif",
          }}
        >
          {description}
        </p>
        <span
          onClick={onReadMoreClick}
          className="inline-block font-semibold"
          style={{
            background:
              "linear-gradient(90deg, #532959 0%, #824D69 50%, #DFB6B2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            MozBackgroundClip: "text",
            MozTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          Read More
        </span>
      </div>
    </div>
  );
};

// Main Blog Page Component
const TempBlogsPage = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      image: "/1.png",
      title: "Melody (Esa Diva) Level: A2-B1",
      description:
        "Español : Qué os parece la canción que envía España este año a Eurovisión? A mí no me va tanto el festival, pero cuando hay algo de calidad, apetece escucharlo  Aquí os dejo el videoclip de Melody y un par de ejercicios para que practiquéis vocabulario. Ya me decís qué os parece Buena semana, valientes!",
      onReadMoreClick: () => navigate("/blogs/blog-detail"),
    },
    {
      image: "/2.png",
      title: "Práctica de Condicionales con Rap (Level B2-C1)",
      description:
        "Aquí os dejo una canción de rap del cantante Juancho Marqués y unos ejercicios de español avanzado para valientes...",
    },
    {
      image: "/3.png",
      title: "Apagón eléctrico en España (Multilevel)",
      description:
        "Hace un tiempo hubo un apagón eléctrico en España sin precedentes. Aún no se saben las causas...",
    },
    {
      image: "/4.png",
      title: "Elige tres palabras o expresiones de la lista...",
      description:
        "¡Os paso un clásico entre los clásicos para empezar la semana! la lucha de este par de estudiantes...",
    },
    {
      image: "/5.png",
      title: "Definite and indefinite articles in Spanish",
      description:
        "When to use definite and indefinite articles in Spanish? Sometimes they are mandatory, sometimes not...",
    },
    {
      image: "/6.png",
      title: "Parts of the body in Spanish: vocabulary",
      description:
        "Talking about the parts of the body in Spanish becomes easier when you have the right vocabulary...",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#180018]">
      <div className="main-container">
        <div className="text-center my-16">
          <h1 className="text-[70px] md:text-5xl font-bold text-white mb-4">
            Blogs
          </h1>
          <p className="text-[#FBE5D8] text-[25px] max-w-8xl mx-auto px-4 mt-12 font-afacad whitespace-nowrap">
            Read more about latest news from Expanish destinations, or get tips
            on how to prepare to study Spanish at our language schools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              title={post.title}
              description={post.description}
              onReadMoreClick={
                post.onReadMoreClick || (() => alert("Read more coming soon!"))
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TempBlogsPage;
