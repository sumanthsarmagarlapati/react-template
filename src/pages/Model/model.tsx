import { useState } from "react";
import "./model.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalUsage = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

 return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3>Model Head</h3>
        <p>Pop Infomartion Body</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const Model = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h2>Modal Example</h2>

      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      <ModalUsage isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Model;
