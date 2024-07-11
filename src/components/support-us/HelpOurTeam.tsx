import React from "react";
import Card from "./Card";

function HelpOurTeam() {
  return (
    <div className="flex flex-col items-center gap-8 md:px-20">
      <h2 className="text-3xl md:text-5xl text-center font-bold text-primary">
        Ways you could help our team
      </h2>
      <div className="flex flex-col gap-4 md:flex-row w-full">
        <Card
          title="Join our team and make an impact with us"
          subtitle="Subtitle"
          body="Some quick example text to build on the card title and make up the bulk of the card's content."
          img="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
          href="#"
        />
        <div className="flex flex-col gap-4 md:w-1/2 shrink-0 h-full">
          <Card
            title="Donate as an industry"
            subtitle="Something something that identifies as an industry"
            body="Some quick example text to build on the card title and make up the bulk of the card's content."
            href="#"
          />
          <Card
            title="Donate as an individual"
            subtitle="Something something that identifies as an industry"
            body="Some quick example text to build on the card title and make up the bulk of the card's content."
            href="#"
          />
        </div>
      </div>
    </div>
  );
}

export default HelpOurTeam;
