import { ImageResponse } from "next/og";

export const alt = "Amrutha — Student Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const backgroundGradient =
  "linear-gradient(140deg, #FFF9FC 0%, #F8D7E8 50%, #FFF9FC 100%)";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: backgroundGradient,
          fontFamily: "Fraunces, Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 140,
              height: 140,
              borderRadius: "9999px",
              backgroundImage: "linear-gradient(135deg, #C02D75 0%, #E879A9 100%)",
              color: "white",
              fontSize: 72,
              fontWeight: 600,
            }}
          >
            A
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#30232B",
            }}
          >
            Amrutha.
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#6E5566",
              fontWeight: 500,
            }}
          >
            Student • Beginner Developer • Curious Problem Solver
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 22,
            color: "#C02D75",
            fontWeight: 600,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
          }}
        >
          Always learning, always building
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
