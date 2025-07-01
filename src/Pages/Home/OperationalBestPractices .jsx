import React, { useEffect } from "react";

const bestPractices = [
  {
    id: 1,
    title: "Optimize Inventory to Reduce Waste",
    description:
      "Regularly audit your stock and use data-driven ordering to prevent overstocking and spoilage. RestroFlow helps you track inventory in real-time to minimize waste and costs.",
  },
  {
    id: 2,
    title: "Effective Staff Scheduling",
    description:
      "Create flexible schedules based on peak hours and staff availability to maximize productivity and reduce labor costs. Our platform offers shift planning features to simplify this process.",
  },
  {
    id: 3,
    title: "Improve Order Accuracy and Speed",
    description:
      "Train your team to use digital ordering systems efficiently, and ensure clear communication between front and back of house. Using RestroFlow’s order tracking minimizes mistakes and speeds up service.",
  },
  {
    id: 4,
    title: "Streamline Supplier Communication",
    description:
      "Maintain strong relationships with suppliers by using centralized communication and automated reorder alerts. RestroFlow integrates supplier management to keep your kitchen well-stocked without hassle.",
  },
];

const OperationalBestPractices = () => {
  useEffect(() => {
    document.title = "Operational Best Practices";
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 bg-base-100 rounded-lg shadow-md">
       <h2 className="text-3xl font-bold mb-8 text-center text-secondary">
         Operational Best Practices
      </h2>
      <p className="text-center text-base-content mb-12 max-w-3xl mx-auto">
        Practical tips and strategies to help you streamline your restaurant’s operations and boost efficiency.
      </p>

      <div className="grid gap-10 sm:grid-cols-2">
        {bestPractices.map(({ id, title, description }) => (
          <div
            key={id}
            className="bg-base-200 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border-2 border-secondary"
          >
            <h3 className="text-xl font-semibold text-secondary mb-3">
              {title}
            </h3>
            <p className="text-base-content">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OperationalBestPractices;
