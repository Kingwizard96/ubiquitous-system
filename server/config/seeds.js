const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    // Clean database
    await cleanDB('Category','categories');
    await cleanDB('Product', 'products');
    await cleanDB('User', 'users');

    // Seed categories
    const categories = await Category.insertMany([
        { name:'BuddiiJar' },
        { name:'BuddiiBox Go' },
        { name:'BuddiiBox Pro' }
    ]);
    console.log('categories seeded');

    // Seed products
    const products = await Product.insertMany([
        {
            name: 'BuddiiJar',
            description: 'BuddiiJar is a portable, discreet, smellproof, and stylish storage jar solution for your herbs.',
            price: 24.99,
            quantity: 400,
            category: categories[0]._id,
            image: 'jar.png'
        },
        {
            name: 'BuddiiBox Go',
            description: 'BuddiiBox Go is a portable, discreet, smellproof, and stylish storage solution for your travels and everyday use. It also includes a grinder and rolling tray.',
            price: 34.99,
            quantity: 250,
            category: categories[1]._id,
            image: 'go.png',
            grinder: { color: ['black', 'silver', 'green', 'grey'] }
        },
        {
            name: 'BuddiiBox Pro',
            description: 'BuddiiBox Pro is a portable, discreet, smellproof, and stylish storage solution for your travels. It also includes a grinder and rolling tray. With BuddiiBox Pro, you select the design of your choice as well.',
            price: 44.99,
            quantity: 150,
            category: categories[2]._id,
            image: 'pro.png',
            grinder: { color: ['black', 'silver', 'green', 'grey'] },
            design: [
                { name: 'Spaceview', image: 'spaceview.png' },
                { name: 'Sunset', image: 'sunset.png' },
                { name: 'Mountainview', image: 'freedom.png' },
                
            ]
        }
    ]);
    console.log('products seeded');

    // Define order data
    const orderData = [
        {
            username: 'testUser',
            email: 'email@testemail.com',
            password: 'password123?',
            products: [products[0]._id, products[1]._id] // Jar and BuddiiBox Go
        },
        {
            username: 'testUser2',
            email: 'email@emailtest.net',
            password: 'password132?',
            products: [products[0]._id, products[2]._id] // Jar and BuddiiBox Pro
        },
        {
            username: 'testUser3',
            email: 'email3@testemail.com',
            password: 'password12?3',
            products: [products[0]._id] // Only Jar
        }
    ];

    // Define available grinder counts
    const availableGrinders = {
        total: 400,
        colors: {
            black: 100,
            silver: 100,
            green: 100,
            grey: 100
        }
    };


    // Process orders
    for (const order of orderData) {
        // Check if the order includes BuddiiBox Go or Pro and deduct a BuddiiJar
        const includesGoOrPro = order.products.some(productId =>
            productId.equals(products[1]._id) || productId.equals(products[2]._id)
        );
        if (includesGoOrPro) {
            const jarIndex = order.products.findIndex(productId =>
                productId.equals(products[0]._id)
            );
            if (jarIndex !== -1) {
                order.products.splice(jarIndex, 1);
            }
        }

        // Calculate total grinders for each type of box in the order
        let totalGrinders = 0;
        for (const productId of order.products) {
            const product = products.find(p => p._id.equals(productId));
            if (product && product.grinder) {
                totalGrinders += product.grinder.color.length;
            }
        }

        // Check if there are enough grinders available for the order
        if (totalGrinders > availableGrinders.total) {
            console.log('Not enough grinders available for the order. Please adjust the order.');
            continue;
        }

        // Update available grinder counts
        availableGrinders.total -= totalGrinders;

        // Create user and order in the database
        await User.create({
            username: order.username,
            email: order.email,
            password: order.password,
            orders: [{ products: order.products }]
        });
    }

    console.log('users seeded');


    process.exit();
});