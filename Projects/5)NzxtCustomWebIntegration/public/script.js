// Controleer of het de Kraken Browser is
const searchParams = new URLSearchParams(window.location.search);
const isKrakenBrowser = searchParams.get("kraken") === "1";

if (isKrakenBrowser) {
  // Voeg de onMonitoringDataUpdate functie toe om gegevens van CAM te ontvangen
  window.nzxt = {
  v1: {
    onMonitoringDataUpdate: (data) => {
      const { cpus, gpus, power } = data;
      let totalCpuPower = 0;
      let totalGpuPower = 0;

      // CPU data
      if (cpus && cpus.length > 0) {
        const cpu = cpus[0]; // Gebruik de eerste CPU in de lijst
        const roundedCpuTemp = Math.round(cpu.temperature); // Rond de temperatuur af naar een heel getal
        document.getElementById("cpuTemp").innerText = `${roundedCpuTemp}`;

        // Voeg CPU-stroomverbruik toe als beschikbaar
        if (cpu.power) {
          totalCpuPower = cpu.power;
        }
      }

      // GPU data
      if (gpus && gpus.length > 0) {
        const selectedGpu = gpus[1] ? gpus[1] : gpus[0]; // Gebruik gpus[1] als die beschikbaar is, anders gpus[0]
        const roundedGpuTemp = Math.round(selectedGpu.temperature); // Rond de temperatuur af naar een heel getal
        document.getElementById("gpuTemp").innerText = `${roundedGpuTemp}`;

        // Voeg GPU-stroomverbruik toe als beschikbaar
        if (selectedGpu.power) {
          totalGpuPower = selectedGpu.power;
        }
      }

      // Bereken het totale stroomverbruik (CPU + GPU)
      const totalPowerUsage = Math.round(totalCpuPower + totalGpuPower);

      // Toon het totale stroomverbruik
      if (totalPowerUsage > 0) {
        document.getElementById("totalPowerUsage").innerText = `${totalPowerUsage}`;
      } else {
        document.getElementById("totalPowerUsage").innerText = 'N/A';
      }
    },
  },
};













  // Verberg het welkomscherm na 5 seconden
  setTimeout(() => {
    document.getElementById("welcomeScreen").style.opacity = 0;
    setTimeout(() => {
      document.getElementById("welcomeScreen").style.display = 'none';
    }, 1000); // 1 seconde om te wachten tot de overgang is voltooid
  }, 5000); // 5 seconden om het welkomscherm weer te geven
} else {
  alert("Dit is niet de Kraken Browser");
}















