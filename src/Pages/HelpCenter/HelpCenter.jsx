import React, { useEffect } from 'react';

const HelpCenter = () => {
  useEffect(() => {
    document.title = "Help Center";
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-secondary">Help Center</h1>
        <p className="text-base-content mt-2">Find answers or get in touch with our support team.</p>
      </div>

      {/* FAQ Section */}
      <div className="space-y-4 mb-12">
        <div className="collapse collapse-arrow bg-base-100 border border-neutral rounded-lg">
          <input type="checkbox" /> 
          <div className="collapse-title text-xl font-medium text-base-content">
            How do I add a new food item?
          </div>
          <div className="collapse-content text-base-content">
            <p>You can add a food item by going to the "Add Foods" section and clicking the "Add Food" button. Fill in the details and submit.</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-neutral rounded-lg">
          <input type="checkbox" /> 
          <div className="collapse-title text-xl font-medium text-base-content">
            How do I manage my inventory?
          </div>
          <div className="collapse-content text-base-content">
            <p>Go to your Dashboard and navigate to the Inventory tab to manage stock levels, add items, or track usage.</p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-neutral rounded-lg">
          <input type="checkbox" /> 
          <div className="collapse-title text-xl font-medium text-base-content">
            Can I manage multiple restaurants?
          </div>
          <div className="collapse-content text-base-content">
            <p>Yes, RestroFlow supports multi-location management. Contact us to enable this feature on your account.</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-neutral p-6 rounded-lg shadow-md border border-neutral">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">Still need help?</h2>
        <form className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text text-base-content">Your Name</span>
            </label>
            <input 
              type="text" 
              placeholder="John Doe" 
              className="input input-bordered w-full bg-base-100 text-base-content border-neutral" 
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-base-content">Email Address</span>
            </label>
            <input 
              type="email" 
              placeholder="john@example.com" 
              className="input input-bordered w-full bg-base-100 text-base-content border-neutral" 
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-base-content">Your Message</span>
            </label>
            <textarea 
              className="textarea textarea-bordered w-full bg-base-100 text-base-content border-neutral" 
              placeholder="Describe your issue or question..."
            />
          </div>

          <button className="btn btn-secondary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default HelpCenter;
