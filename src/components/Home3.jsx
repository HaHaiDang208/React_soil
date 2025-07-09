import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home3 = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <p>Page 3</p>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button className="page-button" onClick={() => navigate('/')}>Go to Page 1</button>
        <button className="page-button" onClick={() => navigate('/home2')}>Go to Page 2</button>
      </div>
      <h1 className="title-box">GPS Module Integration with a Microprocessor (Neo-6M)</h1>

      <section>
        <p>
          The Neo-6M GPS module is a compact, high-performance device that provides real-time geospatial data including latitude, longitude,
          altitude, and time. It is widely used in location-based applications such as tracking systems and environmental monitoring.
          This project utilizes the module to extract the location of the NPK sample for later precision fertilization.
        </p>
      </section>

      <section>
        <h2>1. Hardware Connections</h2>
        <ul>
          <li><strong>VCC →</strong> Connect to 5V power supply</li>
          <li><strong>GND →</strong> Connect to ground</li>
          <li><strong>TX (GPS) →</strong> Connect to RX pin on the microcontroller (e.g., GPIO 16)</li>
          <li><strong>RX (GPS) →</strong>Connect to TX pin on the microcontroller (e.g., GPIO 17) - Though the module will not need to receive data from the microcontroller as it automatically sends back GPS data as soon as satellite signals are received.
          </li>
          <li><strong>Antenna →</strong>Use an external GPS antenna facing open sky (ceramic side up, no metal obstruction) for optimal satellite signal reception.</li>
        </ul>
      </section>
          <img src="https://cdn.discordapp.com/attachments/1318416746968776755/1392410715251413062/image.png?ex=686f6f08&is=686e1d88&hm=b9ea7f924508e61fdaa3f27b904e8c2d58b2c292895fd83ff8f1d945c2c8a439&" 
            alt="Soil" className="centered-img-block" 
            style={{ width: "500px", height: "300px" }}/>
      <section>
        <h2>2. Communication Protocol</h2>
        <li>
          The Neo-6M outputs NMEA sentences (e.g., <code>$GPGGA</code>, <code>$GPRMC</code>) at a default baud rate of 9600.
        </li>
        <li>Typical setup code on ESP32:</li>
        <div style ={{color: 'blue' , backgroundColor: 'lightgray', padding: '10px', borderRadius: '5px'}}>
        <pre>
            {`HardwareSerial GPSSerial(1);  
            GPSSerial.begin(9600, SERIAL_8N1, 25, -1);  // RX = 25, no TX`}
        </pre>
        </div>
        <li>
          The GPS begins sending data once it locks onto satellites. No additional configuration is needed for basic use cases.
        </li>
      </section>

      <section>
        <h2>3. Data Parsing</h2>
        <li>
          Use libraries like <strong>TinyGPS++</strong> to decode raw NMEA strings into usable GPS data.
        </li>
        <p>Example code to extract coordinates:</p>
        <div style ={{color: 'blue' , backgroundColor: 'lightgray', padding: '10px', borderRadius: '5px'}}>
        <pre>
            {`if (gps.location.isValid()) {
                float latitude = gps.location.lat();
                float longitude = gps.location.lng();
            }`}
        </pre>
        </div>
      </section>

      <section>
        <h2>4. Geospatial Monitoring</h2>
        <p>
          By combining GPS coordinates with sensor data (e.g., soil moisture, NPK), the system can create location-tagged datasets for agriculture,
          environmental monitoring, or asset tracking.
        </p>
      </section>

      <section>
        <h2>5. Integration with Supabase</h2>
        <ul>
          <li><strong>Location Formatting:</strong> Format GPS coordinates as <code>longitude latitude</code></li>
          <li><strong>Data Transmission:</strong> Send data to Supabase via HTTP POST in JSON format including the location fields.</li>
        </ul>
      </section>


    </div>
  );
};

export default Home3;
