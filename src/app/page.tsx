import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PublicIcon from "@mui/icons-material/Public";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import PhoneIcon from "@mui/icons-material/Phone";
import TestiSlider from "@/components/TestiSlider/page";
import "swiper/css";

const services = [
  {
    title: "Air Freight",
    description: "Efficient and timely air transport solutions for all your urgent deliveries.",
    image: "/home/air.jpg",
  },
  {
    title: "Ocean Freight",
    description: "Cost-effective and reliable sea transport for large shipments.",
    image: "/home/ocean.jpg",
  },
  {
    title: "Road Freight",
    description: "Flexible and dependable road transport for regional deliveries.",
    image: "/home/road.jpg",
  },
  {
    title: "Train Freight",
    description: "Eco-friendly and economical train transport for bulk goods.",
    image: "/home/train.jpg",
  },
  {
    title: "Customs Clearance",
    description: "Seamless customs clearance to ensure hassle-free global trade.",
    image: "/home/customs.jpg",
  },
  {
    title: "Warehouse Solutions",
    description: "Secure and scalable warehousing options tailored to your needs.",
    image: "/home/warehouse.jpg",
  },
];

export default function Home() {
  return (
    <>
      <section
        id="banner"
        className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative px-4 pt-40 md:px-8 z-10">
          <h1 className="text-md font-bold uppercase mb-4">
            TRANSPORT & LOGISTIC SOLUTION
          </h1>
          <h2 className="text-4xl md:text-4xl font-semibold">
            #1 Place For Your <br />
            <span className="text-primary">LOGISTICS</span> SOLUTION
          </h2>
          <p className="mt-6 text-sm md:text-lg max-w-2xl">
            We provide the best-in-class transport and logistics solutions tailored to your needs. From air freight to sea and road freight, we ensure timely and efficient delivery.
          </p>
          <Link
            href="#about-us"
            className="mt-8 inline-block bg-primary text-white  py-3 px-6 rounded-lg text-lg uppercase font-semibold hover:bg-red-500 transition duration-300"
          >
            Read More
          </Link>
        </div>
      </section>

      <section id="about-us" className="py-16 px-8 md:px-32">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/home/about_us.jpg"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-xl font-bold mb-4 text-primary" >About Us</h2>
            <h3 className="text-4xl font-semibold mb-6">
              Quick Transport and Logistics Solutions
            </h3>
            <p className="text-gray-700 mb-8">
              We are dedicated to providing fast, reliable, and tailored transport and logistics solutions. With our expertise, we ensure your goods are delivered safely and on time, no matter where you are in the world.
            </p>

            <div className="flex gap-6">
              <div className="flex items-start">
                <div className="text-primary text-3xl mr-4">
                  <PublicIcon className="text-primary text-4xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Global Coverage</h4>
                  <p className="text-gray-700">
                    Our network spans across continents, ensuring your goods reach their destination, no matter how far.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-primary text-3xl mr-4">
                  <LocalShippingIcon className="text-primary text-4xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">On Time Delivery</h4>
                  <p className="text-gray-700">
                    We utilize cutting-edge technology and logistics strategies to provide seamless global transportation.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/about-us"
              className="mt-8 inline-block bg-primary text-white py-3 px-6 rounded-lg text-lg uppercase font-medium hover:bg-[#ec3d40] transition duration-300"
            >
              Explore More
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-8 md:px-32 bg-gray-100">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-xl font-bold mb-4 text-primary">Our Services</h2>
          <h3 className="text-4xl font-semibold mb-6">
            Explore our range of logistics services
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg group hover:shadow-xl transition duration-300"
            >
              <div className="mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <Link
                  href="/services"
                  className="flex items-center text-primary font-medium"
                >
                  <ArrowForwardIcon className="mr-2 transition-transform group-hover:translate-x-1" />
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                    Read More
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="py-16 px-8 md:px-32">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-xl font-bold mb-4 text-primary">Our Features</h2>
            <h3 className="text-4xl font-semibold mb-6">
              We Are Trusted Logistics Company Since 1990
            </h3>
            <p className="text-gray-700 mb-8">
              We are committed to providing top-notch logistics services with a global network, ensuring your shipments arrive on time and without hassle. Trust us to handle your logistics needs with efficiency and care.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-start">
                <div className="text-primary text-3xl mr-4">
                  <PublicIcon />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Worldwide Service</h4>
                  <p className="text-gray-700">
                    Our extensive network ensures that your goods can reach every corner of the globe without delays.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-primary text-3xl mr-4">
                  <AccessAlarmIcon />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">On Time Delivery</h4>
                  <p className="text-gray-700">
                    We pride ourselves on providing reliable and punctual delivery, no matter the distance.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-primary text-3xl mr-4">
                  <PhoneIcon />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">24/7 Telephone Support</h4>
                  <p className="text-gray-700">
                    Our dedicated customer service team is available around the clock to assist with any logistics needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <Image
              src="/home/features.jpg"
              alt="Features"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 px-8 md:px-32 bg-gray-100">
        <div className="container mx-auto text-center mb-4">
          <h2 className="text-xl font-bold mb-4 text-primary">Testimonial</h2>
          <h3 className="text-4xl font-semibold">Our Clients Say!</h3>
        </div>

        <TestiSlider />
      </section>
    </>
  );
}
