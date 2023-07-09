import "./topFooter.css";

const List = ({ sublist }) => {
  return (
    <div className="topFooterSubList">
      <div>
        <h4>{sublist.innerHeading}</h4>
        {sublist.elements.map((elem, index) => {
          return (
            <span key={index} className="topFooterListElem">
              <a>{elem}</a>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default List;
