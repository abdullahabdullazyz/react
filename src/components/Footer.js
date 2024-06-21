import React from 'react';
import { FaTelegramPlane, FaGithub, FaFacebook, FaEnvelope } from 'react-icons/fa';


function SocialIcons() {
  return (
    <div style={styles.container}>
      <FaTelegramPlane style={styles.icon} size={40} color="#0088cc" />
      <FaGithub style={styles.icon} size={40} color="#333" />
      <FaEnvelope style={styles.icon} size={40} color="#D44638" />
      <FaFacebook style={styles.icon} size={40} color="#3b5998" />
    </div>
  );
}


const styles = {
  container: {
    width:"100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position:"fixed",
    zIndex:"12",
    bottom:"0",
    
  },
  icon: {
    margin: '0 10px', // إضافة مسافة بين الأيقونات
  }
};

export default SocialIcons;