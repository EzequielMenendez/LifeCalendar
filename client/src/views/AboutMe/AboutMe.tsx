const AboutMe = () => {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/300" // Cambiar el tamaño físico de la imagen
              alt="Mi foto"
              width="300" // Ajustar el ancho deseado
              height="300" // Ajustar la altura deseada
              className="rounded-lg shadow-lg mx-auto mb-8"
            />
          </div>
          <div className="text-center"> {/* Centrar los botones */}
            <a
              href="https://www.linkedin.com/in/ezequiel-men%C3%A9ndez-888381218/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mx-2"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/EzequielMenendez"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md mx-2"
            >
              GitHub
            </a>
            <a
              href="https://portfolio-e-m-fwg9.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mx-2"
            >
              Portfolio
            </a>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mt-8">
              About Me
            </h2>
            <p className="text-gray-600 mt-4">
              Hello! I am Ezequiel Menéndez, a passionate Full Stack Web Developer. I love [Your Interests or Hobbies], and I am committed to [Your Mission or Goal]. My focus is on [Your Primary Focus]. In my free time, I enjoy [Your Favorite Activities].
            </p>
          </div>
        </div>
      </section>
    );
};
  
  
  export default AboutMe;