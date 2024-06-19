import React from "react";
import "./Pricing.css";

const PricingCard = ({
  title,
  description,
  price,
  features,
  buttonText,
  background,
  color,
  IconColor,
}) => {
  return (
    <div
      className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg"
      style={{ backgroundColor: background, color: color }}
    >
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="font-light sm:text-lg">{description}</p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-4xl font-bold">${price}</span>
        <span>/month</span>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5"
              style={{ color: IconColor }}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {/* <a
        href="#"
        className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
      >
        {buttonText}
      </a> */}
    </div>
  );
};

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Starter",
      description: "Best option for personal use & for your next project.",
      price: "10",
      background: "#ffffff",
      color: "#000000",
      IconColor: "#000000",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
      buttonText: "Get started",
    },
    {
      title: "Institution",
      description: "Relevant for multiple users, extended & premium support.",
      price: "95",
      background: "#341949",
      color: "#ffffff",
      IconColor: "#FAF2FF99",

      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 10 developers",
        "Premium support: 24 months",
        "Free updates: 24 months",
      ],
      buttonText: "Get started",
    },
    {
      title: "Premium",
      description:
        "Best for large scale uses and extended redistribution rights.",
      price: "160",
      background: "#ffffff",
      color: "#000000",
      IconColor: "#000000",

      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 100+ developers",
        "Premium support: 36 months",
        "Free updates: 36 months",
      ],
      buttonText: "Get started",
    },
  ];

  return (
    <section className="pricing">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-3xl tracking-tight font-bold text-gray-800 dark:text-white">
            Flexible pricing for all{" "}
          </h2>
          <p className="mb-5 font-light text-lg text-gray-500 sm:text-base dark:text-gray-400">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatu Quis autem vel eum iure
            reprehenderit qui in ea voluptate
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${index === 1 ? "lg:-translate-y-3" : ""}`}
            >
              <PricingCard
                title={plan.title}
                description={plan.description}
                price={plan.price}
                features={plan.features}
                buttonText={plan.buttonText}
                background={plan.background}
                color={plan.color}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
