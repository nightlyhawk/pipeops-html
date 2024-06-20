import React, { useState, useEffect } from "react";
import "./Testimonial.css";

const TestimonialCard = ({
  text,
  author,
  isActive,
  body,
  source,
  authorImage,
}) => {
  return (
    <div
      className={`p-6 flex-shrink-0 testBox transition-transform duration-500 ${
        isActive ? "bg-customPurple  text-white" : "bg-gray-100 text-black"
      }`}
      style={{
        width: "45%",
        margin: "2% 1.25% 2% 1.25%",
      }} // Adjusted width and max-width
    >
      <svg
        className={`w-6 h-6 float-right mb-4 ${
          isActive ? "active" : "not-active"
        }`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z"
          clip-rule="evenodd"
        />
      </svg>

      <p className="text-lg font-semibold testHead">{text}</p>
      <p className="testBody">{body}</p>
      <div className="flexCont">
        <div className="flx-1">
          <p className="testAuth font-bold">{author}</p>
          <span className="testSrc">{source}</span>
        </div>
        <div className="flx-1">
          <img src={authorImage} className="testImage" alt="author"></img>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "This product is amazing!",
      body: "“Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil. Quis autem vel eum iure reprehenderit qui in.",
      author: "John Doe",
      source: "Review from Playstore",
      authorImage: "logo.png",
    },
    {
      text: "This product is amazing!",
      body: "“Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil. Quis autem vel eum iure reprehenderit qui in.",
      author: "John Doe",
      source: "Review from Playstore",
      authorImage: "logo.png",
    },
    {
      text: "This product is amazing!",
      body: "“Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil. Quis autem vel eum iure reprehenderit qui in.",
      author: "John Doe",
      source: "Review from Playstore",
      authorImage: "logo.png",
    },
    {
      text: "This product is amazing!",
      body: "“Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil. Quis autem vel eum iure reprehenderit qui in.",
      author: "John Doe",
      source: "Review from Playstore",
      authorImage: "logo.png",
    },
    {
      text: "This product is amazing!",
      body: "“Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil. Quis autem vel eum iure reprehenderit qui in.",
      author: "John Doe",
      source: "Review from Playstore",
      authorImage: "logo.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="testimonial-container">
      <h2 className="hd-10">Hear from our existing users</h2>
      <p className="hd-11">
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatu.
      </p>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${activeIndex * 47.5}%)`,
            "@media (max-width: 640px)": {
              transform: `translateX(-${activeIndex * 100}%)`,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              body={testimonial.body}
              author={testimonial.author}
              authorImage={testimonial.authorImage}
              source={testimonial.source}
              isActive={index === activeIndex}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`mx-1 transition-all duration-300 ${
              index === activeIndex
                ? "w-6 h-2 bg-customPurple rounded-md"
                : "w-2 h-2 bg-gray-400 rounded-full"
            }`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
