export default function InputCelcius({
  nilai,
  saatBerubah,
}: {
  nilai: number;
  saatBerubah: (angka: number) => void;
}) {
  return (
    <label>
      Suhu Celsius:
      <input type="number" value={nilai} onChange={(e) => saatBerubah(Number(e.target.value))} />
    </label>
  );
}
