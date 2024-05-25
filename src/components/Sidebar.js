import { useState } from 'react'
import './css/Sidebar.css'

export default function Sidebar({ categories, onSelectCategory }) {
    const [selectedCategory, setSelectedCategory] = useState(null)

    const handleClick = (category) => {
        onSelectCategory(category)
        setSelectedCategory(category)
    };

    return (
        <div className="sidebar">
            {categories.map((category, index) => (
                <p
                    key={index}
                    className={`category ${category === selectedCategory ? 'selected' : ''}`}
                    onClick={() => handleClick(category)}
                >
                    {category}
                </p>
            ))}
        </div>
    );
}