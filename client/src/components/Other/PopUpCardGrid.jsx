import React from 'react';
import { useInView } from 'react-intersection-observer';
import PopUpCard from './PopUpCard';
import '../../CSS/PopUpCardGrid.css';

import { GiSofa } from "react-icons/gi";
import { GiNightSleep } from "react-icons/gi";
import { MdHighQuality } from "react-icons/md";

const PopUpCardGrid = () => {
  const { ref: cardRef1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: cardRef2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: cardRef3, inView: inView3 } = useInView({ triggerOnce: true });

  const cards = [
    {
      image: 'https://plus.unsplash.com/premium_photo-1682309834966-485aedc99be5?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'الجودة والتميز',
      description: 'نلتزم بتقديم أعلى معايير الجودة في كل قطعة أثاث نصنعها. من المواد المستخدمة إلى التصاميم المتقنة، نسعى إلى تحقيق التميز الذي يدوم لسنوات.',
      icon: <MdHighQuality />,
      ref: cardRef1,
      inView: inView1
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1682309522193-ee370361dada?q=80&w=1567&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'الابتكار والإبداع',
      description: 'نؤمن بأن الأثاث يجب أن يكون تعبيراً عن الذوق الشخصي والإبداع. نقدم تصاميم مبتكرة تتناسب مع الأساليب الحديثة والكلاسيكية، لتجعل منازل عملائنا فريدة.',
      icon: <GiSofa/>,
      ref: cardRef2,
      inView: inView2
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1673548917645-e8d9ed21e2b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'الراحة والوظيفة',
      description: 'هدفنا هو خلق بيئة مريحة وعملية في الوقت ذاته. نختار بعناية القطع التي تجمع بين الراحة والوظيفة لتلبية احتياجاتك اليومية وتوفير مساحات مريحة وجميلة.',
      icon: <GiNightSleep />,
      ref: cardRef3,
      inView: inView3
    }
  ];

  return (
    <div id='popupcardcontainer'>   
      <h2>قيمنا</h2> 
      <div className="popcard-grid">
        {cards.map((card, index) => (
          <div ref={card.ref} key={index}>
            <PopUpCard
              image={card.image}
              title={card.title}
              description={card.description}
              icon={card.icon}
              isVisible={card.inView}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopUpCardGrid;