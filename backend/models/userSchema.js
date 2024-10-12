import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        minLength: [3, "Username must contain at least 3 characters."],
        maxLength: [40, "Username cannot contain more than 40 characters."],
    },
    password: {
        type: String,
        selected: false,
        minLength: [8, "Password must contain at least 8 characters."],
        maxLength: [32, "Password must not exceed 32 characters."],
    },
    email: String,
    address: String,
    phone: {
        type: String,
        minLength: [10, "Please enter a valid phone number"],
        maxLength: [10, "Please enter a valid phone number"],
    },
    profileImage: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    paymentMethods: {
        bankTransfer: {
            bankAccountNumber: String,
            bankAccountName: String,
            bankName: String,
        },
        gPay: {
            upi_id: String,
        },
        paypal: {
            paypalEmail: String,
        },
    },
    role: {
        type: String,
        enum: ["Seller", "Buyer", "Admin"]
    },
    unpaidCommission: {
        type: Number,
        default: 0,
    },
    auctionsWon: {
        type: Number,
        default: 0,
    },
    moneySpent: {
        type: Number,
        default: 0,
    },
    createdOn: {
        type: Date,
        default: Date.now(),
    },

});

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.methods.generateJsonWebToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE,
    })
}

export const User = mongoose.model("User", userSchema);