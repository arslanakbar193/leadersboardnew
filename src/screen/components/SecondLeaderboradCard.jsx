import React from "react";

const LeaderboradCard = ({ data }) => {
  return (
    <>
      <div className="card-wrapper card-wrapper-second">
        <div className="card-items">
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <div className="cards flex deals-info" key={index}>
                <div>
                  <div>{item.icon}</div>
                </div>
                <div className="description">
                <div className="text-left fs-18">{item.totalEarning}</div>
                <div className="status">{item.status}</div>
                </div>
               </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default LeaderboradCard;
