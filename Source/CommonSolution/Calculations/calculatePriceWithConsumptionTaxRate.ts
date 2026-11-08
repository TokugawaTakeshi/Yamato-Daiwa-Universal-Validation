export default function calculatePriceWithConsumptionTaxRate(
  {
    price__yens__excludingConsumptionTax,
    consumptionTaxRate
  }: Readonly<{
    price__yens__excludingConsumptionTax: number;
    consumptionTaxRate: number;
  }>
): number {
  return price__yens__excludingConsumptionTax + Math.round(consumptionTaxRate * price__yens__excludingConsumptionTax);
}
