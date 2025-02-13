import { personalInfo } from "../data/resumeData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="text-center py-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Profile Section */}
      <div className="container">
        <motion.img
          src="https://avatars.githubusercontent.com/u/102302338?s=400&u=c1ebaab58ec389b4cd0bcf86fbf05e2548828753&v=4"
          alt="Profile"
          className="rounded-circle mb-4"
          style={{ width: "250px", height: "250px" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <h1 className="display-4 fw-bold">Hello</h1>
        <p className="lead text-muted">A Bit About Me</p>
        <p className="mb-5">{personalInfo.description}</p>
      </div>

      {/* Buttons Section */}
      <div className="d-flex justify-content-center gap-3 mb-5">
        {[
          { to: "/resume", text: "Resume", color: "btn-warning" },
          { to: "/projects", text: "Projects", color: "btn-danger" },
          { to: "/contact", text: "Contact", color: "btn-info" },
        ].map(({ to, text, color }) => (
          <motion.div
            key={to}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link
              to={to}
              className={`btn ${color} rounded-circle p-4 d-flex align-items-center justify-content-center`}
              style={{
                width: "100px",
                height: "100px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              {text}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
