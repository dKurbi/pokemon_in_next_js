//src/app/components/LoadingCircle.tsx

import "./styles/loading-circle.css";

export default function LoadingCircle() {
  return (
    <div className="loading-circle-container">
      <div className="loading-circle"></div>
      <div className="loading-text">Loading...</div>
    </div>
  );
}