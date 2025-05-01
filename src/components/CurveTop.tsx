interface CurveTopProps {
    fill?: string;
  }
  
  export default function CurveTop({ fill = "#6D8E4E" }: CurveTopProps) {
    return (
      <div className="rotate-180">
        <svg
          viewBox="0 0 960 100"
          width="100%"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <rect x="0" y="0" width="960" height="100" fill="#FAF7F2"></rect>
          <path
            d="M0 10L17.8 12.3C35.7 14.7 71.3 19.3 106.8 19.7C142.3 20 177.7 16 213.2 15.2C248.7 14.3 284.3 16.7 320 19.7C355.7 22.7 391.3 26.3 426.8 28.5C462.3 30.7 497.7 31.3 533.2 30C568.7 28.7 604.3 25.3 640 22.2C675.7 19 711.3 16 746.8 16.3C782.3 16.7 817.7 20.3 853.2 24.2C888.7 28 924.3 32 942.2 34L960 36L960 0L942.2 0C924.3 0 888.7 0 853.2 0C817.7 0 782.3 0 746.8 0C711.3 0 675.7 0 640 0C604.3 0 568.7 0 533.2 0C497.7 0 462.3 0 426.8 0C391.3 0 355.7 0 320 0C284.3 0 248.7 0 213.2 0C177.7 0 142.3 0 106.8 0C71.3 0 35.7 0 17.8 0L0 0Z"
            fill={fill}
            strokeLinecap="round"
            strokeLinejoin="miter"
          ></path>
        </svg>
      </div>
    );
  }
  