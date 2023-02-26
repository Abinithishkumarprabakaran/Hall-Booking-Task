import { client } from "../index.js";

// Displaying Room

export async function getRooms() {
    return await client
        .db("day40task")
        .collection("room")
        .find({})
        .toArray();
}

// 1. Create a Room 

export async function createRoom(request) {
    const { seats_available, amenities, price_per_hour } = request.body;

    const newRoom = [{
        id: Math.floor(Math.random() * 10).toString(),
        seats_available,
        amenities,
        price_per_hour
    }];
    return await client
        .db("day40task")
        .collection("room")
        .insertMany(newRoom)
}

// 2. Booking a Room

export async function bookingRoom(request) {
    const { customerName, date, startTime, endTime, roomName, status} = request.body;
    
    const newBooking = [{
        customerName,
        date, 
        startTime, 
        endTime, 
        roomName,
        status
    }]

    return await client
        .db("day40task")
        .collection("bookedRooms")
        .insertMany(newBooking)
}

// 3. List All the Booked Rooms

export async function bookedRooms() {
    return await client
        .db("day40task")
        .collection("bookedRooms")
        .find({})
        .toArray();
}

// 4. List all Customers with booked data

export async function bookedRoomCustomer() {
    return await client
        .db("day40task")
        .collection("bookedRooms")
        .find({}, {status: 0})
        .toArray();
}