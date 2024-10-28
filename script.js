function convert(input) {
  const nilaiServo = parseInt(input.value) || 0;
  const rad = ((nilaiServo - 2048) * 3.14) / 2048;
  const deg = (rad * 180) / 3.14;

  const row = input.closest("tr");
  row.querySelector(".rad").textContent = rad.toFixed(2);
  row.querySelector(".deg").textContent = deg.toFixed(2);
}

function updateValues(input, type) {
  const row = input.closest("tr");
  const servoInput = row.querySelector("td:nth-child(2) input");
  const radInput = row.querySelector("td:nth-child(3) input");
  const degInput = row.querySelector("td:nth-child(4) input");

  let servoValue, radValue, degValue;

  switch (type) {
    case "servo":
      // Konversi dari nilai servo ke rad dan deg
      servoValue = parseInt(servoInput.value) || 0;
      radValue = ((servoValue - 2048) * 3.14) / 2048;
      degValue = (radValue * 180) / 3.14;
      break;

    case "rad":
      // Konversi dari nilai rad ke servo dan deg
      radValue = parseFloat(radInput.value) || 0;
      servoValue = Math.round((radValue * 2048) / 3.14 + 2048);
      degValue = (radValue * 180) / 3.14;
      break;

    case "deg":
      // Konversi dari nilai deg ke servo dan rad
      degValue = parseFloat(degInput.value) || 0;
      radValue = (degValue * 3.14) / 180;
      servoValue = Math.round((radValue * 2048) / 3.14 + 2048);
      break;
  }

  // Update nilai pada kolom lain
  servoInput.value = servoValue;
  radInput.value = radValue.toFixed(2);
  degInput.value = degValue.toFixed(2);
}
