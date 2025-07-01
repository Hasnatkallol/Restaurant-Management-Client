import React from "react";

const promotions = [
  {
    id: 1,
    title: "Summer Special - 20% Off!",
    description:
      "Enjoy a refreshing summer discount on all cold beverages and salads.",
    validTill: "2025-08-31",
  },
  {
    id: 2,
    title: "Buy 1 Get 1 Free Pizza",
    description: "Order any large pizza and get another one absolutely free.",
    validTill: "2025-07-15",
  },
  {
    id: 3,
    title: "Free Dessert on Orders Over $50",
    description: "Indulge with a complimentary dessert for big orders.",
    validTill: "2025-09-30",
  },
];

const PromotionsOffers = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-secondary">
        Promotions & Offers
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {promotions.map(({ id, title, description, validTill }) => (
          <div
            key={id}
            className="card bg-base-100 shadow-lg p-6 rounded-lg border border-neutral"
          >
            <h3 className="text-xl font-semibold mb-2 text-base-content">
              {title}
            </h3>
            <p className="mb-4 text-base-content">{description}</p>
            <p className="text-sm text-info">
              Valid Till: {new Date(validTill).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromotionsOffers;
