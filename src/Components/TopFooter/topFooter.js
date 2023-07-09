import "./topFooter.css";
import ListElements from "./list.js";
import topFooterInfo from "./topFooterInfo";

const TopFooter = () => {
  return (
    <div id="topFooter" className="topFooter">
      {topFooterInfo.map((list, index) => {
        return (
          <div key={index} className="topFooterList">
            <span className="topFooterHeading">{list.heading}</span>
            {list.sublists.map((sublist, index) => {
              return <ListElements sublist={sublist} key={index} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TopFooter;
