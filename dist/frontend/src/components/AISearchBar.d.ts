import React from 'react';
interface AISearchBarProps {
    onCriteriaChange: (criteria: {
        city?: string;
        type?: string;
        maxPrice?: number;
        bedrooms?: number;
        query?: string;
    }) => void;
}
export declare const AISearchBar: React.FC<AISearchBarProps>;
export {};
