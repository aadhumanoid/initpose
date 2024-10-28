function convert(input) {
  const nilaiServo = parseInt(input.value) || 0;
  const rad = ((nilaiServo - 2048) * 3.14) / 2048;
  const deg = (rad * 180) / 3.14;

  const row = input.closest("tr");
  row.querySelector(".rad").textContent = rad.toFixed(2);
  row.querySelector(".deg").textContent = deg.toFixed(2);
}

function downloadYAML() {
  const tableRows = document.querySelectorAll("tbody tr");
  const servoValues = [];

  // Ambil nilai deg dari setiap servo
  tableRows.forEach((row, index) => {
    const degValue = row.querySelector(".deg").textContent; // Ambil dari elemen deg
    servoValues[index + 1] = degValue || "0.0"; // Default to 0.0 if empty
  });

  // Template data YAML dengan nilai deg yang diperbarui
  const data = `
head_pan:       ${servoValues[19] || 0.0}  #Servo19
head_tilt:      ${servoValues[20] || -10.0}  #Servo20
l_ank_pitch:    ${servoValues[16] || 70.0}  #Servo16
l_ank_roll:     ${servoValues[18] || 0.0}  #Servo18
l_el:           ${servoValues[6] || -45.0}  #Servo6
l_hip_pitch:    ${servoValues[12] || -70.0}  #Servo12
l_hip_roll:     ${servoValues[10] || 0.0}  #Servo10
l_hip_yaw:      ${servoValues[8] || 0.0}  #Servo8
l_knee:         ${servoValues[14] || 142.0}  #Servo14
l_sho_pitch:    ${servoValues[2] || -15.0}  #Servo2
l_sho_roll:     ${servoValues[4] || 45.0}  #Servo4
r_ank_pitch:    ${servoValues[15] || -70.0}  #Servo15
r_ank_roll:     ${servoValues[17] || 0.0}  #Servo17
r_el:           ${servoValues[5] || 45.0}  #Servo5
r_hip_pitch:    ${servoValues[11] || 70.0}  #Servo11
r_hip_roll:     ${servoValues[9] || 0.0}  #Servo9
r_hip_yaw:      ${servoValues[7] || 0.0}  #Servo7
r_knee:         ${servoValues[13] || -142.0}  #Servo13
r_sho_pitch:    ${servoValues[1] || 15.0}  #Servo1
r_sho_roll:     ${servoValues[3] || -45.0}  #Servo3
`;

  const blob = new Blob([data], { type: "text/yaml" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "pose.yaml";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
