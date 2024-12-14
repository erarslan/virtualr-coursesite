import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8 ">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r bg-clip-text text-transparent from-orange-500 to-red-400 text-xl ml-1">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-6 flex">
                    <CheckCircle2 />
                    <span className="ml-1">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex items-center w-full justify-center mt-20 h-12 p-5 border border-orange-900 tracking-tight text-xl rounded-lg hover:bg-orange-900 transition duration-300"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
