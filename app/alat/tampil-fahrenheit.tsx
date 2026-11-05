export default function TampilFahrenheit({ celcius }: { celcius: number }) {
  const fahrenheit = (celcius * 9) / 5 + 32;

  return (
    <p>
      {celcius}°C = {fahrenheit}°F
    </p>
  );
}
