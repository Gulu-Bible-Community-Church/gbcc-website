import { useState, useEffect } from "react";

const Donation = () => {
    const getTargetTime = () => {
        const futureDate = new Date();
        futureDate.setMonth(futureDate.getMonth() + 6); // Set the future date 6 months ahead

        return futureDate.getTime(); // Get the timestamp of the future date
    };

    const calculateTimeRemaining = (targetTime: number) => {
        const currentTime = new Date().getTime(); // Get the current timestamp
        const timeDifference = targetTime - currentTime;

        // Calculate the remaining time in days, hours, minutes, and seconds
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeRemaining, setTimeRemaining] = useState(() => {
        const storedTargetTime = localStorage.getItem("targetTime");
        if (storedTargetTime) {
            return calculateTimeRemaining(parseInt(storedTargetTime, 10));
        } else {
            const targetTime = getTargetTime();
            localStorage.setItem("targetTime", targetTime.toString());
            return calculateTimeRemaining(targetTime);
        }
    });

    useEffect(() => {
        const targetTime = parseInt(localStorage.getItem("targetTime") || "0", 10);
        const timer = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining(targetTime));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex items-center justify-center lg:pt-52 pt-40 bg-slate-200">
            {timeRemaining.days > 0 ? (
                <div className="bg-[#162352] lg:p-10 p-4 text-white rounded-xl">
					<p className="lg:text-5xl text-3xl text-center font-bold">Coming Out Soon In </p>
					<p className="text-center lg:text-xl text-sm">
                     {timeRemaining.days} days, {timeRemaining.hours} hours,{" "}
                    {timeRemaining.minutes} minutes, {timeRemaining.seconds} seconds
                </p>
				</div>
            ) : (
                <p>Coming Out Soon.....</p>
            )}
        </div>
    );
};

export default Donation;
