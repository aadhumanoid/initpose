function convert(input) {
  const nilaiServo = parseInt(input.value) || 0;
  const rad = ((nilaiServo - 2048) * 3.14) / 2048;
  const deg = (rad * 180) / 3.14;

  const row = input.closest("tr");
  row.querySelector(".rad").textContent = rad.toFixed(2);
  row.querySelector(".deg").textContent = deg.toFixed(2);
}
