import React from 'react';
import Card from './Card';
import '../../CSS/CardGrid.css';

const CardGrid = () => {
  const cards = [
    {
      image: 'https://images.unsplash.com/photo-1643233948547-b0fbb4368089?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'إسم المنتج',
      description: 'تفاصيل المنتج.',
    },
    {
      image: 'https://images.unsplash.com/photo-1643148636642-b2b4dd77a2bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'إسم المنتج',
      description: 'تفاصيل المنتج.',
    },
    {
      image: 'https://images.unsplash.com/photo-1682774774505-2496b7107727?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'إسم المنتج',
      description: 'تفاصيل المنتج',
    },
    {
        image: 'https://images.unsplash.com/photo-1682774783910-782f454efdb8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'إسم المنتج',
        description: 'تفاصيل المنتج.',
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1683140513388-4344c8fc2778?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'إسم المنتج',
        description: 'تفاصيل المنتج.',
    },
    {
        image: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1409&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'إسم المنتج',
        description: 'تفاصيل المنتج.',
    },
    {
        image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'إسم المنتج',
        description: 'تفاصيل المنتج.',
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1683141443663-503f4140c667?q=80&w=1567&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'إسم المنتج',
        description: 'تفاصيل المنتج.',
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1683121158319-acc40c6ef3b2?q=80&w=1432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'إسم المنتج',
      description: 'تفاصيل المنتج.',
    },
  ];

  return (
    <div id='products'>
      <h2>تصفح الأثاث</h2>
      <div className="card-grid">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <a href="#get-started" className="slider-button">المزيد</a>
    </div>
  );
};

export default CardGrid;