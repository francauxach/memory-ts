import { ReactSVG } from "react-svg";

function Card(props: any) {
  return (
    <div
      className={
        "card rounded-xl p-3 bg-white relative border-4 " +
        (props.isPaired
          ? "border-gray-500 hover:border-gray-700"
          : props.card.selected
          ? "border-yellow-500 hover:border-yellow-500"
          : "is-flipped border-transparent hover:border-yellow-500")
      }
      onClick={props.onClick}
    >
      <img
        className={
          "card-content w-full h-full object-contain select-none " +
          (props.isPaired ? "opacity-30" : "")
        }
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
