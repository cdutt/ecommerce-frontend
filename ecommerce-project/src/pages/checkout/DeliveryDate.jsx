import dayjs from "dayjs";
export function deliveryDate({ selectedDeliveryOption }) {
  return (
    <div className="delivery-date">
      Delivery date:
      {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
        "dddd, MMMM, D",
      )}
    </div>
  );
}
