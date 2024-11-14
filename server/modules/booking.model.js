const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
    },
    customerEmail: {
      type: String,
      required: false,
    },
    customerPhoneNumber: {
      type: String,
      required: true,
    },
    numberOfPassengers: {
      type: Number,
      required: true,
      min: 1,
    },
    isReturnTrip: {
      type: Boolean,
      required: true,
    },
    hasBaggage: {
      type: Boolean,
      required: true,
    },
    hasAnimals: {
      type: Boolean,
      required: true,
    },
    dropOffLocation: {
      type: String,
      required: true,
      trim: true,
    },
    pickUpLocation: {
      type: String,
      required: true,
      trim: true,
    },
    deliveryTime: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
