import { SubresourceIntegrityPlugin } from "next/dist/build/webpack/plugins/subresource-integrity-plugin";

export default function Button(props: {
  secondary?: boolean;
  text?: string;
  onClick?: React.MouseEventHandler;
}) {
  return (
    <>
      <button
        className={`btn font-bold ${
          props.secondary ? "btn-secondary" : "btn-primary"
        }`}
      >
        {props.text}
      </button>
    </>
  );
}