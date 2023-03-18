import Container from "../utility/Container";
import { IoMdClose } from "react-icons/io";
export default function PopupContainer(props: {
  onClick?: React.MouseEventHandler;
}) {
  return (
    <>
      <div className="absolute bottom-0 left-0 w-full">
        <Container>
          <div className="bg-white h-70vh w-full border rounded-xl p-8 relative">
            <IoMdClose
              onClick={props.onClick}
              className="text-2xl absolute top-0 right-0 mr-2 mt-2"
            />
          </div>
        </Container>
      </div>
    </>
  );
}
