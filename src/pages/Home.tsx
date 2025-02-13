import { personalInfo } from "../data/resumeData";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center py-5">
      {/* Profile Section */}
      <div className="container">
        <img
          src="https://avatars.githubusercontent.com/u/102302338?s=400&u=c1ebaab58ec389b4cd0bcf86fbf05e2548828753&v=4" // Replace with your image
          alt="Profile"
          className="rounded-circle mb-4"
          style={{ width: "250px", height: "250px" }}
        />
        <h1 className="display-4 fw-bold">Hello</h1>
        <p className="lead text-muted">A Bit About Me</p>
        <p className="mb-5">{personalInfo.description}</p>
      </div>

      {/* Buttons Section */}
      <div className="d-flex justify-content-center gap-3 mb-5">
        <Link
          to="/resume"
          className="btn btn-warning rounded-circle p-4 d-flex align-items-center justify-content-center"
          style={{
            width: "100px",
            height: "100px",
            fontSize: "18px",
            display: "flex",
          }}
        >
          Resume
        </Link>

        <Link
          to="/projects"
          className="btn btn-danger rounded-circle p-4 d-flex align-items-center justify-content-center"
          style={{
            width: "100px",
            height: "100px",
            fontSize: "18px",
            display: "flex",
          }}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="btn btn-info rounded-circle p-4 text-white d-flex align-items-center justify-content-center"
          style={{
            width: "100px",
            height: "100px",
            fontSize: "18px",
            display: "flex",
          }}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
