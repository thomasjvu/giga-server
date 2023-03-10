import mongoose from 'mongoose'
const { Schema } = mongoose

const orderModel = new Schema({
    gigId: {
        type: string,
        required: true
    },
    title: {
        type: string,
        required: true
    },
    img: {
        type: Number,
        required: false 
    },
    price: {
        type: Number,
        required: true
    },
    sellerId: {
        type: String,
        required: true
    },
    buyerId: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    payment_intent: {
        type: String,
        required: true
    }
}, {
        timestamps: true
})

export default mongoose.model("Order", orderModel)
