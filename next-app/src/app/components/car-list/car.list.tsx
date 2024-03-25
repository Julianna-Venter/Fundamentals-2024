interface Car {
  id: string;
  make: string;
  model: string;
  registration: string;
  owner: string;
}

const carList = await fetch("http://localhost:5000/cars", {
  next: { revalidate: 0 },
});
const carListData: Car[] = await carList.json();

async function CarList() {
  return (
    <ul>
      {carListData.map((car) => (
        <li key={car.id} className="text-xl mb-5">
          <p>{car.owner}</p>
          <p>{car.model}</p>
          <p>{car.make}</p>
          <p>{car.registration}</p>
        </li>
      ))}
    </ul>
  );
}

export default CarList;
