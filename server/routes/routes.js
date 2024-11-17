const express = require("express");
const router = express.Router();
const Booking = require("../modules/booking.model");

router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBooking = await Booking.findByIdAndDelete(id);

    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({
      message: "Booking deleted successfully",
      booking: deletedBooking,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/", async (req, res) => {
  try {
    const deletedBookings = await Booking.deleteMany({}); // Delete all bookings

    res.status(200).json({
      message: `${deletedBookings.deletedCount} bookings deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
});

router.delete("/");

module.exports = router;
