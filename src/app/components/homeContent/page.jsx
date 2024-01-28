import React from "react";
import FaqsSection from "../faqs/page";

const HomeContent = () => {
  return (
    <div className="home-content">
      <div className="bg-[#14213D] p-2 mr-[-32px] border-l-4 border-l-[#999] mb-8 max-sm:mb-4 max-sm:mx-[-16px] max-sm:border-r-4 max-sm:border-r-[#999]">
        <h1 className="text-center text-3xl max-sm:text-xl font-bold text-white">
          Welcome to TeachMateAI Task Management Dashboard
        </h1>
      </div>
      <p className="text-lg italic max-sm:text-base">
        Efficient task management isn't about doing more; it's about doing what
        matters most, better.
      </p>
      <p className="text-sm italic"> - Meera Kothand</p>
      <div className="bg-[#fff] p-4 mx-auto my-4 w-[80%] max-sm:w-full rounded-e-xl mb-4">
        <p className="mt-2 text-2xl max-sm:text-xl max-sm:text-left mb-4 text-[#14213D] font-bold text-center">
          Introducing TeachmateAI, your all-in-one solution for efficient task
          management and collaboration.
        </p>
        <div className="">
          <p className="text-lg max-sm:text-base mb-3 text-[#14213d] font-bold leading-loose max-sm:text-right">
            With TeachmateAI, you can streamline your workflow and stay
            organized like never before. Our intuitive dashboard provides a
            comprehensive overview of all your tasks, allowing you to
            prioritize, delegate, and track progress effortlessly.
          </p>
          <p className="text-lg max-sm:text-base mb-3 text-[#14213d] font-bold leading-loose max-sm:text-left">
            TeachmateAI leverages the power of artificial intelligence to
            enhance your productivity. Our smart task allocation algorithm
            assigns tasks to the most suitable team members based on skills,
            availability, and workload. Say goodbye to manual task assignments
            and hello to optimized resource utilization.
          </p>
          <p className="text-uppercase text-xl max-sm:text-lg font-bold leading-loose text-[#14213d] mb-3 mt-5">
            Our Perks:
          </p>
          <ul className="list-decimal ">
            <li className="text-lg max-sm:text-base mb-3 text-[#14213d] font-bold leading-loose ml-6">
              Stay informed and in control with real-time updates and
              notifications.
            </li>
            <li className="text-lg max-sm:text-base mb-3 text-[#14213d] font-bold leading-loose ml-6">
              Collaborate seamlessly with your team, share files, and
              communicate effortlessly within the platform.
            </li>
            <li className="text-lg max-sm:text-base mb-3 text-[#14213d] font-bold leading-loose ml-6">
              With customizable dashboards and reports, you can gain valuable
              insights into your team's performance and project progress.
            </li>
          </ul>
          <p className="text-lg max-sm:text-sm mb-3 text-[#14213d] font-bold leading-loose max-sm:text-center">
            Whether you're managing a small team or a large enterprise,
            TeachmateAI adapts to your needs, offering scalability and
            flexibility. <br />
            Empower your team, boost productivity, and achieve your goals with
            TeachmateAI – the ultimate task management solution for modern
            businesses.
          </p>
          <p className="text-lg max-sm:text-base mb-3 text-[#14213d] font-bold leading-loose max-sm:text-left">
            Try TeachmateAI today and experience the future of task management.
          </p>
        </div>
        <FaqsSection />
      </div>
    </div>
  );
};

export default HomeContent;
