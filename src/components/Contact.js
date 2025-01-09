const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-xl w-full">
        <h1 className="font-bold text-4xl text-center text-indigo-600 mb-6">
          Contact Us
        </h1>
        <form action="post" className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your Name"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="4"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              className="w-full py-3 bg-indigo-600 text-white rounded-lg text-xl font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
