export default function Footer() {
  return (
    <footer className="bg-light mt-auto py-4">
      <div className="container text-center">
        {/* Contact Section */}
        <div className="row">
          <div className="col-12 col-md-4 text-start">
            <p className="fw-bold mb-1">Phone</p>
            <p className="text-muted mb-0">+40720598448</p>
          </div>
          <div className="col-12 col-md-4 text-start">
            <p className="fw-bold mb-1">Email</p>
            <p className="text-muted mb-0">andreyka.gutsan@gmail.com</p>
          </div>
          <div className="col-12 col-md-4 text-start">
            <p className="fw-bold mb-1">Follow Me</p>
            <div className="text-muted">
              <a
                href="https://www.linkedin.com/in/andrei-hutsan-6b000b236/"
                className="me-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin" />
              </a>
              <a
                href="https://github.com/Hiuzton"
                className="me-1 text-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github" />
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-4"></div>

        {/* Footer Text */}
        <p className="text-muted small">© 2025 By Hutsan Andrei.</p>
      </div>
    </footer>
  );
}
