import { Link } from "react-router"; // Adjust if you are using 'react-router-dom'

export function OrderDetailsGrid({ order, loadCart }) {
  return (
    <div className="order-details-grid">
      {order.products.map((orderProduct) => {
        const { product, quantity, estimatedDeliveryTimeMs } = orderProduct;

        // Optional: Format the delivery date if needed for your UI
        const deliveryDate = new Date(
          estimatedDeliveryTimeMs,
        ).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
        });

        return (
          <div
            key={product.id}
            className="order-details-container"
            data-testid="order-product-details"
            style={{ display: "contents" }}
          >
            <div className="product-image-container">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="product-details">
              <div className="product-name">{product.name}</div>
              <div className="product-delivery-date">
                Arriving on: {deliveryDate}
              </div>
              <div className="product-quantity">Quantity: {quantity}</div>
              <button
                className="buy-again-button button-primary"
                onClick={() => loadCart && loadCart(product.id, quantity)}
              >
                <span className="buy-again-text">Buy it again</span>
              </button>
            </div>

            <div className="product-actions">
              <Link
                to={`/tracking?orderId=${order.id}&productId=${product.id}`}
              >
                <button className="track-package-button button-secondary">
                  Track package
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
