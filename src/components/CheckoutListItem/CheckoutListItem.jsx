import { useSelector } from "react-redux";

export default function CheckoutListItem() {
    const customer = useSelector((store) => store.customerReducer);
  return (
    // <tr>
    //   <td>{customer.name}</td>
    //   <td>{customer.address}</td>
    //   <td>{customer.city}</td>
    //   <td>{customer.zip}</td>
    //   <td>{customer.DeliveryMethod}</td>
    // </tr>
    <tbody>
        <tr>
          <td id="td">{customer.name}</td>
          <td id="td">{customer.address}</td>
          <td id="td">{customer.city}</td>
          <td id="td">{customer.zip}</td>
          <td id="td">{customer.DeliveryMethod}</td>
        </tr>
    </tbody>
  );
}
