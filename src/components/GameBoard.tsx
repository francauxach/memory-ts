import React from "react";
import Card from "./Card";

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
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=14`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          cards: [...json.cards].concat(json.cards).sort(() => Math.random() - 0.5).map((card: any, index: number) => ({
            ...card,
            selected: true,
            uniqueKey: card.key + '-' + index
          })),
        });
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <div className="game-board grid grid-cols-7 gap-4 my-20 max-w-screen-lg">
        {
          this.state.loading
          ? <div>Loading...</div>
          : this.state.cards.map((card, index) => {
            return (
              <Card
                key={card.uniqueKey}
                card={card}
                isEven={index % 2}
                onClick={() => this.flipCard(index)}
              />
            );
        })}
      </div>
    );
  }
}

export default GameBoard;
