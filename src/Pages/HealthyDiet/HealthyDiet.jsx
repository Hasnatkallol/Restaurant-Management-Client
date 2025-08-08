import React, { useEffect, useState } from "react";

const foodItems = [

  {
    id: 2,
    name: "Quinoa & Veggie Bowl",
    category: "Vegan",
    description: "Protein-packed quinoa with mixed vegetables.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Avocado Toast",
    category: "Gluten-Free",
    description: "Toasted gluten-free bread topped with smashed avocado.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Keto Bacon & Eggs",
    category: "Keto",
    description: "Classic keto breakfast with bacon and eggs.",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Vegan Smoothie Bowl",
    category: "Vegan",
    description: "Colorful smoothie bowl topped with fruits and nuts.",
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=600&q=80",
  },
];

const categories = ["All", "Vegan", "Gluten-Free", "Low-Carb", "Keto"];

const HealthyDiet = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    document.title = "Healthy Diet";
  }, []);

  const filteredItems =
    selectedCategory === "All"
      ? foodItems
      : foodItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-secondary mb-6 text-center">
        Healthy & Diet Foods
      </h1>

      {/* Category Filters */}
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`btn btn-outline border-secondary text-secondary hover:bg-accent hover:border-accent hover:text-white ${
              selectedCategory === cat
                ? "bg-secondary text-white border-secondary"
                : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Food Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.length > 0 ? (
          filteredItems.map(({ id, name, category, description, image }) => (
            <div key={id} className="card bg-base-100 shadow-md rounded-lg">
              <figure>
                <img
                  src={image}
                  alt={name}
                  className="h-48 w-full object-cover rounded-t-lg"
                />
              </figure>
              <div className="card-body text-base-content">
                <h2 className="card-title">{name}</h2>
                <p className="italic text-sm text-neutral mb-2">{category}</p>
                <p>{description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-base-content">
            No items found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default HealthyDiet;
