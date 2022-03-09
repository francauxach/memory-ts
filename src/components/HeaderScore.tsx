import React from "react";

class HeaderScore extends React.Component {
  render() {
    return (
      <div className="flex items-center justify-between h-16 px-16 text-4xl font-bold text-white bg-green-600 font-gochi">
        <div className="order-2">Score Board</div>
        <div className="order-1">Player 1</div>
        <div className="order-3">Player 2</div>
      </div>
    );
  }
}

export default HeaderScore;
