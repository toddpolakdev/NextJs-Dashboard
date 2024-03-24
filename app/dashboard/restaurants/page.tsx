'use client';

import { gql, useQuery } from '@apollo/client';

const GET_RESTAURANTS = gql`
  query GetRestaurants {
    restaurants {
      name
    }
  }
`;

interface Restaurant {
  id: string;
  name: string;
}

interface RestaurantData {
  restaurants: Restaurant[];
}

interface Props {
  restaurants: Restaurant[];
}

export default function Page() {
  const { loading, error, data, refetch } = useQuery(GET_RESTAURANTS);

  if (error) {
    return <div>Error loading restaurants</div>;
  }

  return (
    <div>
      <h1>Restaurants</h1>
      {loading && <div>Loading...</div>}
      <ul>
        {data?.restaurants.map((restaurant: any) => (
          <li key={restaurant?.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
}
