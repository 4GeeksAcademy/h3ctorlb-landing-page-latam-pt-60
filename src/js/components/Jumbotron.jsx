import React from "react";

const Jumbotron = () => {
  const backgroundStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1552001643-8739184439bd?q=80&w=1196&auto=format&fit=crop')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "400px",
  };

  return (
    <div className="p-5 text-white" style={backgroundStyle}>
      <div className="container py-5">
        <h1 className="display-4 fw-bold">A Warm Welcome!</h1>
        <p className="col-md-8 fs-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam,
          eligendi, in quo sunt possimus non incidunt odit vero aliquid
          similique quaerat nam nobis illo aspernatur vitae fugiat numquam
          repellat.
        </p>
        <a href="#" className="btn btn-primary btn-lg">
          Call to action!
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;
