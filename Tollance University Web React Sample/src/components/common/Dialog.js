
import React from 'react';

const Dialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.dialog}>
        <h2> Are you sure you want to cancel? All entered 
data will be lost</h2>
        <p> Press "Yes" to clear all data or "No" continue 
f
 illing out the form</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    background: '#fff',
    padding: '20px',
    borderRadius: '5px',
    minWidth: '300px',
  },
};

export default Dialog;
