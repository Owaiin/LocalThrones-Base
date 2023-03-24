type ButtonProps = {
  secondary?: boolean;
  text?: string;
  onClick?: React.MouseEventHandler;
};

export default function Button(props: ButtonProps) {
  return (
    <>
      <button
        onClick={props.onClick}
        className={`btn font-bold ${
          props.secondary ? "btn-secondary" : "btn-primary"
        }`}
      >
        {props.text}
      </button>
    </>
  );
}
