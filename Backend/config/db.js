const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
                // Hash the password
                const hashedPassword = await bcrypt.hash('admin123', 10);
        
                // Create admin user
                const adminUser = new User({
                    username: 'admin',
                    name: 'Admin User',
                    email: 'admin@test.com',
                    password: hashedPassword,
                    role: 'admin',
                    isAccountVerified: true
                });

                if(await User.findOne({ email: 'admin@test.com'})){
                    return 'Nice';
                }
                // Save the admin user
                await adminUser.save();
                console.log('Admin user created successfully');
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


module.exports = connectDB;