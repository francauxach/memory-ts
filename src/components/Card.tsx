import { ReactSVG } from "react-svg";

function Card(props: any) {
  return (
    <div
      className={
        "card rounded-xl p-3 bg-white relative " +
        (props.card.selected ? "is-flipped" : "")
      }
      onClick={props.onClick}
    >
      <img
        className="card-content w-full h-full object-contain select-none"
        src={props.card.image}
        alt="Card"
      />
      <ReactSVG
        className={
          "card-content card-content-back w-full h-full object-contain absolute top-0 p-3 left-0 select-none " +
          (props.isEven ? "text-red-700" : "text-blue-700")
        }
        src="/card-back.svg"
      />
    </div>
  );
}

export default Card;
