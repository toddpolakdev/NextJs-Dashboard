import React from 'react';

interface TechnologyDetail {
  name: string;
  description: string;
  url: string;
}

interface TechnologyItem {
  id: string;
  category: string;
  technology: TechnologyDetail[];
}

interface TechnologiesByCategoryProps {
  technologies: TechnologyItem[];
}

const TechnologiesByCategory: React.FC<TechnologiesByCategoryProps> = ({
  technologies,
}) => {
  return (
    <div className="border-2">
      {technologies.map((technologyItem) => (
        <div key={technologyItem.id}>
          <h2>{technologyItem.category}</h2>
          <ul>
            {technologyItem.technology.map((detail, index) => (
              <li key={index}>
                {' '}
                {/* Using index as key since name might not be unique */}
                <a href={detail.url} target="_blank" rel="noopener noreferrer">
                  {detail.name}
                </a>
                : {detail.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TechnologiesByCategory;
