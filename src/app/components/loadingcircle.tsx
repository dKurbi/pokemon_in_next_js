import "./styles/loadingcircle.css";

export default function LoadingCircle() {
  return (
    <div className="loading-circle-container">
      <div className="loading-circle"></div>
      <div className="loading-text">Loading...</div>
    </div>
  );
}