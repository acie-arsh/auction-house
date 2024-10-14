import mongoose from "mongoose";

const commissionSchema = mongoose.Schema({
    amount: Number,
    user: mongoose.Schema.Types.ObjectId,
    createdOn: {
        type: Date,
        default: Date.now,
    },
});

export const Commission = mongoose.model("Commission", commissionSchema);