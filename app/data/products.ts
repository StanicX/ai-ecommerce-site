export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews?: number;
  colors?: string[];
  sizes?: string[];
  brand?: string;
}

export const products: Product[] = [
  // Men's products
  {
    id: 'm1',
    name: 'Classic Fit Cotton T-shirt',
    description: 'A comfortable, everyday t-shirt made from 100% soft cotton.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'men',
    rating: 4.5,
    reviews: 1245,
    colors: ['Black', 'White', 'Navy', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    brand: 'Loomé Essentials'
  },
  {
    id: 'm2',
    name: 'Slim Fit Stretch Jeans',
    description: 'Modern slim fit jeans with just the right amount of stretch for comfort.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'men',
    rating: 4.3,
    reviews: 987,
    colors: ['Dark Blue', 'Black', 'Gray'],
    sizes: ['30x30', '32x32', '34x34', '36x34'],
    brand: 'Loomé Classic'
  },
  {
    id: 'm3',
    name: 'Casual Oxford Button-Down Shirt',
    description: 'A versatile button-down shirt perfect for work or casual wear.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'men',
    rating: 4.7,
    reviews: 456,
    colors: ['White', 'Blue', 'Pink', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Loomé Premium'
  },
  {
    id: 'm4',
    name: 'Lightweight Performance Hoodie',
    description: 'A technical hoodie designed for movement and comfort during activities.',
    price: 65.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'men',
    rating: 4.8,
    reviews: 789,
    colors: ['Black', 'Gray', 'Navy', 'Green'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    brand: 'Loomé Active'
  },
  {
    id: 'm5',
    name: 'Tailored Fit Blazer',
    description: 'A modern blazer with a tailored fit, perfect for formal occasions.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'men',
    rating: 4.6,
    reviews: 321,
    colors: ['Navy', 'Black', 'Gray'],
    sizes: ['38R', '40R', '42R', '44R'],
    brand: 'Loomé Collection'
  },
  {
    id: 'm6',
    name: 'Athletic Performance Shorts',
    description: 'Lightweight, quick-drying shorts designed for maximum comfort during workouts.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1577538928305-3807c3993047?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'men',
    rating: 4.5,
    reviews: 678,
    colors: ['Black', 'Gray', 'Blue', 'Red'],
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Loomé Active'
  },
  {
    id: 'm7',
    name: 'Wool Blend Overcoat',
    description: 'A luxurious wool-blend overcoat to keep you warm during colder months.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1608236415053-3691791bbffe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'men',
    rating: 4.9,
    reviews: 234,
    colors: ['Camel', 'Black', 'Charcoal'],
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Loomé Premium'
  },
  {
    id: 'm8',
    name: 'Striped Crew Neck Sweater',
    description: 'A classic striped sweater made from soft, comfortable cotton.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'men',
    rating: 4.3,
    reviews: 567,
    colors: ['Navy/White', 'Black/Gray', 'Green/Navy'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    brand: 'Loomé Essentials'
  },

  // Women's products
  {
    id: 'w1',
    name: 'Floral Print Wrap Dress',
    description: 'A flattering wrap dress with a beautiful floral print pattern.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'women',
    rating: 4.8,
    reviews: 1423,
    colors: ['Blue Floral', 'Red Floral', 'Green Floral'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    brand: 'Loomé Collection'
  },
  {
    id: 'w2',
    name: 'High-Waisted Skinny Jeans',
    description: 'Figure-hugging skinny jeans with a comfortable high waist.',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1543424445-42c444d91cc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'women',
    rating: 4.6,
    reviews: 1098,
    colors: ['Dark Blue', 'Black', 'Light Blue'],
    sizes: ['24', '26', '28', '30', '32'],
    brand: 'Loomé Essentials'
  },
  {
    id: 'w3',
    name: 'Classic Trench Coat',
    description: 'A timeless trench coat that adds sophistication to any outfit.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1615504412548-89b2abc6cac4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'women',
    rating: 4.9,
    reviews: 876,
    colors: ['Beige', 'Black', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L'],
    brand: 'Loomé Premium'
  },
  {
    id: 'w4',
    name: 'Soft Knit Sweater',
    description: 'A cozy, lightweight sweater perfect for layering in any season.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1561834756-525e8bf7bcac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'women',
    rating: 4.7,
    reviews: 654,
    colors: ['Cream', 'Dusty Rose', 'Gray', 'Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    brand: 'Loomé Classic'
  },
  {
    id: 'w5',
    name: 'Yoga Leggings with Pockets',
    description: 'High-performance leggings with convenient side pockets for your essentials.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1552881407-15a356e53c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'women',
    rating: 4.8,
    reviews: 2145,
    colors: ['Black', 'Navy', 'Burgundy', 'Forest Green'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    brand: 'Loomé Active'
  },
  {
    id: 'w6',
    name: 'Button Front Maxi Skirt',
    description: 'A flowy maxi skirt with button details and a comfortable elastic waistband.',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'women',
    rating: 4.5,
    reviews: 432,
    colors: ['Mustard', 'Black', 'White'],
    sizes: ['XS', 'S', 'M', 'L'],
    brand: 'Loomé Essentials'
  },
  {
    id: 'w7',
    name: 'Tailored Blazer',
    description: 'A structured, professional blazer perfect for the office or dressy occasions.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1576164285450-4e31f847f04f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'women',
    rating: 4.6,
    reviews: 321,
    colors: ['Black', 'Navy', 'Gray'],
    sizes: ['0', '2', '4', '6', '8', '10', '12'],
    brand: 'Loomé Premium'
  },
  {
    id: 'w8',
    name: 'Off-Shoulder Blouse',
    description: 'A feminine off-shoulder blouse made from lightweight, breathable fabric.',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1602073559575-8bbc98b32b32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'women',
    rating: 4.4,
    reviews: 543,
    colors: ['White', 'Blue', 'Black', 'Red'],
    sizes: ['XS', 'S', 'M', 'L'],
    brand: 'Loomé Classic'
  },

  // Kids products
  {
    id: 'k1',
    name: 'Graphic Print T-shirt',
    description: 'Fun, colorful graphic tee made from soft, durable cotton.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1519238359922-989348752efb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'kids',
    rating: 4.7,
    reviews: 234,
    colors: ['Blue', 'Yellow', 'Green'],
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    brand: 'Loomé Kids'
  },
  {
    id: 'k2',
    name: 'Elastic Waist Denim Jeans',
    description: 'Comfortable, adjustable jeans that grow with your child.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1543053975-4b606a4977bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'kids',
    rating: 4.6,
    reviews: 187,
    colors: ['Blue', 'Black'],
    sizes: ['3Y', '4Y', '5Y', '6Y', '7Y', '8Y'],
    brand: 'Loomé Kids'
  },
  {
    id: 'k3',
    name: 'Colorblock Hoodie',
    description: 'A warm, fun hoodie with colorful block patterns.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'kids',
    rating: 4.8,
    reviews: 156,
    colors: ['Multicolor', 'Blue/Green', 'Pink/Purple'],
    sizes: ['3-4Y', '5-6Y', '7-8Y', '9-10Y'],
    brand: 'Loomé Kids'
  },
  {
    id: 'k4',
    name: 'Summer Cotton Dress',
    description: 'A lightweight, breezy dress perfect for sunny days.',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'kids',
    rating: 4.9,
    reviews: 210,
    colors: ['Pink Floral', 'Blue Stripe', 'Yellow'],
    sizes: ['2Y', '3Y', '4Y', '5Y', '6Y'],
    brand: 'Loomé Kids'
  },

  // Additional Men's products
  {
    id: 'm9',
    name: 'Quilted Puffer Vest',
    description: 'Lightweight, insulated vest perfect for layering in cooler weather.',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1591047139756-edb899e6ac5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'men',
    rating: 4.4,
    reviews: 278,
    colors: ['Black', 'Navy', 'Olive'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    brand: 'Loomé Essentials'
  },
  {
    id: 'm10',
    name: 'Tropical Print Short-Sleeve Shirt',
    description: 'Vibrant tropical print shirt perfect for summer days or vacations.',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1517191297489-48c463380e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'men',
    rating: 4.3,
    reviews: 412,
    colors: ['Blue Print', 'Green Print', 'Black Print'],
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Loomé Summer'
  },
  {
    id: 'm11',
    name: 'Classic Denim Jacket',
    description: 'A timeless denim jacket that goes with everything in your wardrobe.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'men',
    rating: 4.8,
    reviews: 358,
    colors: ['Blue', 'Black', 'Light Wash'],
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Loomé Classic'
  },
  {
    id: 'm12',
    name: 'Moisture-Wicking Running Shirt',
    description: 'Technical running shirt with moisture management for maximum comfort.',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1576458088244-99522451c740?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'men',
    rating: 4.5,
    reviews: 563,
    colors: ['Black', 'Blue', 'Red', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    brand: 'Loomé Active'
  },

  // Additional Women's products
  {
    id: 'w9',
    name: 'Pleated Midi Skirt',
    description: 'An elegant pleated skirt that transitions perfectly from office to evening.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'women',
    rating: 4.7,
    reviews: 329,
    colors: ['Black', 'Navy', 'Forest Green'],
    sizes: ['XS', 'S', 'M', 'L'],
    brand: 'Loomé Premium'
  },
  {
    id: 'w10',
    name: 'Cropped Denim Jacket',
    description: 'A versatile cropped jacket perfect for adding a layer to any outfit.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'women',
    rating: 4.6,
    reviews: 421,
    colors: ['Blue', 'White', 'Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    brand: 'Loomé Classic'
  },
  {
    id: 'w11',
    name: 'Ribbed Tank Top',
    description: 'A comfortable, form-fitting tank made from soft, ribbed fabric.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'women',
    rating: 4.3,
    reviews: 512,
    colors: ['White', 'Black', 'Beige', 'Sage'],
    sizes: ['XS', 'S', 'M', 'L'],
    brand: 'Loomé Essentials'
  },
  {
    id: 'w12',
    name: 'Linen Blend Shirt Dress',
    description: 'A breathable, lightweight shirt dress perfect for warm weather.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1623535074756-a1ebad705717?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'women',
    rating: 4.9,
    reviews: 345,
    colors: ['White', 'Blue Stripe', 'Beige'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    brand: 'Loomé Summer'
  },

  // Additional Kids products
  {
    id: 'k5',
    name: 'Dinosaur Print Pajama Set',
    description: 'Fun dinosaur print pajamas made from soft, comfortable cotton.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1626128665085-483747621778?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'kids',
    rating: 4.9,
    reviews: 178,
    colors: ['Blue', 'Green', 'Gray'],
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y'],
    brand: 'Loomé Kids'
  },
  {
    id: 'k6',
    name: 'Waterproof Rain Jacket',
    description: 'Keep your little one dry with this waterproof hooded rain jacket.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'kids',
    rating: 4.8,
    reviews: 145,
    colors: ['Yellow', 'Blue', 'Red'],
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'],
    brand: 'Loomé Kids'
  },
  {
    id: 'k7',
    name: 'Pull-On Shorts Set - 3 Pack',
    description: 'Set of three comfortable pull-on shorts in different colors.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1565254777464-99c1148ae688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'kids',
    rating: 4.5,
    reviews: 203,
    colors: ['Multi'],
    sizes: ['2Y', '3Y', '4Y', '5Y', '6Y'],
    brand: 'Loomé Kids'
  },
  {
    id: 'k8',
    name: 'School Uniform Polo Shirt',
    description: 'Classic polo shirt made from durable, easy-care fabric perfect for school days.',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1603566541830-78d7181f1698?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'kids',
    rating: 4.6,
    reviews: 267,
    colors: ['White', 'Blue', 'Navy'],
    sizes: ['4-5Y', '6-7Y', '8-9Y', '10-11Y', '12-13Y'],
    brand: 'Loomé School'
  }
]; 