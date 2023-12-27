import React from "react";
import "../styles/ticket.css";
const Ticket = ({ index }) => {
  return (
    <div class="ticket-visual_visual" id="ticket">
      <div class="left"></div>
      <div class="right"></div>
      <div class="ticket-visual-wrapper">
        <div class="ticket-visual_profile">
          <div class="ticket-profile_profile">
            <img
              src="https://github.com/medhatdawoud.png"
              alt="medhatdawoud"
              class="ticket-profile_image"
            />
            <div class="ticket-profile_text">
              <p class="ticket-profile_name">Aman</p>
              <p class="ticket-profile_username">
                <span class="ticket-profile_githubIcon">
                  <img src="./github.svg" alt="" />
                </span>
                devaman
              </p>
            </div>
          </div>
          <div class="ticket-event">
            <img src="./event-logos.png" />
          </div>
        </div>
        <div class="ticket-visual_ticket-number-wrapper">
          <div class="ticket-visual_ticket-number">№ 014747</div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
