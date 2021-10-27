import React from "react";
import Card from "./Card";

class GameBoard extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      cards: [],
      loading: true,
      selectedCards: [],
      pairedCardsKeys: [],
      currentStep: 0,
    };
  }

  selectCardByIndex(index: number) {
    const cards = this.state.cards;

    if (!cards[index].selected) {
      let selectedCards = this.state.selectedCards;
      let currentStep = this.state.currentStep + 1;

      this.setState({
        currentStep: currentStep,
      });

      if (!selectedCards.includes(cards[index].key)) {
        selectedCards = [...selectedCards, cards[index].key];

        this.setState({
          selectedCards: selectedCards,
        });

        this.flipCard(index);
      }

      if (currentStep === 2) {
        const pairedCardsKeys = this.state.pairedCardsKeys;
        const selectedCardsInSteps = selectedCards;

        selectedCards = [];

        this.setState({
          selectedCards: selectedCards,
        });

        if (
          selectedCardsInSteps
            .map((cardKey: string) => cardKey.split("-")[0])
            .every((cardCode: string) => cardCode === cards[index].code)
        ) {
          this.setState({
            pairedCardsKeys: [...pairedCardsKeys, cards[index].code],
          });
        } else {
          setTimeout(() => {
            selectedCardsInSteps.forEach((cardKey: string) =>
              this.flipCard(
                cards.indexOf(cards.find((card: any) => card.key === cardKey))
              )
            );
          }, 1000);
        }

        this.setState({
          currentStep: 0,
        });
      }
    }
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
          cards: [...json.cards]
            .concat(json.cards)
            .sort(() => Math.random() - 0.5)
            .map((card: any, index: number) => ({
              ...card,
              selected: false,
              key: card.code + "-" + index,
            })),
        });
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <div className="game-board grid grid-cols-7 gap-4 my-20 max-w-screen-lg">
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          this.state.cards.map((card, index) => {
            return (
              <Card
                key={card.key}
                card={card}
                isEven={index % 2}
                isPaired={this.state.pairedCardsKeys.includes(card.code)}
                onClick={() => this.selectCardByIndex(index)}
              />
            );
          })
        )}
      </div>
    );
  }
}

export default GameBoard;
