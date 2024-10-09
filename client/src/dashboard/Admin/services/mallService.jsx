// Dummy data for malls
const dummyMalls = [
  {
      id: 1,
      name: 'City Mall',
      address: '123 Main St, Springfield',
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13689.089251183399!2d31.15958365!3d30.934958250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb74340bac1f%3A0x4bc6585259ee275a!2z2YXYr9ix2LPYqSDYrNmI2K_YqSDYp9mE2YbYp9iv2Yog2YTZhNiq2LnZhNmK2YUg2KfZhNij2LPYp9iz2Yo!5e0!3m2!1sar!2seg!4v1728475750168!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      active: false,
      coverImage: 'https://plus.unsplash.com/premium_photo-1661340695541-ee1ca7efedd0?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A bustling mall in the heart of Springfield, offering a wide variety of shops and services.'
  },
  {
      id: 2,
      name: 'Town Center',
      address: '456 Elm St, Springfield',
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13689.089251183399!2d31.15958365!3d30.934958250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb74340bac1f%3A0x4bc6585259ee275a!2z2YXYr9ix2LPYqSDYrNmI2K_YqSDYp9mE2YbYp9iv2Yog2YTZhNiq2LnZhNmK2YUg2KfZhNij2LPYp9iz2Yo!5e0!3m2!1sar!2seg!4v1728475750168!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      active: false,
      coverImage: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A popular shopping destination with a mix of local and international brands.'
  },
  {
      id: 3,
      name: 'Shopping Plaza',
      address: '789 Maple Ave, Springfield',
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13689.089251183399!2d31.15958365!3d30.934958250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb74340bac1f%3A0x4bc6585259ee275a!2z2YXYr9ix2LPYqSDYrNmI2K_YqSDYp9mE2YbYp9iv2Yog2YTZhNiq2LnZhNmK2YUg2KfZhNij2LPYp9iz2Yo!5e0!3m2!1sar!2seg!4v1728475750168!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      active: true,
      coverImage: 'https://images.unsplash.com/photo-1504802318913-d3f9a487448c?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A large open plaza with multiple retail outlets, cafes, and a relaxing atmosphere.'
  },
  {
      id: 4,
      name: 'The Grand Mall',
      address: '101 Oak St, Springfield',
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13689.089251183399!2d31.15958365!3d30.934958250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb74340bac1f%3A0x4bc6585259ee275a!2z2YXYr9ix2LPYqSDYrNmI2K_YqSDYp9mE2YbYp9iv2Yog2YTZhNiq2LnZhNmK2YUg2KfZhNij2LPYp9iz2Yo!5e0!3m2!1sar!2seg!4v1728475750168!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      active: false,
      coverImage: 'https://plus.unsplash.com/premium_photo-1661340695541-ee1ca7efedd0?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Known for its grand architecture, this mall offers a luxurious shopping experience.'
  },
  {
      id: 5,
      name: 'Retail Park',
      address: '102 Pine St, Springfield',
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13689.089251183399!2d31.15958365!3d30.934958250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb74340bac1f%3A0x4bc6585259ee275a!2z2YXYr9ix2LPYqSDYrNmI2K_YqSDYp9mE2YbYp9iv2Yog2YTZhNiq2LnZhNmK2YUg2KfZhNij2LPYp9iz2Yo!5e0!3m2!1sar!2seg!4v1728475750168!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      active: false,
      coverImage: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A family-friendly retail park with ample parking and a variety of stores.'
  },
  {
      id: 6,
      name: 'City Mall',
      address: '123 Main St, Springfield',
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13689.089251183399!2d31.15958365!3d30.934958250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb74340bac1f%3A0x4bc6585259ee275a!2z2YXYr9ix2LPYqSDYrNmI2K_YqSDYp9mE2YbYp9iv2Yog2YTZhNiq2LnZhNmK2YUg2KfZhNij2LPYp9iz2Yo!5e0!3m2!1sar!2seg!4v1728475750168!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      active: true,
      coverImage: 'https://images.unsplash.com/photo-1504802318913-d3f9a487448c?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A modern mall with everything from fashion outlets to fine dining.'
  },
  {
      id: 7,
      name: 'Town Center',
      address: '456 Elm St, Springfield',
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13689.089251183399!2d31.15958365!3d30.934958250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb74340bac1f%3A0x4bc6585259ee275a!2z2YXYr9ix2LPYqSDYrNmI2K_YqSDYp9mE2YbYp9iv2Yog2YTZhNiq2LnZhNmK2YUg2KfZhNij2LPYp9iz2Yo!5e0!3m2!1sar!2seg!4v1728475750168!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      active: false,
      coverImage: 'https://images.unsplash.com/photo-1490351267196-b7a67e26e41b?q=80&w=1362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A vibrant town center with boutique stores and local eateries.'
  },
  {
      id: 8,
      name: 'Shopping Plaza',
      address: '789 Maple Ave, Springfield',
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13689.089251183399!2d31.15958365!3d30.934958250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb74340bac1f%3A0x4bc6585259ee275a!2z2YXYr9ix2LPYqSDYrNmI2K_YqSDYp9mE2YbYp9iv2Yog2YTZhNiq2LnZhNmK2YUg2KfZhNij2LPYp9iz2Yo!5e0!3m2!1sar!2seg!4v1728475750168!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      active: true,
      coverImage: 'https://plus.unsplash.com/premium_photo-1661340695541-ee1ca7efedd0?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A spacious plaza with a range of shops, from high-end retailers to budget stores.'
  },
  {
      id: 9,
      name: 'The Grand Mall',
      address: '101 Oak St, Springfield',
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13689.089251183399!2d31.15958365!3d30.934958250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb74340bac1f%3A0x4bc6585259ee275a!2z2YXYr9ix2LPYqSDYrNmI2K_YqSDYp9mE2YbYp9iv2Yog2YTZhNiq2LnZhNmK2YUg2KfZhNij2LPYp9iz2Yo!5e0!3m2!1sar!2seg!4v1728475750168!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      active: true,
      coverImage: 'https://images.unsplash.com/photo-1504802318913-d3f9a487448c?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'An iconic mall with a premium selection of international brands and dining options.'
  },
  {
      id: 10,
      name: 'Retail Park',
      address: '102 Pine St, Springfield',
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13689.089251183399!2d31.15958365!3d30.934958250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb74340bac1f%3A0x4bc6585259ee275a!2z2YXYr9ix2LPYqSDYrNmI2K_YqSDYp9mE2YbYp9iv2Yog2YTZhNiq2LnZhNmK2YUg2KfZhNij2LPYp9iz2Yo!5e0!3m2!1sar!2seg!4v1728475750168!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      active: true,
      coverImage: 'https://images.unsplash.com/photo-1490351267196-b7a67e26e41b?q=80&w=1362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A well-located retail park with a variety of outlets and great accessibility.'
  },
  {
      id: 11,
      name: 'City Mall',
      address: '123 Main St, Springfield',
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13689.089251183399!2d31.15958365!3d30.934958250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb74340bac1f%3A0x4bc6585259ee275a!2z2YXYr9ix2LPYqSDYrNmI2K_YqSDYp9mE2YbYp9iv2Yog2YTZhNiq2LnZhNmK2YUg2KfZhNij2LPYp9iz2Yo!5e0!3m2!1sar!2seg!4v1728475750168!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      active: false,
      coverImage: 'https://images.unsplash.com/photo-1535007135893-61091db8c179?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A bustling mall in the heart of the city, offering both luxury and budget options.'
  },
  {
      id: 12,
      name: 'Town Center',
      address: '456 Elm St, Springfield',
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13689.089251183399!2d31.15958365!3d30.934958250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb74340bac1f%3A0x4bc6585259ee275a!2z2YXYr9ix2LPYqSDYrNmI2K_YqSDYp9mE2YbYp9iv2Yog2YTZhNiq2LnZhNmK2YUg2KfZhNij2LPYp9iz2Yo!5e0!3m2!1sar!2seg!4v1728475750168!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      active: false,
      coverImage: 'https://images.unsplash.com/photo-1490351267196-b7a67e26e41b?q=80&w=1362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A centrally located hub for shopping and dining with a mix of popular and unique stores.'
  },
  {
      id: 13,
      name: 'Shopping Plaza',
      address: '789 Maple Ave, Springfield',
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13689.089251183399!2d31.15958365!3d30.934958250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb74340bac1f%3A0x4bc6585259ee275a!2z2YXYr9ix2LPYqSDYrNmI2K_YqSDYp9mE2YbYp9iv2Yog2YTZhNiq2LnZhNmK2YUg2KfZhNij2LPYp9iz2Yo!5e0!3m2!1sar!2seg!4v1728475750168!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      active: false,
      coverImage: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A plaza known for its range of shops, from small local businesses to large retail chains.'
  },
  {
      id: 14,
      name: 'The Grand Mall',
      address: '101 Oak St, Springfield',
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13689.089251183399!2d31.15958365!3d30.934958250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb74340bac1f%3A0x4bc6585259ee275a!2z2YXYr9ix2LPYqSDYrNmI2K_YqSDYp9mE2YbYp9iv2Yog2YTZhNiq2LnZhNmK2YUg2KfZhNij2LPYp9iz2Yo!5e0!3m2!1sar!2seg!4v1728475750168!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13689.089251183399!2d31.15958365!3d30.934958250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb74340bac1f%3A0x4bc6585259ee275a!2z2YXYr9ix2LPYqSDYrNmI2K_YqSDYp9mE2YbYp9iv2Yog2YTZhNiq2LnZhNmK2YUg2KfZhNij2LPYp9iz2Yo!5e0!3m2!1sar!2seg!4v1728475750168!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      active: false,
      coverImage: 'https://images.unsplash.com/photo-1535007135893-61091db8c179?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'An elegant shopping mall offering a premium shopping experience in a beautiful setting.'
  },
  {
      id: 15,
      name: 'Retail Park',
      address: '102 Pine St, Springfield',
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13689.089251183399!2d31.15958365!3d30.934958250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb74340bac1f%3A0x4bc6585259ee275a!2z2YXYr9ix2LPYqSDYrNmI2K_YqSDYp9mE2YbYp9iv2Yog2YTZhNiq2LnZhNmK2YUg2KfZhNij2LPYp9iz2Yo!5e0!3m2!1sar!2seg!4v1728475750168!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      active: false,
      coverImage: 'https://images.unsplash.com/photo-1490351267196-b7a67e26e41b?q=80&w=1362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A convenient retail park with a good variety of stores catering to all needs.'
  },
  {
      id: 16,
      name: 'City Mall',
      address: '123 Main St, Springfield',
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13689.089251183399!2d31.15958365!3d30.934958250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb74340bac1f%3A0x4bc6585259ee275a!2z2YXYr9ix2LPYqSDYrNmI2K_YqSDYp9mE2YbYp9iv2Yog2YTZhNiq2LnZhNmK2YUg2KfZhNij2LPYp9iz2Yo!5e0!3m2!1sar!2seg!4v1728475750168!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      active: false,
      coverImage: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A well-known shopping destination with a large selection of stores and amenities.'
  },
  {
      id: 17,
      name: 'Town Center',
      address: '456 Elm St, Springfield',
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13689.089251183399!2d31.15958365!3d30.934958250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb74340bac1f%3A0x4bc6585259ee275a!2z2YXYr9ix2LPYqSDYrNmI2K_YqSDYp9mE2YbYp9iv2Yog2YTZhNiq2LnZhNmK2YUg2KfZhNij2LPYp9iz2Yo!5e0!3m2!1sar!2seg!4v1728475750168!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      active: false,
      coverImage: 'https://images.unsplash.com/photo-1504802318913-d3f9a487448c?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A vibrant town center with boutique stores, local vendors, and seasonal events.'
  },
  {
      id: 18,
      name: 'Shopping Plaza',
      address: '789 Maple Ave, Springfield',
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13689.089251183399!2d31.15958365!3d30.934958250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb74340bac1f%3A0x4bc6585259ee275a!2z2YXYr9ix2LPYqSDYrNmI2K_YqSDYp9mE2YbYp9iv2Yog2YTZhNiq2LnZhNmK2YUg2KfZhNij2LPYp9iz2Yo!5e0!3m2!1sar!2seg!4v1728475750168!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      active: false,
      coverImage: 'https://images.unsplash.com/photo-1490351267196-b7a67e26e41b?q=80&w=1362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A shopping plaza known for its convenient layout and wide range of retail stores.'
  },
  {
      id: 19,
      name: 'The Grand Mall',
      address: '101 Oak St, Springfield',
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13689.089251183399!2d31.15958365!3d30.934958250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb74340bac1f%3A0x4bc6585259ee275a!2z2YXYr9ix2LPYqSDYrNmI2K_YqSDYp9mE2YbYp9iv2Yog2YTZhNiq2LnZhNmK2YUg2KfZhNij2LPYp9iz2Yo!5e0!3m2!1sar!2seg!4v1728475750168!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      active: false,
      coverImage: 'https://images.unsplash.com/photo-1535007135893-61091db8c179?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A prestigious mall offering a high-end shopping experience with exclusive brands.'
  },
  {
      id: 20,
      name: 'Retail Park',
      address: '102 Pine St, Springfield',
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13689.089251183399!2d31.15958365!3d30.934958250000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb74340bac1f%3A0x4bc6585259ee275a!2z2YXYr9ix2LPYqSDYrNmI2K_YqSDYp9mE2YbYp9iv2Yog2YTZhNiq2LnZhNmK2YUg2KfZhNij2LPYp9iz2Yo!5e0!3m2!1sar!2seg!4v1728475750168!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      active: false,
      coverImage: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A family-friendly retail park with a variety of shopping and dining options.'
  }
];

// Mocked API calls
export const getMalls = async () => {
  // Simulate an API response with dummy data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyMalls);
    }, 1000); // Simulating network delay
  });
};

export const deleteMall = async (id) => {
  // Simulate deleting a mall by filtering out the deleted mall from the dummy data
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = dummyMalls.findIndex(mall => mall.id === id);
      if (index !== -1) {
        dummyMalls.splice(index, 1); // Remove the mall from the dummy data
      }
      resolve(); // No return value needed for delete
    }, 1000);
  });
};

export const createMall = async (mallData) => {
  // Simulate creating a mall by adding to the dummy data
  return new Promise((resolve) => {
    setTimeout(() => {
      const newMall = { id: dummyMalls.length + 1, ...mallData };
      dummyMalls.push(newMall);
      resolve(newMall); // Return the newly created mall
    }, 1000);
  });
};

export const updateMall = async (id, mallData) => {
  // Simulate updating a mall in the dummy data
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = dummyMalls.findIndex(mall => mall.id === id);
      if (index !== -1) {
        dummyMalls[index] = { ...dummyMalls[index], ...mallData };
      }
      resolve(dummyMalls[index]); // Return the updated mall
    }, 1000);
  });
};