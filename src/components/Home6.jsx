import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home6 = () => {
    const navigate = useNavigate();
  return (
    <div className="container">
        <p>Page 6</p>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button className="page-button" onClick={() => navigate('/home5')}> ⬅️ </button>
            <button className="page-button" onClick={() => navigate('/')}>➡️</button>
        </div>    
      <h1 className="title-box">RS485 & MAX485 Integration with ESP32 for NPK Sensor</h1>

      <section>
        <h2>1. Overview: RS485 Protocol</h2>
        <p>RS485 is a widely used industrial communication standard that supports:</p>
        <ul>
          <li><strong>Differential signaling:</strong> High noise immunity over long distances</li>
          <li><strong>Half-duplex communication:</strong> One device transmits at a time</li>
          <li><strong>Multi-drop support:</strong> Up to 32 nodes on a single bus (multi-drop).</li>
          <li><strong>Long-range:</strong> Up to 1200 meters over twisted pair cable</li>
          <p><strong>Typical applications</strong> include soil NPK sensors and industrial actuators.</p>
        </ul>
        
      </section>

      <section>
        <h2>2. MAX485 Transceiver Module</h2>
        <p>
          The <strong>MAX485</strong> is a TTL-to-RS485 transceiver IC that allows a microcontroller (e.g., ESP32) to communicate over the RS485 protocol.
        </p>

        <h4>Key MAX485 Pins</h4>
        <table className="report-table">
          <thead>
            <tr>
              <th>Pin</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>RO</td><td>Receiver Output (to MCU RX)</td></tr>
            <tr><td>DI</td><td>Driver Input (from MCU TX)</td></tr>
            <tr><td>DE</td><td>Driver Enable (HIGH to transmit)</td></tr>
            <tr><td>RE</td><td>Receiver Enable (LOW to receive)</td></tr>
            <tr><td>A/B</td><td>RS485 bus differential lines</td></tr>
            <tr><td>VCC</td><td>Power (typically 5V)</td></tr>
            <tr><td>GND</td><td>Ground</td></tr>
          </tbody>
        </table>

        <p><strong>Note:</strong> DE and RE are often connected together to switch between transmit and receive mode..</p>
      </section>

      <section>
        <h2>3. Wiring: ESP32 + MAX485 + NPK Sensor</h2>
        <table className="report-table">
          <thead>
            <tr>
              <th>Module</th>
              <th>Pin</th>
              <th>Connects To</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>ESP32</td><td>GPIO18</td><td>MAX485 DI</td></tr>
            <tr><td>ESP32</td><td>GPIO19</td><td>MAX485 RO</td></tr>
            <tr><td>ESP32</td><td>GPIO5</td><td>MAX485 DE & RE</td></tr>
            <tr><td>ESP32</td><td>GND</td><td>MAX485 GND</td></tr>
            <tr><td>ESP32</td><td>5V</td><td>MAX485 VCC</td></tr>
            <tr><td>MAX485</td><td>A/B</td><td>NPK Sensor RS485 A/B lines</td></tr>
            <tr><td>NPK Sensor</td><td>VCC/GND</td><td>5V/GND (same as MAX485)</td></tr>
          </tbody>
        </table>
        <p>
          This setup uses HardwareSerial RS485(2) on GPIO18(RX2) and GPIO19(TX2). GPIO5 is used to control DE/RE for direction switching.
        </p>
      </section>

      <section>
        <h2>4. Communication Protocol: MODBUS RTU</h2>
        <h4> MODBUS RTU Network Roles</h4>
        <ul>
          <li><strong>Master:</strong>  Controls the communication (e.g., your ESP32)</li>
          <li><strong>Slave:</strong> Responds to requests (e.g., your NPK sensor)</li>
          <li>Only one master, but can have many slaves (up to 32 typical)</li>
        </ul>
        <p>Every MODBUS RTU message (request or response) is a <strong>frame</strong> of bytes:</p>
        <strong>[ Slave Address ][ Function Code ][ Data ][ CRC ]</strong>

        <p>Most NPK sensors using RS485 communicate over <strong>MODBUS RTU</strong>, a binary protocol with the following structure:</p>

        <table className="report-table">
          <thead>
            <tr>
              <th>Byte Offset</th>
              <th>Field</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>0</td><td>Slave Address</td><td>Sensor device ID (e.g., 0x01)</td></tr>
            <tr><td>1</td><td>Function Code</td><td>0x03 = Read Holding Registers</td></tr>
            <tr><td>2–3</td><td>Start Address</td><td>e.g., 0x00, 0x10</td></tr>
            <tr><td>4–5</td><td>Register Count</td><td>e.g., 0x00, 0x03 for 3 values</td></tr>
            <tr><td>6–7</td><td>CRC16</td><td>Error checking code</td></tr>
          </tbody>
        </table>

        <p>
          <strong>Example MODBUS command to request register Nitrogen:</strong><br />
          <code>0x01, 0x03, 0x00, 0x1E, 0x00, 0x01, 0xE4, 0x0C</code>
        </p>
      </section>

      <section>
        <h2>5. ESP32 Code Example</h2>
        <p>
          A working implementation of RS485 communication for NPK sensors is available on GitHub:
          <br />
          <a href="https://github.com/ductrung0511/Soil_Nutrition_Device/blob/main/src/main.cpp" target="_blank" rel="noopener noreferrer">
            https://github.com/ductrung0511/Soil_Nutrition_Device/blob/main/src/main.cpp
          </a>
        </p>
      </section>
    </div>
  );
};

export default Home6;
