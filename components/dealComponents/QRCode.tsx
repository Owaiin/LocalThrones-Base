import { useQRCode } from "next-qrcode";
import { useEffect, useState } from "react";
export default function QRCode() {
  const [countDown, setCountDown] = useState(30);
  const { SVG } = useQRCode();
  const dealId = "dealIdString";
  const dealName = "dealNameString";
  const [dateTime, setDateTime] = useState(() => new Date().toString());

  //   QR Code Timer - At end of CountDown -
  const runCountDown = () => {
    if (countDown !== 0) {
      for (let i = countDown; i !== 0 - 1; i--) {
        setTimeout(() => {
          setCountDown(countDown - 1);
        }, 1000);
      }
    }
    // resets the time and updates QRCode
    if (countDown === 0) {
      setCountDown(30);
      const refreshDate = new Date();
      const refreshTime = refreshDate.toDateString;
      setDateTime(() => new Date().toString());
    }
  };

  useEffect(() => {
    runCountDown();
  }, [countDown]);

  return (
    <>
      <div className="flex flex-col items-center pt-20 prose">
        <h2 className="mb-5">Take me to the bar!</h2>

        <div className="bg-primary rounded-3xl p-3 overflow-hidden">
          <SVG
            text={`{"dealId": "${dealId}", "dealName": "${dealName}", "generatedTime" : "${dateTime}", "userId": "userIdString", "businessId" : "businessIdString"}`}
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
    </>
  );
}
