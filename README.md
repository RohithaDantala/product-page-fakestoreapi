# 🛒 Product List App

A responsive e-commerce product listing application built with HTML, CSS, and JavaScript that fetches product data from the Fake Store API.

## 🚀 Features

- 📦 Dynamic product grid layout
- 🛍️ Product details page with full information
- 📱 Fully responsive design
- 🎨 Modern pink-themed UI
- ⚡ Fast API integration
- 💾 localStorage for data persistence
- 🔍 Detailed product view with images and descriptions
- 🎯 Smooth hover animations and transitions

## 🛠️ Technologies Used

- **HTML5** - Structure and markup
- **CSS3** - Styling, Grid layout, animations
- **JavaScript (ES6)** - Dynamic functionality and API calls
- **Fake Store API** - Product data source
- **localStorage** - Client-side data storage

## 📋 Project Structure

```
product-list-app/
├── index.html          # Main product listing page
├── product.html        # Individual product details page
├── style.css           # Styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 📄 File Details

### 🏠 index.html
- Main product listing page
- Grid layout for product cards
- Links to external CSS and JavaScript files

### 🧾 product.html
- Individual product details page
- Displays comprehensive product information
- Fetches specific product data using product ID

### 🎨 style.css
- Modern pink-themed design
- Responsive grid layout
- Smooth animations and hover effects
- Mobile-first responsive design
- Beautiful card-based UI components

### ⚡ script.js
- Fetches products from Fake Store API
- Dynamically creates product cards
- Handles navigation to product details
- Error handling for API failures

## 🌐 API Integration

The app uses the **Fake Store API** to fetch product data:
- **Products List**: `https://fakestoreapi.com/products`
- **Single Product**: `https://fakestoreapi.com/products/{id}`

### Product Data Structure
- Title and description
- Product images
- Categories
- Pricing information
- Unique product IDs

## 🎨 Design Features

### Color Scheme
- 🌸 Primary Background: `#f8d7da` (Light Pink)
- 🤍 Card Background: `#ffffff` (White)
- 💜 Accent Color: `#d63384` (Pink)
- 🎯 Button Color: `#ddb3d3` (Soft Pink)

### Responsive Design
- 💻 Desktop: Multi-column grid layout
- 📱 Tablet: Adaptive grid columns
- 📞 Mobile: Single column layout
- 🔄 Smooth transitions between breakpoints

### Interactive Elements
- ✨ Hover animations on product cards
- 🎯 Button hover effects with shadow
- 📈 Transform animations
- 🎨 Smooth color transitions

## 🚀 Getting Started

1. **Clone or download the project files**
   ```
   index.html
   product.html
   style.css
   script.js
   ```

2. **Open in web browser**
   ```bash
   # Simply open index.html in your browser
   open index.html
   ```

3. **Or use a local server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

## 💡 How It Works

### Product Listing Flow
1. 📥 App fetches products from Fake Store API
2. 🏗️ JavaScript dynamically creates product cards
3. 🖼️ Each card displays image, title, and price
4. 🎯 "View Details" button stores product ID in localStorage

### Product Details Flow
1. 🆔 Product ID retrieved from localStorage
2. 📡 Specific product data fetched from API
3. 📄 Detailed information displayed on product page
4. 🖼️ Full product image and description shown

## 📱 Responsive Breakpoints

- **Desktop**: > 768px (Multi-column grid)
- **Tablet**: 481px - 768px (Adaptive columns)
- **Mobile**: ≤ 480px (Single column)

## 🎯 Key Features

### Product Cards
- 🖼️ High-quality product images
- 📝 Product titles and pricing
- 🎨 Elegant card design with shadows
- ⚡ Smooth hover animations

### Product Details
- 📋 Complete product information
- 🏷️ Category and description
- 💰 Pricing details
- 🖼️ Large product images

## 🔧 Customization

### Styling
- Modify CSS variables for different color themes
- Adjust grid layout and card dimensions
- Customize animations and transitions

### Functionality
- Add shopping cart functionality
- Implement product search and filtering
- Add user reviews and ratings
- Include wishlist features

## ⚠️ Browser Compatibility

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- 📱 Mobile browsers supported

## 🎯 Future Enhancements

- [ ] 🛒 Shopping cart functionality
- [ ] 🔍 Product search and filtering
- [ ] ⭐ Product ratings and reviews
- [ ] 💖 Wishlist feature
- [ ] 🔐 User authentication
- [ ] 💳 Payment integration
- [ ] 📊 Product comparison
- [ ] 🌙 Dark mode toggle

## 🤝 Contributing

Feel free to contribute by:
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🔧 Submitting pull requests
- 📖 Improving documentation

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **Fake Store API** for providing the product data

---

⭐ **Star this repository if you found it helpful!**
