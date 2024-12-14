import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-10 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What people are saying?
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 py-2 px-4">
            <div className="rounded-md p-6 text-md border border-neutral-800 font-thin flex flex-col h-full justify-between">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.user}
                  className="h-12 w-12 rounded-full mr-6"
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <p className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
