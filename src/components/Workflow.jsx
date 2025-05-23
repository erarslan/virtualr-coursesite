import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";
import img from "../assets/code.jpg";

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-t from-orange-500 to-orange-800 bg-clip-text text-transparent">
          coding workflow.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-4 w-full md:w-1/2">
          <img src={img} alt="code snippet" />
        </div>
        <div className="pt-12 w-full md:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 h-10 w-10 p-2 bg-neutral-900 rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
