import express from "express";
import { getRooms, createRoom, bookingRoom, bookedRooms, bookedRoomCustomer } from "../service/room.service.js";

const router = express.Router();

// Displaying Room

router.get("/", async function (request, response) {
    // response.send("Welcome to Hall Booking");

    const res = await getRooms();
    response.send(res)
});

// 1. Create a Room 

router.post('/', async function(request, response){

    const newRoom = await createRoom(request);
    response.send(newRoom);

})

// 2. Booking a Room

router.post('/book', async function(request, response) {

    const newBooking = await bookingRoom(request)
    response.send(newBooking);
})

// 3. List All the Booked Rooms

router.get('/booked-status', async function(request, response) {
    
    const bookedRoomStatus = await bookedRooms();
    response.send(bookedRoomStatus)
})

// 4. List all Customers with booked data

router.get('/booked-customer', async function(request, response) {
    
    const bookedRoom = await bookedRoomCustomer();
    response.send(bookedRoom)
})

export default router;