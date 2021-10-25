import React from "react";
import { ReactSVG } from "react-svg";

class GameBoard extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      cards: [],
      loading: true,
    };
  }

  flipCard(index: number) {
    const cards = [...this.state.cards];
    cards[index].selected = !cards[index].selected;

    this.setState({
      cards: cards,
    });
  }

  componentDidMount() {
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=10`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          cards: json.cards.map((card: object) => ({
            ...card,
            selected: true,
          })),
          loading: false,
        });
      });
  }

  render() {
    return (
      <div className="game-board grid grid-cols-5 gap-4">
        {this.state.cards.map((card, index) => {
          return (
            <div
              key={card.code}
              className={
                "card rounded-xl p-3 bg-white relative" +
                (card.selected ? " is-flipped" : "")
              }
              onClick={() => this.flipCard(index)}
            >
              <img
                className="card-content w-full h-full object-contain select-none"
                src={card.image}
                alt="Card"
              />
              <ReactSVG
                className={
                  "card-content card-content-back w-full h-full object-contain absolute top-0 p-3 left-0 select-none " +
                  (index % 2 ? "text-red-700" : "text-blue-700")
                }
                src="/card-back.svg"
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default GameBoard;
