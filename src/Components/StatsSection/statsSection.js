import { useEffect, useState } from "react";
import "./statsSection.css";

const StatsSection = () => {
    const targetNumbers = {
        first: 180,
        second: 10000,
        third: 30000,
        fourth: 700000,
    };
    const [currentNumbers, setCurrentNumbers] = useState({
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
    });
    useEffect(() => {
        const updateNumber = () => {
          setCurrentNumbers((prevNumbers) => {
            let {first, second, third, fourth} = targetNumbers;
            if (prevNumbers.first < targetNumbers.first) {
              first = prevNumbers.first + 1;
            }
            if (prevNumbers.second < targetNumbers.second) {
                second = prevNumbers.second + 50;
            }
            if (prevNumbers.third < targetNumbers.third) {
                third = prevNumbers.third + 100;
            }
            if (prevNumbers.fourth < targetNumbers.fourth) {
                fourth = prevNumbers.fourth + 2500;
            }
            
            const returnObj = {
                first: first,
                second: second,
                third: third,
                fourth: fourth
            };

            return returnObj;

          });
        };
    
        if (currentNumbers.first < targetNumbers.first) {
          const animationInterval1 = setInterval(updateNumber, 4);
          return () => clearInterval(animationInterval1);
        }
        if (currentNumbers.second < targetNumbers.second) {
            const animationInterval2 = setInterval(updateNumber, 4);
            return () => clearInterval(animationInterval2);
        }
        if (currentNumbers.third < targetNumbers.third) {
            const animationInterval3 = setInterval(updateNumber, 4);
            return () => clearInterval(animationInterval3);
        }
        if (currentNumbers.fourth < targetNumbers.fourth) {
            const animationInterval4 = setInterval(updateNumber, 4);
            return () => clearInterval(animationInterval4);
        }

      }, [currentNumbers]);

  return (
    <div className="statsContainer">
      <div className="stats">
        <div className="statItem">
          <h2>
            <span>{currentNumbers.first.toLocaleString()}</span>+
          </h2>
          <h4>Countries Served</h4>
        </div>
        <div className="statItem">
          <h2>
            <span>{currentNumbers.second.toLocaleString()}</span>
          </h2>
          <h4>Ports Pairs Served</h4>
        </div>
        <div className="statItem">
          <h2>
            <span>{currentNumbers.third.toLocaleString()}</span>+
          </h2>
          <h4>Tons of Air Cargo Moved</h4>
        </div>
        <div className="statItem">
          <h2>
            <span>{currentNumbers.fourth.toLocaleString()}</span>
          </h2>
          <h4>Containers Moved</h4>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
