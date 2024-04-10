// components/HeroSection.js

const HeroSection = () => {
    return (
      <div className="relative h-screen pt-10">
        {/* Background Video */}
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
          <source src="https://res.cloudinary.com/dhybtcgtb/video/upload/v1712083649/ben_coaching_lot7il.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  
        {/* Background Picture */}
        <img src="https://res.cloudinary.com/dhybtcgtb/image/upload/v1712081212/Snapinsta.app_bucci2_jjwqra.jpg" alt="Background Picture" className="absolute ml-80 mt-10 inset-0 w-[600px] h-[560px] object-cover" />
  
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white mr-10">
          <h1 className="text-4xl md:text-6xl lg:text-3xl font-bold mb-4">Hi,Welcome to my web page </h1>
          <p className="text-lg md:text-xl lg:text-lg">Am Ben,certified fuctional fitness coach Based in Rwanda </p>
          {/* Add other elements like buttons, links, etc., as needed */}
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  