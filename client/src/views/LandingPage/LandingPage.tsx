import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
      <div>
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Life Calendar</h1>
            <p className="text-lg text-gray-600 mb-8">Your personalized calendar experience</p>
            <Link to="/login" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 ease-in-out">Get Started</Link>
          </div>
        </section>
  
        <section className="bg-white py-16" id="features">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Features</h2>
            <div className="flex flex-wrap justify-center space-x-4">
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <h3 className="text-xl font-semibold text-gray-700">Easy to Use</h3>
                <p className="text-gray-600">Intuitive interface for managing your tasks and events.</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <h3 className="text-xl font-semibold text-gray-700">Responsive Design</h3>
                <p className="text-gray-600">Works seamlessly on desktop, tablet, and mobile devices.</p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <h3 className="text-xl font-semibold text-gray-700">Customizable</h3>
                <p className="text-gray-600">Tailor your calendar to suit your unique needs.</p>
              </div>
            </div>
          </div>
        </section>
  
        <section className="bg-gray-100 py-16" id="about">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">About Us</h2>
            <p className="text-lg text-gray-600 mb-8">Learn more about our mission and team.</p>
            <a href="#team" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 ease-in-out">Meet the Team</a>
          </div>
        </section>
      </div>
    );
  }
export default LandingPage;