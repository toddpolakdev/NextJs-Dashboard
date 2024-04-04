'use client';

// import { gql, useQuery } from '@apollo/client';
// import TechnologiesByCategory from '../../ui/technologies/technology-by-category';

// const GET_TECHNOLOGIES = gql`
//   query GetTechnologies {
//     technologies {
//       id
//       category
//       technology {
//         name
//         description
//         url
//       }
//     }
//   }
// `;

// interface TechnologyDetail {
//   name: string;
//   description: string;
//   url: string;
// }

// interface TechnologyItem {
//   id: string;
//   category: string;
//   technology: TechnologyDetail[];
// }

// interface TechnologiesData {
//   technologies: TechnologyItem[];
// }

// export default function Page() {
//   const { loading, error, data, refetch } =
//     useQuery<TechnologiesData>(GET_TECHNOLOGIES);

//   console.log('data', data);

//   if (error) return <div>Error loading technologies</div>;

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>Technologies</h1>
//       <TechnologiesByCategory technologies={data?.technologies || []} />
//     </div>
//   );
// }

import { gql, useQuery } from '@apollo/client';
// import { useRouter } from 'next/router';
import React from 'react';

// Define your GraphQL query with gql tag
const GET_TECHNOLOGIES_BY_CATEGORY = gql`
  query GetTechnologiesByCategory($category: String!) {
    technologies(category: $category) {
      id
      category
      technology {
        name
        description
        url
      }
    }
  }
`;

// TypeScript interfaces for the GraphQL query response and variables
interface TechnologyDetail {
  name: string;
  description: string;
  url: string;
}

interface Technology {
  id: string;
  category: string;
  technology: TechnologyDetail[];
}

interface GetTechnologiesByCategoryData {
  technologies: Technology[];
}

interface GetTechnologiesByCategoryVars {
  category: string;
}

// export default function Page(props: any) {
//   console.log('props', props);
//   return <></>;
export default function Page({ params }: { params: { category: string } }) {
  // const router = useRouter();
  const category = params.category;

  console.log('category', params.category);

  // Use Apollo's useQuery hook to fetch technologies by category
  const { data, loading, error } = useQuery<
    GetTechnologiesByCategoryData,
    GetTechnologiesByCategoryVars
  >(GET_TECHNOLOGIES_BY_CATEGORY, {
    variables: { category: category?.toUpperCase() || '' }, // Ensure category is a string; adjust based on your logic for undefined cases
    skip: !category, // Optionally skip the query if category is undefined
  });

  console.log('data', data);

  if (loading) return <p>Loading...</p>;

  // return <div>{`Category: ${params.category}`}</div>;
  return (
    <div>
      <h1>{category.toUpperCase()} Technologies</h1>
      <ul>
        {data?.technologies.map((tech) => (
          <li key={tech.id}>
            {tech.technology.map((detail) => (
              <p key={detail.name}>
                {detail.name}: {detail.description}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

// export default CategoryPage;

//   if (!category) return <p>Category not found</p>;
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading technologies: {error.message}</p>;

//   return (
//     <div>
//       <h1>Technologies in {category}</h1>
//       <ul>
//         {data?.technologies.map((tech) => (
//           <li key={tech.id}>
//             <h2>{tech.category}</h2>
//             {tech.technology.map((detail) => (
//               <p key={detail.name}>
//                 {detail.name}: {detail.description}
//               </p>
//             ))}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CategoryPage;
