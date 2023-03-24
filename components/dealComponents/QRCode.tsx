import { useQRCode } from "next-qrcode";
import { useEffect, useState } from "react";

type QRCodeProps = {
  dealId: string;
  dealName: string;
};

export default function QRCode({ dealId, dealName }: QRCodeProps) {
  const { SVG } = useQRCode();
  const [countDown, setCountDown] = useState(30);
  const [generatedTime, setGeneratedTime] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountDown((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countDown === 0) {
      setCountDown(30);
      setGeneratedTime(new Date());
    }
  }, [countDown]);

  return (
    <div className="flex flex-col items-center pt-20 prose">
      <h2 className="mb-5">Take me to the bar!</h2>

      <div className="bg-primary rounded-3xl p-3 overflow-hidden">
        <SVG
          text={JSON.stringify({
            dealId,
            dealName,
            generatedTime: generatedTime.toString(),
            userId: "userIdString",
            businessId: "businessIdString",
          })}
          options={{
            margin: 2,
            width: 200,
            color: {
              dark: "#262626",
              light: "#FFD750",
            },
          }}
        />
      </div>

      <h2 className="mb-5">This QR code expires in:</h2>
      <h3>{countDown}</h3>
    </div>
  );
}
