import React from "react";
import Image from "next/image";

const WorkLifeBalance = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Top 10 Tips for a Healthy Work-Life Balance
        </h1>
        <div className="w-full h-96 relative mb-8">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            alt="Work-Life Balance"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <p className="text-lg mb-6">
          Achieving a healthy work-life balance is essential for both personal
          well-being and professional success. In this article, we share 10
          practical tips to help you manage your time, reduce stress, and enjoy
          a more fulfilling life.
        </p>
        <h2 className="text-2xl font-bold mb-4">1. Set Boundaries</h2>
        <p className="text-lg mb-6">
          Clearly define your work hours and stick to them. Avoid checking
          emails or taking work calls outside these hours to ensure you have
          time to relax and recharge.
        </p>
        <h2 className="text-2xl font-bold mb-4">2. Prioritize Self-Care</h2>
        <p className="text-lg mb-6">
          Make time for activities that nourish your mind and body, such as
          exercise, meditation, or hobbies. Self-care is crucial for maintaining
          your energy and focus.
        </p>
        <h2 className="text-2xl font-bold mb-4">3. Learn to Say No</h2>
        <p className="text-lg mb-6">
          It&apos;s okay to decline additional responsibilities if they
          interfere with your personal time. Saying no allows you to focus on
          what truly matters.
        </p>
        <h2 className="text-2xl font-bold mb-4">4. Delegate Tasks</h2>
        <p className="text-lg mb-6">
          Don&apos;t try to do everything yourself. Delegate tasks at work and
          at home to free up time for the things you enjoy.
        </p>
        <h2 className="text-2xl font-bold mb-4">5. Take Regular Breaks</h2>
        <p className="text-lg mb-6">
          Short breaks throughout the day can improve productivity and reduce
          stress. Step away from your desk, stretch, or take a walk to clear
          your mind.
        </p>
        <a
          href="https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/work-life-balance/art-20048134"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-400 font-medium"
        >
          Read more about work-life balance
        </a>
      </div>
    </div>
  );
};

export default WorkLifeBalance;
