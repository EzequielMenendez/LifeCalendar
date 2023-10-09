import myPhoto from '../../utils/myPhoto.jpg'

const AboutMe = () => {
    return (
      <section className="bg-gray-100 py-16 min-h-[88.1vh]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2">
            <img
              src={myPhoto}
              alt="Mi foto"
              width="250"
              height="250"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              About Me
            </h2>
            <p className="text-gray-700">
            Hello, I'm Ezequiel Menéndez, a Full Stack Developer! I'm passionate about technology and always eager to discover and learn more. I've created Life Calendar, which was developed using React, Node, Express, MongoDB, and TypeScript.
            </p>
            <p className="text-gray-700 mt-4">If you have any suggestions for further improvements to the text, please let me know!</p>
          </div>
          
        </div>
        <div className="mt-20 flex gap-4 justify-center">
          <a
            href="https://www.linkedin.com/in/ezequiel-men%C3%A9ndez-888381218/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/EzequielMenendez"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md"
          >
            GitHub
          </a>
          <a
            href="https://portfolio-e-m-fwg9.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
          >
            Portfolio
          </a>
        </div>
      </div>
    </section>
    );
};
  
  
  export default AboutMe;