"use client";
import { useState } from "react";
import EventList from "../components/EventList";
import EventAdd from "../components/EventAdd";
import BottomNav from "../components/BottomNav";
import Modal from "../components/Modal";

export default function Home() {
  const [activePage, setActivePage] = useState("events");
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1); // Track modal step

  // Functions for navigation inside the modal
  const prevStepFunction = () => setStep((prev) => Math.max(prev - 1, 1));
  const nextStepFunction = () => setStep((prev) => prev + 1);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Show Event List when on Home */}
      {activePage === "events" && <EventList />}

      {/* Show Modal for Adding Event */}
      {showModal && (
        <Modal closeModal={() => setShowModal(false)} prevStep={prevStepFunction} nextStep={nextStepFunction}>
          <EventAdd step={step} nextStep={nextStepFunction} prevStep={prevStepFunction} />
        </Modal>
      )}

      {/* Bottom Navigation (Handles Page Switching & Opening Modal) */}
      <BottomNav setActivePage={setActivePage} setShowModal={setShowModal} />
    </div>
  );
}
